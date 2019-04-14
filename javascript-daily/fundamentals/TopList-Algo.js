/* • Algorithm are a way of solving a problem - it's like a method or function.


• Binary search is like searching for an array of boxes by starting in the middle 
    ○ If you are over the set target you leap backwords by setting setting the new middle
    ○ If you are lower, you leap forward by setting the new middle
    ○ By keeping track of three pointer - low, mid, high

• Bubble sort: A sorting collecction by continuosly swapping a higher value with a lesser one - causing the higher value to bubble up

• Selection sort is the process of continuosly selecting the lowest value and swapping it ot one end
    ○ Every time you encounter a higher value, you swap its contents over to the right.
*/

Frequency Hash
We could also try to create a hashtable or map to speed up the search or lookup time to find a match.But this would lead to a O(N) amount of auxiliary space.
The use of pointers in different location help reduce time complexity



// Memoization ---

function coinsum(coins, total) {
    let cache = {};
    function solve(target, index) {
        let key = target + '_' + index;
        if (key in cache) {
            return cache[key];
        }
        if (target === 0) {
            return 1;
        }
        if (target < 0) {
            return 0;
        }
        let result = 0;
        for (let i = index; i < coins.length; i++) {
            result += solve(target - coins[i], i);
        }
        cache[key] = result;
        return result;
    }
    return solve(total, 0);
}



console.log(coinsum([2, 5, 3, 6], 10));



// ===========================================
/*
All trees are graph -



	• Pre order depht traversal -- all the way the left

In javascript === let interview know that you understand the trade off of a queue class 

*/

// =======================================

/*
 Recursion is when a function call upon a smaller version of it self 
    If can be slower than stacks or iteration methods\
    § It's good to use when ther many branching cases and deeply nested structures
    § Or many loops
○ Things to keep in track are the : 
    § Base case the breakpoint of recursion
    § Case in which methods calls itself
    § Scped varialble - accessed through parent scope
    
    

The helper method spes
• Instantiate variables: track state and results
• Return Results
• Helper Method
    § Instantiate = invoke
• Base case
• Recursive case
    § Functi nthFibonacci(n) {
        Let fibonaci = [0, 1];
        
        Function searchFib(I) {
            If(I > n) { return;}
            
            Fibonacci[i] = fibonacci[I -2] + fibonacci[I -1];
            SearchFib(i+1);
        
        
        
        
        }



    searchFib(2);
}

• Bottom up  approach for recursion -
    § Typically start at adefined value
    § Build upon itself to reach input case
    § Define a path to get input case
    § Usually single recursion

• Topdown approach:

    Function nthFibonacci(n) {
    
    Var result;
    
    Function searchFib(index) {
        If( index < 2) {
            Return indez;
        } else {
            searchFib(index - 2) + searchFib(index-1);
        }
      }
    Result = searchFib(n);
    Return result 

Ways- to do better than rescurson
    Iterative solutions - looping structure
    Create own task 
Dynamic programming
*/

//==================

/*
	• Is a combination of many problems
		○ Overlapping sub problems
		○ Optimal sub structure

Time complexity and drastically recuded with dynamic programming

	• Memoization 
		○ Recursion with a cache
		○ Top-down approach
		○ Process of using cache to save small subset problem



	• Lineer time O(n)


	• Tabulation 
		○ Understand where the starting case is 
		○ See if the smallest can be used to solve the next level up
Need to have a path to reach the input case

*/

// System Design
https://github.com/donnemartin/system-design-primer

https://www.pluralsight.com/guides/tictactoe-with-native-javascript-es6?clickid=1RHS9wxCXxyJRKuxTp3WVUkrUkgSE%3ATWmXI00s0&irgwc=1&mpid=29332&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=29332&aid=7010a000001xAKZAA2&clickid=0Yhzrw185xyJUB90GBQcExbTUklzuDyBQSAF1E0&irgwc=1&mpid=29332&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=29332&aid=7010a000001xAKZAA2


// 2n+3 is  O(n) complexity because  we drop coefficient and low over terms


