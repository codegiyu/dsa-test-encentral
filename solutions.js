// Question 1 
// Write a function to count the number of nodes with both left and right child nodes present in a binary tree.

function sumTreeNodesWithBothChildren(tree) {
    const sumNodes = (node) => {
        if (!node) return 0
        if (!node.left || !node.right) return 0
        return 1 + sumNodes(node.left) + sumNodes(node.right)
    }
    return !tree.root ? 0 : sumNodes(tree.root)
}


// Question 2
// Find the duplicate element in a range array.

function findDuplicate(arr) {
    let freqObj = {}

    for (let num of arr) {
        freqObj[num] = (freqObj[num] || 0) + 1

        if (freqObj[num] > 1) return num
    }
    return null
}
console.log(findDuplicate([1,2,3,4,4]))

// Question 3
// Find the difference between the sum of all nodes present at the (1st and 2nd levels) and the (3rd and 4th levels) in a binary tree

function halfTreeDifference(tree) {
    let root = tree.root, bottomHalfSum = 0
    let topHalfSum = root.value + (root.left.value || 0) + (root.right.value || 0)

    const addNodeValues = (node) => {
        if (!node) return 0
        return node.value + addNodeValues(node.left) + addNodeValues(node.right)
    }

    bottomHalfSum = addNodeValues(root.left.left) + addNodeValues(root.left.right) + addNodeValues(root.right.left) + addNodeValues(root.right.right)

    return topHalfSum - bottomHalfSum
}


// Question 4
// Generate odd binary numbers between 1 to `n` using a queue

function generateOddBinaries(n) {
    let queue = [], i = 1

    while (i <= n) {
        queue.push(Number(i.toString(2)))

        i += 2
    }
    return queue
}


// Question 5
// Sort the following numbers from lowest to the highest using Quick Sort Algorithm:
// 9, -3, 5, 2, 6, 8, -6, 1, 3

function quickSortArr(arr) {

}
quickSortArr([9, -3, 5, 2, 6, 8, -6, 1, 3])