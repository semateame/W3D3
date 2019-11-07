function removeDups(array) {
    const mySet = new Set(array);
    let uniquesArray = [...mySet];
    return uniquesArray;
}