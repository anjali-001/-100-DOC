import React from 'react'
import Jokes from './Jokes'


function Joke(){
    return(
        <div>
            <Jokes Ans= "There is no Joke"/>
            <Jokes
            Question= "What do you call a Dinosaur that is sleeping?"
            Ans= "A dino-snore"
            />
            <Jokes 
            Question = "Why did the Teddy Bear say no to dessert?"
            Ans= "He was stuffed"
            />

            <Jokes 
            Question = "What is fast Loud and crunchy?"
            Ans= "A rocket-chip"
            />

            <Jokes 
            Question = "What did the left Eye say to the right eye?"
            Ans= "Something smells"
            />
            <Jokes 
            Question = "What did one plate say to the other plate?"
            Ans= "Diner's on me."
            />

            
            </div>
    )
}

export default Joke