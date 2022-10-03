import { convertMiliseconds } from "../../../../helpers/helpers";
import classes from "./TimeStamp.module.css"

const TimeStamp = (props) => {

    const onClickHandler = () => {
        props.onTimeStampEvent(props.timeStamp);
    }

    return (
        <div className={classes.timeStampContainer}
            onClick={onClickHandler}
        >
            <b>
                {convertMiliseconds(props.timeStamp)}
            </b>
        </div>
    );
}

export default TimeStamp;