
function capitalizeFirstLetters(s1) {
    return s1 !== '' ? s1.split(" ").map(e => { return e[0].toUpperCase() + e.slice(1)}).join(" ") : ''
}


// export default capitalizeFirstLetters;
module.exports = capitalizeFirstLetters;

