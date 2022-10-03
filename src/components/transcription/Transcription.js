import { useState } from 'react';
import AudioPlayer from './audioPlayer/AudioPlayer';
import Training from './training/Training';
import classes from './Transcription.module.css'

const Transcription = () => {

    const [currentAudioValue, setCurrentAudioValue] = useState(0);

    const onTimeStampEventHandler = (value) =>{
        setCurrentAudioValue(value);
    }

    return (
        <div className={classes.container}>
            <AudioPlayer currentAudioValue={currentAudioValue}
                         setCurrentAudioValue={setCurrentAudioValue}        
            />
            <Training title="Harry Potter and the Sorcerer's Stone" 
                      chapter="CHAPTER ONE" 
                      chapterTitle="THE BOY WHO LIVED"
                      onTimeStampEvent={onTimeStampEventHandler}
            />
        </div>
    );
}

export default Transcription;
