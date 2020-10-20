import React from 'react'

const Display = (props) => {
   
    console.log('this is props in display:', props)
    const authorArr = props.authors.author
    console.log('this is authorArr:', authorArr)

  //for whatever reason this always ends up working
    const load = () => {
        if (Array.isArray(authorArr)) {
            return (
							<div>
								{authorArr.map((author) => (
									<div>
										<h1>{author.firstName}</h1>
										<h1>{author.lastName}</h1>
										<h3>{author.cookbooks}</h3>
										<button
											onClick={() => {
												props.selectAuth(author);
												props.history.push('/addnew');
											}}>
											UPDATE AUTHOR
										</button>
										<button
											onClick={() => {
												props.deleteAuthor(author);
											}}>
											DELETE AUTHOR
										</button>
									</div>
								))}
							</div>
						);
        }
    }


    const loading = <h1>loading...</h1>

    return (Array.isArray(authorArr)) ? load() : loading
    
}

export default Display