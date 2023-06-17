import React from 'react'
import { useSelector} from 'react-redux';

function Coin() {
    const count = useSelector((state) => state.counter.count)
    const Textcolor = useSelector((state) => state.colorChange.color)

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:Textcolor}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h5>React Redux</h5></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className=''>
        <h5><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
        <sup><span className='value'> {count} </span>
        </sup>
        </h5>
    </div>
  </div>
</nav>
    </>
  
  )
}

export default Coin