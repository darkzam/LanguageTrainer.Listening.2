const convertMiliseconds = miliseconds => {
    let date = new Date(miliseconds * 1000);
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`
}

export {convertMiliseconds};