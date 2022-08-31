import classes from './BlankWord.module.css';
import { useState } from 'react';

function BlankWord(props) {

    let wordOriginal = props.wordOriginal;

    const [isWordSet, setIsWordSet] = useState(false);

    return (
        <div>
            <input
                className={!isWordSet ? `${classes.wordInput} ${classes.editable}` : `${classes.wordInput} ${classes.disabled}`}
                hidden={isWordSet}>
            </input>

            <p hidden={!isWordSet}>
                {props.wordText}
            </p>
        </div>

    );
}

export default BlankWord;
