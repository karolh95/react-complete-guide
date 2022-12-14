import Expenses from './components/Expenses/Expenses';

function App() {
    const expenses = [
        { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 13) },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 11) },
        { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 27) },
        { id: 'e4', title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 5, 11) },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
