import { useState } from 'react'
import Home from './Components/Home/Home'
import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { get_current_temp } from './state/Action'

function App() {

  
  const data = useSelector((store) => store.current);
  console.log("this is the store" + data)
  console.log(data)

  return (
   <Home/>
  )
}

export default App
