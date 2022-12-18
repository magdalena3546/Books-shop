import { Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import styles from './AmountWidget.module.scss';

const AmountWidget = ({count, setCount, handleCountChange}) => {
    const handleDecrement = () => {
        if(setCount && count > 0) {
            setCount(parseInt(count) - 1);
        }
        if(!setCount && count > 0) {
            handleCountChange(parseInt(count) - 1);
        }
    };

  const handleIncrement = () => {
        if(setCount && count < 10) {
            setCount(parseInt(count) + 1);
        }
        if(!setCount && count < 10) {
            handleCountChange(parseInt(count) + 1);
        }
    };

    return(
    <div className = 'mb-4'>
        <FontAwesomeIcon as = {Button} onClick = {handleDecrement} className = {styles.icon} icon = {faMinusSquare}/> 
        <input className = {styles.input} value={count} disabled/>
        <FontAwesomeIcon  as = {Button} onClick = {handleIncrement} className = {styles.icon} icon = {faPlusSquare}/> 
    </div>
    )
};

export default AmountWidget;