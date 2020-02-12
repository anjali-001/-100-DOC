import React from 'react'

// function Greet() {
//     return <h1>Hello Anjali</h1>
// }

const Greet = ({name, dept})=> {
return( 
    <div>
    <h1>
      Hello {name} a.k.a {dept}
    </h1>
  {/* {props.children} */}
  </div>
)
}

export default Greet