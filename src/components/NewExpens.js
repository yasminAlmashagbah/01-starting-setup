import  './NewExpens.css';
import NewExpensForm from './NewExpensForm';
function NewExpens(props){

    function saveExpenseData(EnteredExpenseData){
        const expenseData={
            ...EnteredExpenseData,
            id:Math.random().toString()
        }
            console.log(expenseData);
            props.onAddExpense(expenseData);
    }

    return(
        <div className='new-expense'>
        <NewExpensForm onSaveExepenseData={saveExpenseData}/>
        </div>
    );

}
export default NewExpens;