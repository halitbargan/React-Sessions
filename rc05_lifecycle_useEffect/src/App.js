import React, {useState} from 'react'
import ClassComponent from './components/ClassComponent'

function App() {
  const [isVisible, setIsVisible]= useState(true)
  return (
    <div className="App">
      {/* <h2>LifeCycles</h2> */}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Comp</button>
      {isVisible && <ClassComponent />}
      
    </div>
  )
}

export default App
