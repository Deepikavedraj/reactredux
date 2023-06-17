// import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { decrement, increment, incrementByAmount} from './counterSlice'
// import {top} from './1.jpeg';

function Counter() {
    const count = useSelector((state) => state.counter.count)
    const Textcolor = useSelector((state) => state.colorChange.color)
    const dispatch = useDispatch()

  return (
    <>
    <h2 className='m-3'>Buy Products</h2>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>              
         <div class="card shadow" style={{backgroundColor:Textcolor}}>
            {/* <img src={top} class="card-img-top" alt="top" /> */}
            <div class="card-body">
              <p class="card-text">
              <h5>T-shirt</h5>
                <h6>
                <button type="button" className='btn btn-info text-white'  onClick={() => dispatch(increment())}>+</button>
                    <span className='value'> {count} </span>
                <button type="button" className='btn btn-info text-white' onClick={() => dispatch(decrement())}>-</button>
                </h6>
                </p>
            </div>
          </div>
        </div>

        <div className='col-md-4'>              
         <div class="card shadow" style={{backgroundColor:Textcolor}}>
            {/* <img src={top} class="card-img-top" alt="top" /> */}
            <div class="card-body">
              <p class="card-text">
              <h5>T-shirt</h5>
                <h6>
                <button type="button" className='btn btn-info text-white'  onClick={() => dispatch(increment())}>+</button>
                    <span className='value'> {count} </span>
                <button type="button" className='btn btn-info text-white' onClick={() => dispatch(decrement())}>-</button>
                </h6>
                </p>
            </div>
          </div>
        </div>

        <div className='col-md-4'>              
         <div class="card shadow" style={{backgroundColor:Textcolor}}>
            {/* <img src={top} class="card-img-top" alt="top" /> */}
            <div class="card-body">
              <p class="card-text">
                  <h5>T-shirt</h5>

                  <h6>
                  <button type="button" className='btn btn-info text-white'  onClick={() => dispatch(increment())}>+</button>
                      <span className='value'> {count} </span>
                  <button type="button" className='btn btn-info text-white' onClick={() => dispatch(decrement())}>-</button>
                  </h6>
                </p>
            </div>
          </div>
        </div>
      </div>
       

        <button type="button" className='btn btn-info mt-3 text-white' onClick={() => dispatch(incrementByAmount(10))}>Increment 10</button>
 
</div>
    </>
  )
}

export default Counter