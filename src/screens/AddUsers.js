import React from 'react';
import Header from '../components/Header';
function AddUsers() {
 return (
  <div className='home' style={{height: '90%'}}>
   <Header title={'Users'} />

   <div
    className='panel-body'
    style={{background: 'white', margin: 15, height: '100%'}}
   >
    <div className='setting-widget'>
     <div className='list no-hairlines-md'>
      <div className='widget-title'>
       <h3 className='text-center'>Add User</h3>
      </div>

      <form style={{}}>
       <ul>
        <li className='item-content item-input'>
         <div className='item-col'>
          <div className='item-title item-label'>
           E-mail <span>*</span>
          </div>
          <div className='item-input-wrap'>
           <input type='email' />
           <span className='input-clear-button'></span>
          </div>
         </div>
        </li>
        <li className='item-content item-input'>
         <div className='item-col'>
          <div className='item-title item-label'>
           First Name <span>*</span>
          </div>
          <div className='item-input-wrap'>
           <input type='text' />
           <span className='input-clear-button'></span>
          </div>
         </div>
        </li>
        <li className='item-content item-input'>
         <div className='item-col'>
          <div className='item-title item-label'>
           Last Name <span>*</span>
          </div>
          <div className='item-input-wrap'>
           <input type='text' />
           <span className='input-clear-button'></span>
          </div>
         </div>
        </li>

        <li className='item-content item-input'>
         <div className='item-col'>
          <div className='item-title item-label'>Phone Number</div>
          <div className='item-input-wrap'>
           <input type='tel' />
           <span className='input-clear-button'></span>
          </div>
         </div>
        </li>
        <li className='item-content item-input col-50 gender'>
         <div className='item-col'>
          <div className='item-title item-label'>Gender</div>
          <div className='item-input-wrap input-dropdown-wrap'>
           <select>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
           </select>
          </div>
         </div>
        </li>
        <li className='item-content item-input col-50 dob'>
         <div className='item-col'>
          <div className='item-title item-label'>From</div>
          <div className='item-input-wrap date-picker-col'>
           <input type='date' name='date' id='date' data-select='datepicker' />
           <span className='calendar-icon'>
            <img src='assets/img/icon-metro-calendar-big.svg' alt='' />
           </span>
          </div>
         </div>
        </li>
        <li
         className='bottom-button'
         style={{
          position: 'relative',
          bottom: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
         }}
        >
         <button className='btn'>Next</button>
        </li>
       </ul>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
}
export default AddUsers;
