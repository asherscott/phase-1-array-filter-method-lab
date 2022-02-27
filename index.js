// Code your solution here
function findMatching(nameArray, name) {
    return nameArray.filter(ele => ele.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(nameArray, beginLet) {
    return nameArray.filter(ele => ele.toUpperCase().startsWith(beginLet.toUpperCase()));
}

function matchName(nameArray, name) {
    return nameArray.filter(obj => obj.name === name);
}