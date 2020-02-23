import React from 'react'

function Jokes(props){
    return(
    <div>
        <h3 style= {{display: !props.Question && 'none'}}> Question: {props.Question}</h3>
        <p style= {{color: !props.Question && '#888888'}}>Ans: {props.Ans}</p>
    </div>
    )
}

export default Jokes
