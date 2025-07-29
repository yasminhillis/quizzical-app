export function insertAtRandomIndex(arr, value){
    const choices = [...arr]
    const randomIndex = Math.floor(Math.random() * (choices.length + 1))
    choices.splice(randomIndex, 0, value)
    return choices
}