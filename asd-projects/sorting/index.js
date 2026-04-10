/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array){
    for(var i = 0; i < array.length - 1; i++){ //outer loop, tracks the amount of sorted elements
        for(var j = array.length - 1; j > i; j--){  // inner loop, loops through until j is greater than i and then stops
            if (array[j].value < array[j-1].value){ // checks for if the right value of two is greater and if so it does the following code 
                swap(array, j, j - 1) // swaps the array's positions
                updateCounter(bubbleCounter); 
                await sleep();
            }
        }
    }
}

// TODO 3: Implement quickSort
async function quickSort(array, left, right){ // a sorting method
    
    if (right - left > 0){ // helps to check if it is sorted or not, not being true if it is sorted
        index = await partition(array, left, right)
    if (left < index - 1){ //checks for 2 elements
        await quickSort(array, left, index - 1) // sorts the elements
    }
    if (index < right){ // checks for 2 elements 
        await quickSort(array, index, right) // sorts the elements
    }
   }
    
}

// TODOs 4 & 5: Implement partition
async function partition(array, left, right){ // a helper function that does a lot of function for the quickSort function
var pivot = array[Math.floor((right + left) / 2)].value;
  while(left < right){ // while left is less than right keep running this
    while (array[left].value < pivot){ 
        left++; 
    }
    while (array[right].value > pivot){
        right--;
    }
    if (left < right){ 
        swap(array, left, right)
        updateCounter(quickCounter)
        await sleep();
    }      
    
  }
    return left + 1
}

// TODO 1: Implement swap
function swap (array, i, j){ // swaps two indexes of an array, takes the array and the two indexes as arguments
    var temp = array[i] // makes a temporary value to hold the first position
    array[i] = array[j] // overides the position of i in the array with the position of of j in the array
    array[j] = temp // overides the position of j in the array with the value of temp allowing for it to be given the inital position of i in the array
    drawSwap(array, i, j) // makes the animation happen when swapping
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}