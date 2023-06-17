import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <>
    <h2 className='m-3'>Buy Products</h2>
       <button type="button" className='btn btn-info' onClick={() => {setCount(count+1)}}>+</button>
          <h1><span>Value : {count}</span></h1>
       <button type="button" className='btn btn-info' onClick={() => {setCount(count-1)}}>-</button>
    </>
  )
}

export default Counter