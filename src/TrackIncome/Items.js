const Items = (props) => {
    const deleteClickHandler = () => {
        props.deleteIncome(props.item);
    }

    const editClickHandler = () => {
        props.editIncome(props.item);
    }

    const {description, price, date} = props.item;
    return(
        <tr>
            <td>{description}</td>
            <td>{price} Php</td>
            <td>{date}</td>
            <td>
                <i className="icon fas fa-edit" onClick={editClickHandler}></i>
                <i className="icon fas fa-times"onClick={deleteClickHandler}></i>
            </td>
        </tr>
    )
}

export default Items;