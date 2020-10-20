import React from 'react'

const Display = (props) => {
   
    console.log('this is props in display:', props)
    const authorArr = props.authors.author
    console.log('this is authorArr:', authorArr)

    //this keeps saying author arr is undefined.... why?? it logs an array..?
    //honestly no clue why this doesn't work but I feel like this has happened to me before.
    const loaded = () => (
        <div>
            {authorArr.map((author) => (
                <div>
                    <h1>{author.firstName}</h1>
                    <h1>{author.lastName}</h1>
                    <h3>{author.cookbooks}</h3>
                    {/*honestly am assuming this works, but got tripped up on just display, this will be quick fix I assume if the authors ever render*/}
                    <button onClick={()=>{
                        props.selectAuth(author)
                        props.history.push('/addnew')
                    }}>UPDATE AUTHOR</button>
                    <button onClick={()=>{props.deleteAuthor(author)}}>DELETE AUTHOR</button>
                </div>
            ))}
        </div>
    )

    const loading = <h1>loading...</h1>

    return ((loading))
    
}

export default Display