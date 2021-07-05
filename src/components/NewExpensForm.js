import React,{useState} from 'react';
import './NewExpens.css';

function NewExpensForm(props){
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredDate, setEnteredDate]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    // console.log(props);
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredDate:'',
    //     enteredAmount:''
    // });

    let titleChangeHandler=(event)=>{
       setEnteredTitle(event.target.value); 
        // setUserInput((previousState)=>{
        //   return{
        //     ...previousState,enteredTitle : event.target.value
        //   }

        // });
    }
    
    let amountChangeHandler=(event)=>{ 
      setEnteredAmount(event.target.value);
        // setUserInput((previousState)=>{
        //   return{
        //     ...previousState,enteredAmount: event.target.value
        //   }

        // });
    }
    
    let dateChangeHandler=(event)=>{
      setEnteredDate(event.target.value);
      // setUserInput((previousState)=>{
      //   return{
      //     ...previousState,enteredDate: event.target.value
      //   }

      // });
    }
    function SubmitHandeler(event){
     event.preventDefault();
      
      
      const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
      }
      console.log(expenseData);
        props.onSaveExepenseData(expenseData);
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');
    }
     
    return(
        <form onSubmit={SubmitHandeler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' value={enteredAmount} step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
    );
}



export default NewExpensForm;
