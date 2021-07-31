import { useState, useEffect } from 'react';

const AddIncomeForm = (props) => {

    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (props.editIncome){
            setDescription(props.editIncome.description);
            setDate(props.editIncome.date);
            setPrice(props.editIncome.price);
        }
    }, [props.editIncome]);

    const btnClickHandler = () => {
        if (props.editIncome) {
            updateIncome();
        } else {
            addNewIncome();
        }
    }

    const addNewIncome = (e) => {
        let newIncome ={
            description: description,
            price: price,
            date: date,
        }
        props.addIncome(newIncome);
        setDescription('');
        setPrice('');
        setDate('');
    }

    const updateIncome = () => {
        let updatedIncome = {
            id: props.editIncome.id,
            description: description,
            price: price,
            date: date,
        }
        props.updateIncome(updatedIncome);
        setDescription('');
        setPrice('');
        setDate('');
    }

    return (
        <tr>
            <td className="custom-td" >
                <input 
                    type="text" 
                    name="desc" 
                    id="desc" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Income Description..." 
                /> 
                <input 
                    type="number" 
                    name="price" 
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price..." 
                />
                <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Income date..." 
                />
            <button className="btn blue btn-block" onClick={btnClickHandler}>{props.editIncome ? 'EDIT INCOME' : 'ADD TO INCOME'}</button></td>
        </tr>
    )
}

export default AddIncomeForm;