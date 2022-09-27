import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { PlayArrowRounded, PauseRounded, StopRounded, Replay5Rounded, Forward5Rounded } from '@mui/icons-material';
import { useState } from 'react';
import classes from './AudioPlayer.module.css'
import { convertMiliseconds } from '../../../helpers/helpers';

function AudioPlayer() {

    const [audioDuration, setAudioDuration] = useState(100);
    const [currentValue, setCurrentValue] = useState(10);

    function stopHandler() {
        setCurrentValue(0);
    }

    function replayHandler() {
        if (currentValue == 0)
            return;
        setCurrentValue(currentValue - 5);
    }

    function forwardhandler() {
        if (currentValue == 100)
            return;
        setCurrentValue(currentValue + 5);
    }

    return (
        <div className={classes.playerContainer}>
            <div className={classes.stampContainer}>
                <div className={classes.leftStamp}>
                    <b>
                        {convertMiliseconds(currentValue)}
                    </b>
                </div>
                <div className={classes.rightStamp}>
                    <b>
                        {convertMiliseconds(audioDuration)}
                    </b>
                </div>
            </div>

            <Box sx={{ width: '95%' }}>
                <LinearProgress variant="buffer" value={currentValue} valueBuffer={50} />
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
