function ExpenseDate(props){


    return(
        <div className='expense-item'>
    <div>
  <div>{props.month}</div>
  <div>{props.year}</div>
  <div>{props.day}</div>
</div></div>
);
}
export default ExpenseDate;