import React from 'react'

function Jokes(props){
    return(
    <div>
        <h3 style= {{display: props.Question ? 'block' : 'none'}}> Question: {props.Question}</h3>
        <p>Ans: {props.Ans}</p>
    </div>
    )
}

export default Jokes