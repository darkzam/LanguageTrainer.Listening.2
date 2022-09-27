import { convertMiliseconds } from "../../../../helpers/helpers";
import classes from "./TimeStamp.module.css"

const TimeStamp = (props)=>{
   return(
    <div className={classes.timeStampContainer}>
        <b>
            {convertMiliseconds(props.timeStamp)}
        </b>
    </div>
   );
}

export default TimeStamp;