import classes from './BlankWord.module.css';
import { useState, useEffect, useRef } from 'react';
import { preProcessWord } from "../../../../helpers/helpers";

const BlankWord = (props) => {

    let wordOriginal = props.wordOriginal;

    const [wordText, setWordText] = useState('');
    const [isWordSet, setIsWordSet] = useState(false);
    const [inputSize, setInputSize] = useState(0);
    const [errors, setErrors] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        resetInputSize();
        if (elementRef.current && elementRef.current.value) {
            elementRef.current.focus();
        }
    }, [isWordSet]);

    const keyUpHandler = () => {
        resetInputSize();
        checkErrors();
    }

    const onClickParagraphHandler = () => {
        setIsWordSet(false);
    }

    const onBlurHandler = () => {
        if (elementRef.current.value) {
            setWordText(elementRef.current.value);
            setIsWordSet(true);
            return;
        }

        setIsWordSet(false);
        setWordText(wordText);
        return;
    }

    const resetInputSize = () => {
        if (elementRef.current.value.length > 0) {
            setInputSize(elementRef.current.value.length > 1 ? elementRef.current.value.length - 1 : elementRef.current.value.length);
        }
        else {
            setInputSize(wordOriginal.length);
        }
    }

    const checkErrors = () => {
        setErrors(!(wordOriginal === preProcessWord(elementRef.current.value)));
    }

    return (
        <div>
            <input
                ref={elementRef}
                className={!isWordSet ? `${classes.wordInput} ${classes.editable}` : `${classes.wordInput} ${classes.disabled}`}
                hidden={isWordSet}
                onKeyUp={keyUpHandler}
                onBlur={onBlurHandler}
                size={inputSize}
                style={{ color: errors ? '#b71c1c' : 'black' }}
            >
            </input>

            <p hidden={!isWordSet}
                onClick={onClickParagraphHandler}
                style={{ color: errors ? '#b71c1c' : 'black' }}>
                {wordText}
            </p>
        </div>
    );
}

export default BlankWord;
