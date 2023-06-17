import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {changeTextColor} from './theameSlice';

function Theame() {
    const [color, setColor] = useState();
    const dispatch = useDispatch()
  return (
    <>
    <div className='contianer'>
      <div className='row d-flex justify-content-center mt-3'>
        <div className='col-md-6'>           
         <div class="card shadow p-4">
             <h4>Change Background Color</h4>
            <div class="card-body">
              <p class="card-text">
              <input type="text" className='form-control mt-3 mb-3' 
              value={color} onChange={(e) => setColor(e.target.value)} 
              placeholder='Enter Color' />

              <button className='btn btn-info text-white' onClick={() => {dispatch(changeTextColor(color))}}>Color Change</button>
             </p>
            </div>
        </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Theame