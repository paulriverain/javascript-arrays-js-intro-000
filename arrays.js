var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array.unshift(element)
}
function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}
function addElementToEndOfArray(array, element){
  return [array... element]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