// 	• Space complexity include both the input size and the auxiliry space

// 	• If it it recursion it does not always mean you can  dynamic programming


// 	• O(n^2) is quadratic time 


// O(log(n)) logarithmic time is the only complexity less than linear time


// package whatever; // don't place package name!
/*
Given an array of integers, find the pivot index where the sum of the items
to the left equal to the sum of the items to the right.

Input: [1, 2, 1, 6, 3, 1] => Output: 3
Input: [7, 2, 7] => Output: ­1
Input: [1, 2, 1, 4, 2, 1, 1] => Output: 3
Input: [­1, 3, ­3, 2] => Output: -1
Input: [­1, 2, 3, 4,­ 2, 1] => Output:
************ Constraints ****************
1. Time Complexity : O(n)
2. Space Complexity : O(1)
3. No ipivot index : -1
4. []: -1
5. More than two pivot index : return first index
************** Diagram ******************
left pointer (l) --> Start of array : 0
right pointer (r) ---> End of array : arr.length - 1
leftSum: 0
rightSum: 0
Example 1:
leftSum: 4
rightSum: 4
lr
1, 2, 1, 6, 3, 1
p
Example 2:
leftSum: 7
rightSum: 7
lr
7, 2, 7
p
Example 3:
leftSum: 4
rightSum: 5
l r
1, 3, ­ 3, 2

**************** Pseudocode **************
Initilise 
leftPointer = 0
rightPoint = lastElement
leftSum = rightSum = 0;
while (l < r){
leftSum+= l;
rightSum+=l;
if(leftSum == rightSum){
l++;
r--;
if(l == r)
return l;
else
} 
}


*/
import java.io.*;
class MyCode {
    public static void main(String[] args) {
        System.out.println("Hello Java");
        int[] array = { 1, 2, 1, 6, 3, 1};
        System.out.println(findPivot(array));
    }
    public static int findPivot(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        int leftSum = 0;
        int rightSum = 0;
        while (left <= right) {
            leftSum += left;
            rightSum += right;
            if (leftSum == rightSum) {
                left++;
                right--;
                if (left == right)
                    return left;
                else {
                    left--;
                    right++;
                }
            }
            left++;
            right--;
        }
        return -1;
    }
}

