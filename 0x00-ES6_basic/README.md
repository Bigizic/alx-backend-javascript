# 0-constants.js:

Modify

function taskFirst to instantiate variables using const
function taskNext to instantiate variables using let

		export function taskFirst() {
		  var task = 'I prefer const when I can.';
		  return task;
		}
		
		export function getLast() {
		  return ' is okay';
		}
		
		export function taskNext() {
		  var combination = 'But sometimes let';
		  combination += getLast();
		
		  return combination;
		}


# 1-block-scoped.js:

Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.


		export default function taskBlock(trueOrFalse) {
		  var task = false;
		  var task2 = true;
		
		  if (trueOrFalse) {
		    var task = true;
		    var task2 = false;
		  }
		
		  return [task, task2];
		}

# 2-arrow.js:

Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)


		export default function getNeighborhoodsList() {
		  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
		
		  const self = this;
		  this.addNeighborhood = function add(newNeighborhood) {
		    self.sanFranciscoNeighborhoods.push(newNeighborhood);
		    return self.sanFranciscoNeighborhoods;
		  };
		}


# 3-default-parameter.js:

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

		export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
		  if (expansion1989 === undefined) {
		    expansion1989 = 89;
		  }
		
		  if (expansion2019 === undefined) {
		    expansion2019 = 19;
		  }
		  return initialNumber + expansion1989 + expansion2019;
		}


# 4-rest-parameter.js:

Modify the following function to return the number of arguments passed to it using the rest parameter syntax


		export default function returnHowManyArguments() {
		
		}


# 5-spread-operator.js:

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.


		export default function concatArrays(array1, array2, string) {
		}


# AND MORE....
