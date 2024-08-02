import React, { useState } from 'react'
import useConsole from './useConsole'

export default function CustomeHook() {

    let [ count , setCount ] = useState(0)
    useConsole(count)
    function increment(){
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={increment}>button</button>
        <p>{count}</p>
        <p>gvcftdhgvcrxesyr4tr5hgtvrerdfg</p>
    </div>
  )
}
