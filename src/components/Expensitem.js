import './expensitem.css';
import ExpenseDate from './ExpenseDate';
import React, {useState} from 'react';
function Expensitem(props){
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  let title = props.title;
  let amount = props.amount;
  const clickHanderler=()=>{console.log('clicked!!!')}
return ( <div className='expense-item'>
<div><ExpenseDate month={month} year={year} day={day}/></div>
 
<div className='expense-item__description'>
  <h2>{title}</h2>
  <div className='expense-item__price'>${amount}</div>
  <button onClick={clickHanderler}>change title</button>
</div>
</div>);

}
export default Expensitem;