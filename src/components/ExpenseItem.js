import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from './Card'

const ExpenseItem = (props) => {

    const clickHandler = () => {
        
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Delete</button>
    </Card>
  );
}
export default ExpenseItem;