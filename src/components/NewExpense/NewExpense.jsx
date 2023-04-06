import './NewExpense.css'
import ExpenseForm from "./ExpenseForm.jsx"

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpanseData={saveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense