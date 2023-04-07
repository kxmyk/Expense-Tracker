import {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const existing_expenses = [
	{id: 'e1', title: 'Toilet Paper', amount: 94, date: new Date(2021, 7, 14)},
	{id: 'e2', title: 'New TV', amount: 799, date: new Date(2021, 2, 12)},
	{id: 'e3', title: 'Car Insurance', amount: 294, date: new Date(2023, 2, 28)},
	{id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2022, 5, 12)},
	{id: 'e5', title: 'New MacBook', amount: 2399, date: new Date(2023, 1, 8)},
	{id: 'e6', title: 'Roof Repair', amount: 400, date: new Date(2022, 12, 1)},
]

const App = () => {
	const [expenses, setExpenses] = useState(existing_expenses);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses items={expenses}/>
		</>
	);
};

export default App;
