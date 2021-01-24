/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import './App.css';

export default function App(props){
  var [todoList, setTodoList]= useState([])
  var [activeItem, setActiveItem] = useState({id:null, title:'',completed:false})
  var [editing, setEditing] = useState(false)
  
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  useEffect(() => {
    fetchTasks()
  },[]);

  function fetchTasks(){
    console.log('Fetching...')
    var url = 'http://127.0.0.1:8000/api/task-list/'
    fetch(url)
      .then(response => response.json())
        .then(data => setTodoList(data))
  }

  function handleChange(e){
    var value = e.target.value
    setActiveItem({...activeItem, title: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('ITEM: ', activeItem)

    var csrftoken = getCookie('csrftoken')
    var url = 'http://127.0.0.1:8000/api/task-create/'

    if(editing == true){
      var url = `http://127.0.0.1:8000/api/task-update/${activeItem.id}`
      setEditing(false)
    }

    fetch(url, {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(activeItem)
      }).then((response) => {
        fetchTasks()
        setActiveItem({id:null, title:'',completed:false})
      }).catch(function(error) {
        console.log('ERROR:', error)
      })
  }

  function startEdit(task){
    setActiveItem(task)
    setEditing(true)
  }

  function deleteItem(task){
    var csrftoken = getCookie('csrftoken')
    var url = `http://127.0.0.1:8000/api/task-delete/${task.id}`

    fetch(url,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
    }).then((response) => {
        fetchTasks()
      })
  }

  function strikeUnstrike(task){
    task.completed = !task.completed

    var csrftoken = getCookie('csrftoken')
    var url = `http://127.0.0.1:8000/api/task-update/${task.id}`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify({'completed': task.completed, 'title': task.title})
    }).then(() => {
        fetchTasks()
      })

    console.log('TASK: ', task.completed)
  }

  
  return(
    <div className="container">
      <div id="task-container">
          <div id="form-wrapper">
              <form id="form" onSubmit={handleSubmit} >

                  <div className="flex-wrapper">
                      <div style={{flex: 6}}>
                          <input id="title" className="form-control" onChange={handleChange} value= {activeItem.title} type="text" name="title" placeholder="Add task" />
                      </div>
                      <div style={{flex: 1}}>
                          <input id="submit" className="btn btn-warning" type="submit" />
                      </div>
                  </div>

              </form>
          </div>

          <div id="list-wrapper">
            {todoList.map(function(task, index){
              return(
                <div key={index} className="task-wrapper flex-wrapper">

                  <div style={{flex: 7}} onClick={() => strikeUnstrike(task)}>
                    {task.completed == false ? (
                      <span>{task.title}</span>
                      ) : (
                        <strike>{task.title}</strike>
                      )
                    }
                  </div>

                  <div style={{flex: 1}}>
                    <button className="btn btn-sm btn-outline-info" onClick={() => startEdit(task)}>Edit</button>
                  </div>

                  <div style={{flex: 1}}>
                    <button className="btn btn-sm btn-outline-dark delete" onClick={() => deleteItem(task)}>-</button>
                  </div>

                </div>
              )
            })}
          </div>

      </div>
    </div>
  )
}

