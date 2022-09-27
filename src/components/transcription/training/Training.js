import Button from '@mui/material/Button';
import BlankWord from './blankWord/BlankWord';
import TimeStamp from './timeStamp/TimeStamp';
import classes from './Training.module.css'

const SENTENCES_RAW =
    [{
        sentence: "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
        timeStamp: 14
    },
    {
        sentence: "They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.",
        timeStamp: 23
    },
    {
        sentence: "Mr. Dursley was the director of a firm called Grunnings, which made drills.",
        timeStamp: 33
    }];

function preProcessString(sentence) {
    let words = sentence.trim().toLowerCase().replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '').split(' ').filter(x => x);
    return words;
}

function Training(props) {

    let sentences = [];

    SENTENCES_RAW.forEach(element => {
        sentences.push({ words: preProcessString(element.sentence), timeStamp: element.timeStamp });
    });

    return (
        <div className={classes.trainingContainer}>
            <h1>{props.title}</h1>

            <h2>{props.chapterName}</h2>
            <h3>{props.chapterTitle}</h3>
            <div className={classes.column}>
                {sentences.map(sentence => {
                    return (
                        <div className={classes.sentenceContainer}>
                            <TimeStamp timeStamp={sentence.timeStamp}/>
                            
                            <div className={classes.row}>
                                {sentence.words.map(word => { return <BlankWord wordOriginal={word} /> })}
                            </div>
                        </div>);
                })}
            </div>

            <Button variant="contained">Submit</Button>
        </div>
    );
}

export default Training;
