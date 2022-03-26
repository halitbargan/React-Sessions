import React, {useState} from 'react'
import ClassComponent from './components/ClassComponent'
import UseEffectComp from './components/UseEffectComp'
import UseStateComp from './components/UseStateComp'
import Users from './components/Users'

function App() {
  // const [isVisible, setIsVisible]= useState(true)
  return (
    <div className="App">
      {/* <h2>LifeCycles</h2> */}
      {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle Comp</button> */}
      {/* {isVisible && <ClassComponent />}  */}
      {/* <UseStateComp/> */}
      {/* {isVisible && <UseEffectComp />} */}
      <Users />
      
    </div>
  )
}

export default App
