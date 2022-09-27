import AudioPlayer from './audioPlayer/AudioPlayer';
import Training from './training/Training';
import classes from './Transcription.module.css'

function Transcription() {
    return (
        <div className={classes.container}>
            <AudioPlayer />
            <Training title="Harry Potter and the Sorcerer's Stone" chapter="CHAPTER ONE" chapterTitle="THE BOY WHO LIVED" />
        </div>
    );
}

export default Transcription;
