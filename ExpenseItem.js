import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css"

const ExpenseItem = (props) => {

 

    const clickHandler = () => {
        console.log("clicked");
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
             <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
             </div>
             {/* <button onClick={()=> {console.log("clicked")}}>Change Title</button> */} 
             {/* this is anonymous arrow function */}
             <button onClick={clickHandler}>change title</button>
        </Card>
    )
}

export default ExpenseItem;