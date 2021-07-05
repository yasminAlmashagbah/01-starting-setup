import Expensitem from "./Expensitem";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
function CallExpenses(props){
  const [filteredYear,setfilteredYear]=useState('2020');
function filterChangeHandler(selectedYear){
console.log(selectedYear);
}

    return(<div >
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
<Expensitem
      title={props.expenses[0].title}
      amount={props.expenses[0].amount}
      date={props.expenses[0].date}
    ></Expensitem>
    <Expensitem
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
    ></Expensitem>
    <Expensitem
      title={props.expenses[2].title}
      amount={props.expenses[2].amount}
      date={props.expenses[2].date}
    ></Expensitem>
    <Expensitem
      title={props.expenses[3].title}
      amount={props.expenses[3].amount}
      date={props.expenses[3].date}
    ></Expensitem>
    </div>);
}
export default CallExpenses;