/*
* Quicksort
*
* Prompt: Given an unsorted array of integers, return the array
* sorted using quicksort.
*
* Input: input {Array}
* Output: {Array}
*
* Example: [3,9,1,4,7] --> [1,3,4,7,9]
*
* P Code:
*
* sort: input(arr, start, endpoint)
* pivot point: arr[0]
* loop through the array
* keep track of two pointers i(arr[1]) and j(arr[1])
* if value at i is less than pivot point than swap with j
* at the end swap pivot with arr[j]
*
*
* for each subarray call sort
*
* 0 1 2 3 4 5
*
* 0, 5
*
* 0, 2
* 0, 1
* 1, 2
*
*
* p == pivot. Currently being sorted.
* i == iterator.
* j == slow iterator. a wall for the divide between elements greater or less than pivot element
*
* p
* i
* [1,3,9,4,7]
* j
*
*
* |
* [1,3,9,4,7]
*
* [1] [9,4,7]
*
* p
* i
* [1]
* j
*
* p
* i
* [9,4,7] => [7,4,9] (faking this as more unsorted)
* j
*
*
* |
* [7,4,9]
* [ ] []



*/
//==========================
function printForward(node) {
	// YOUR WORK HERE
	while(node != null) {
	console.log(node.value);
	node = node.next;
	} 
	}
	/**
	* Print the value of each node backwards from the tail to the input node
	* using recursion.
	*
	* Input: node {ListNode}
	* Output: {undefined}
	*
	* Example: (1) --> (5) --> (7) --> (10)
	*
	* 10
	* 7
	* 5
	* 1
	* 
	* Base Case
	* if (node == null) return
	* printBackward(node.next)
	* print node.val
	*/
	// Time Complexity:
	// Auxiliary Space Complexity:
	function printBackward(node) {
	// YOUR WORK HERE
	if (node == null) return;
	printBackward(node.next);
	console.log(node.value);
	}
	/**
	* Given a node in a linked list, reverse the order of the nodes in that
	* list.
	*
	* Input: node {ListNode}
	* Output: {ListNode}
	*
	* Example: (1) --> (5) --> (7) --> (10) -> undefined
	*
	* (10) --> (7) --> (5) --> (1) -> undefined
	*/
	/*
	*
	undefined -- (1) --> (5) <-- (7) -- (10) --> undefined
	*
	
	
	recursiveStack = [null, (1), (5), (7)] <-
	
	*
	recursiveStack = [[null, (1)], [(1), (5)], [(5), (7)], , ]
	[(7), (10)]
	
	previous = null
	current = (1)
	current.next = previous
	(1), (5 next of 5 poit to 1, 1.next will point to null, head
	(5), (7) next of 7 point to 5 , , head
	(7), (10) next of 10 points to 7, , head
	(10), null head (10)
	10 --> 7 --> 5 -->1
	
	node = node.next
	temp = node.next.next
	1. Instantiate (state, results)
	2. Return results
	3. Helper (1. Instantiate 2. Invoke)
	4. Base case
	5. Recursive
	helper should return head
	helper (current.next, current)
	
	
	*/
	// Time Complexity:(1)
	// Auxiliary Space Complexity:
	function reverse(node) {
	let previous = null;
	let current = node;
	let result;
	// YOUR WORK HERE
	function helper(current, previous) {
	if(current == null){
	return previous;
	}
	current.next = previous;
	let temp = helper(current.next, current);
	return temp;
	}
	helper(current, previous);
	return result;
	}
	/**
	* Create a method which swaps the first occurance of the locations of two
	* nodes in the linked list.
	*
	* Input: head {ListNode},
	* Input: a {Integer}
	* Input: b {Integer}
	* Output: {ListNode}
	*
	* Example:
	* let head = generateList([1, 5, 7, 10]);
	* head = swap(head, 5, 10);
	*
	* (1) --> (5) --> (7) --> (10)
	* Head
	*
	* (1) --> (10) --> (7) --> (5)
	* Head
	*/
	---------------------------------
	
	# Time Complexity:
	# Auxiliary Space Complexity:
	def print_forward(node):
	current = node
	while current is not None:
	print(current.value)
	current = current.next 
	
	# 1b. Prints the value of each node backwards from the tail to the input node
	# using recursion.
	#
	# Input: node {ListNode}
	# Output: {None}
	#
	# Example: (1) --> (5) --> (7) --> (10)
	#
	# 10
	# 7
	# 5
	# 1
	#
	# Time Complexity:
	# Auxiliary Space Complexity:
	def print_backward(node):
	if node is None: 
	return 
	print_backward(node.next)
	print(node.value)
	
	# 1c. Given a node in a linked list, reverse the order of the nodes in that
	# list.
	#
	# Input: node {ListNode}
	# Output: {ListNode}
	#
	# Example: (1) --> (5) --> (7) --> (10)
	#
	# (10) --> (7) --> (5) --> (1)
	#
	# Time Complexity:
	# Auxiliary Space Complexity:
	def reverse(node):
	current = node 
	previous = None 
	while current is not None:
	next = current.next 
	current.next = previous 
	previous = current 
	current = next 
	return previous 
	
	
	# 1d. Create a method which swaps the first occurance of the locations of two
	# nodes in the linked list.
	#
	# Input: head {ListNode}
	# Input: a {Integer}
	# Input: b {Integer}
	# Output: {ListNode}
	#
	# Example:
	# head = generate_list([1, 5, 7, 10])
	# head = swap(head, 5, 10)
	#
	# (1) --> (5) --> (7) --> (10)
	# Head A B 
	# prevA prevB
	# (1) --> (10) --> (7) --> (5) --> None 
	# 
	#
	# (1) --> (10) --> (7) --> (5)
	# Head
	#
	# Time Complexity:
	# Auxiliary Space Complexity:
	def swap(head, a, b):
	def locate(head, value):
	prev = None
	current = head 
	while current:
	if current.value == value:
	return [prev, current]
	prev = current 
	current = current.next 
	return [None, None]
	prevA, currA = locate(head, a)
	prevB, currB = locate(head, b)
	if not currA or not currB:
	return head 
	# if prevA is not None, then do this. 
	if prevA: prevA.next = currB 
	if prevB: prevB.next = currA 
	currA.next, currB.next = currB.next, currA.next
	# if prevA is None, then do this. 
	if not prevA: return currB 
	if not prevB: return currA 
	return head 

	#
	# Extra Credit 1:
	#
	# Given a ListNode, returns true if the ListNode is in a circular linked list,
	# and false if the ListNode is in a linked list that terminates.
	#
	def is_circular(node):
	tortoise, hare = node, node 
	if node is None: return False 
	while hare is not None and hare.next is not None:
	hare = hare.next.next 
	if tortoise == hare: return True 
	tortoise = tortoise.next 
