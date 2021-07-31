import { useState, useEffect } from 'react';
import AddIncomeForm from './TrackIncome/AddIncomeForm';
import Items from './TrackIncome/Items';
import Total from "./TrackIncome/Total";

const TrackIncome = () => {
    const [income, setIncome] = useState([]);
    const [editIncome, setEditIncome] = useState(false);
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
		let incomeTemp = 0;
		for(let i = 0; i < income.length; i++) {
			incomeTemp += parseInt(income[i].price);
		}
		setTotalIncome(incomeTemp);
	}, [income]);

    const addIncome = (newItem) => {
        newItem.id = income.length + 1;
        const itemsCopy = [...income];
        itemsCopy.push(newItem);
        setIncome(itemsCopy)
    }

    const deleteIncome = (item) => {
        const index = income.indexOf(item)
        const itemsCopy = [...income]
        itemsCopy.splice(index,1)
        setIncome(itemsCopy)
    }

    const editIncomes = (item) => {
        setEditIncome(item)
    }

    const updateIncome = (item) => {
        const itemsCopy = [...income];
        const index = itemsCopy.findIndex(i => i.id === item.id);
        itemsCopy[index] = item;
        setIncome(itemsCopy)
        setEditIncome(false)
    }
    
    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    const itemDisplay = income.sort(sortByDate).map(item =>
            <Items key={item.id} item={item} edit={editIncome} deleteIncome={deleteIncome} editIncome={editIncomes} />   
    )

    return (
		<div>
            <div className="row">
                <div className="col s8">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="5">{editIncome ? 'EDIT INCOME ITEM' : 'ADD TO INCOME'}</th>
                            </tr>
                        </thead>
                        <tbody>
                        <AddIncomeForm item={income} addIncome={addIncome} editIncome={editIncome}  updateIncome= {updateIncome}/>
                        </tbody>
                    </table>
                </div>
                <div className="col s4">
                <table>
                        <thead>
                            <tr>
                                <th>Total Income</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Total totalIncome={totalIncome} />
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="4">Items</th>
                            </tr>
                            <tr>
                                <th>Income Description</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemDisplay}
                        </tbody>
                    </table>
                </div>
            </div>	
		</div>
	);

}

export default TrackIncome;