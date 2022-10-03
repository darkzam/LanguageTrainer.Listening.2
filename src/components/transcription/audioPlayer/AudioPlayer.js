import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { PlayArrowRounded, PauseRounded, StopRounded, Replay5Rounded, Forward5Rounded } from '@mui/icons-material';
import { useState } from 'react';
import classes from './AudioPlayer.module.css'
import { convertMiliseconds } from '../../../helpers/helpers';

const AudioPlayer = (props) => {
    
    const [audioDuration, setAudioDuration] = useState(90);
    
    const stopHandler = () => {
        props.setCurrentAudioValue(0);
    }

    const replayHandler = () => {
        if (props.currentAudioValue == 0)
            return;
        props.setCurrentAudioValue(props.currentAudioValue - 5);
    }

    const forwardhandler = () => {
        if (props.currentAudioValue == 100)
            return;
        props.setCurrentAudioValue(props.currentAudioValue + 5);
    }

    return (
        <div className={classes.playerContainer}>
            <div className={classes.stampContainer}>
                <div className={classes.leftStamp}>
                    <b>
                        {convertMiliseconds(props.currentAudioValue)}
                    </b>
                </div>
                <div className={classes.rightStamp}>
                    <b>
                        {convertMiliseconds(audioDuration)}
                    </b>
                </div>
            </div>

            <Box sx={{ width: '95%' }}>
                <LinearProgress variant="buffer" value={props.currentAudioValue} valueBuffer={50} />
            </Box>

            <div className={classes.controlBar}>
                <Button variant='text'>
                    <PlayArrowRounded />
                </Button>
                <Button variant='text'>
                    <PauseRounded />
                </Button>
                <Button variant='text' onClick={stopHandler}>
                    <StopRounded />
                </Button>
                <Button variant='text' onClick={replayHandler}>
                    <Replay5Rounded />
                </Button>
                <Button variant='text' onClick={forwardhandler}>
                    <Forward5Rounded />
                </Button>
            </div>
        </div>
    );
}

export default AudioPlayer;