return False 


//=================

// • Decrease and counquer - and binary search are like searching for word in a dictionary
// ○ We start in the middle then check wether that word is within range




// ○ Start with the full range of the array (0 or array length - 1)
// ○ Check the value at the middle of that range
// ○ If mid matches target we return the mid index
// ○ If mid is larger than target we can eliminate the right half
// ○ If mid is less than target we can eliminate the left half 
// ○ Adjust the range depending  on which half is active 
// ○ Repeat step 2 -5 until a match is found
// ○ If range is empty return -1

// In conjunction with a while loop

• A list of Linear data struture are:
○ LinkedList
○ Array,
○ Queue
○ Stack
• No linear data strutue are like 
○ Trees and graphs


A node contain a value and a reference


• Doubly-linkedList is linkedList with a previous value --


Stacks are good when you want to add item i


// ========================= Merge Sort =====

• Function mergeSortedArrays(arr1, arr2) {
    Let result = [];
    Let I = 0;
    Let j = 0;
    
    Const total Elements = arr1.length + arr2.length;
    
    While( I + j < totalElements) {
        If ( j >= arr2.length || (I < arr1.length && arr1[i] < arr[i] < arr2[j] )) {
            Result.push(arr1[i]);
            i++;
        } else {
            Result.push(arr2[j]);
            J++;
        
        }
    }
}

// var _ = require('underscore');
var evens = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0);
class comment{
var reply
}
/*
class Person {
constructor(currentFloor, destinationFloor) {
this.currentFloor = currentFloor;
this.destinationFloor = destinationFloor;
}

pressElavatorButton(destinationNumber) {
elevator.goFloor(destinationNumber);
}
}
class Elevatorcontrol {
//elevator starts at floor 0
list reqests = [];
constructor(initialFloor) {
this.initialFloor = initialFloor;
this.listFloor = [1, 2, 3, 4, 5];
this.currentFloor= this.listFloor[0];
}
sendRequest(updown){
}
goFloor(destinationNumber) {
this.currentFloor = this.listFloor[destinationNumber]
}
}

let elevator = new Elevatorcontrol();
let p[] = new Person[10];

elevator.goFloor()


// 
const findSum = (arr, val) => {
let start = 0;
let end = arr.length - 1;
while (start < end) {
let sum = arr[start] + arr[end];
if (sum > val) {
end -= 1;
} else if (sum < val) {
start += 1;
} else {
return true;
};
};
return false;
};


// Insertion Sort ===
function distinct(head) { // ithe head just an array
let currentList = {};
let current, previous;
// creating a loop to traverse
while(head.next !== null) {
current = head.next;
if(!currentList[current.val]) {
currentList[current.val] = true;
} else {
// trying to delete node
previous = current
current.next = null;
}
previous = current;
current = current.next;
}
return head;
}



Bubble sort is stable ---- it leaves equal value in original order




Insertion Sort ---===== 
	• https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg
