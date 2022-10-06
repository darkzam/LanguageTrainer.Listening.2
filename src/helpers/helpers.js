const convertMiliseconds = miliseconds => {
    let date = new Date(miliseconds * 1000);
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`
}

const preProcessWord = (word) => {
    let cleanedWord = word.trim().toLowerCase().replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '');
    return cleanedWord;
}

export {convertMiliseconds, preProcessWord};