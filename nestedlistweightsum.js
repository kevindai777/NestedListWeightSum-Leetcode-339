//Objective is to, given a 2-D array of arrays and integers, get the weighted
//sum of the array. A weighted sum is the (integer value * depth of the integer)

let array = [[1,1],2,[1,1]]


//O(n) solution that uses a bfs traversal to visit each node once.

function dfs(list, depth) {
    let sum = 0
    for (let element of list) {
        //If an integer is passed, add it to the sum based on the depth
        if (isFinite(element)) {
            sum += element * depth
        //If an array is passed, recurse until an integer is passed
        } else {
            sum += dfs(element, depth + 1)
        }
    }

    return sum
}

return dfs(array, 1)