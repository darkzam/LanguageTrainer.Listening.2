import classes from './BlankWord.module.css';
import { useState, useEffect, useRef } from 'react';

function BlankWord(props) {

    let wordOriginal = props.wordOriginal;

    const [isWordSet, setIsWordSet] = useState(false);
    const [inputSize, setInputSize] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        keyUpHandler();
    }, []);

    function keyUpHandler() {
        resetInputSize();
    } 

    function resetInputSize() {
        if (elementRef.current.value.length > 0) {
            setInputSize(elementRef.current.value.length > 1 ? elementRef.current.value.length - 1 : elementRef.current.value.length);
        }
        else {
            setInputSize(wordOriginal.length);
        }
    }

    return (
        <div>
            <input ref={elementRef}
                className={!isWordSet ? `${classes.wordInput} ${classes.editable}` : `${classes.wordInput} ${classes.disabled}`}
                hidden={isWordSet}
                onKeyUp={keyUpHandler}
                size={inputSize}
            >
            </input>

            <p hidden={!isWordSet}>
                {props.wordText}
            </p>
        </div>
    );
}

export default BlankWord;
