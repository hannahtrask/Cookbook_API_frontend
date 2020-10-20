import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './Display'
import { Route, Link, Switch } from 'react-router-dom'
import Form from './Form'

const App = () => {

  const url = 'http://localhost:3000'
  const [authors, setAuthors] = useState([])

  const getAuthors = () => {fetch(url+'/api/authors/')
.then(res => res.json())
.then(data => {
  setAuthors(data)
})}
// console.log('this is authors in app:', authors)
useEffect(() => getAuthors(), []);
//for form
const emptyAuthor = {
  firstName: "first name",
  lastName: "last name",
  cookbooks: []
}

//for update.. still not sure why nothing is rendering but data is there
const [selectedAuth, setSelectedAuth] = useState(emptyAuthor)

const handleCreate = newAuthor => {
  fetch(url+'/api/authors/', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAuthor)
    //this then will update the list of authors
  }).then((res) =>{
    getAuthors()
  })
}

//this will update author
//assuming this will work
const handleUpdate = author => {
  fetch(url+'/api/authors/'+author._id, {
    method:"put",
    headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify(author)
  }).then((res) =>{
    getAuthors()
  })
}

//selects an author and sets the state to the selected author
const selectAuth = author => {
  setSelectedAuth(author)
}

//this will delete the author
//assuming this will work
const deleteAuthor = author => {
  fetch(url+'/api/authors/'+author._id, {
    method: "delete"
  }).then(()=>{
    getAuthors()
  })
}



  return (
		<div className='App'>
			<h1>author/cookbook site</h1>
			<hr />
			<Link to='/addnew'>
				<button>ADD AN AUTHOR</button>
			</Link>
			<main>
				<Switch>
					<Route
						exact
						path='/'
						render={(rp) => (
							<Display
								{...rp}
								authors={authors}
								deleteAuthor={deleteAuthor}
								selectAuth={selectAuth}
							/>
						)}
					/>
					<Route
						exact
						path='/addnew'
						render={(rp) => (
							<Form
								{...rp}
								label='addnew'
								author={emptyAuthor}
								handleSubmit={handleCreate}
							/>
						)}
					/>
					<Route
						exact
						path='/update'
						render={(rp) => (
							<Form
								{...rp}
								label='update'
								author={selectedAuth}
								handleSubmit={handleUpdate}
							/>
						)}
					/>
				</Switch>
			</main>
		</div>
	);
  


}

export default App;
