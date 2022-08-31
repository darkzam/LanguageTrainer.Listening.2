import AudioPlayer from './audioPlayer/AudioPlayer';
import Training from './training/Training';

function Transcription() {
    return (
        <div>
            <AudioPlayer />
            <Training title="Harry Potter and the Sorcerer's Stone" content='Content2' />
        </div>
    );
}

export default Transcription;
