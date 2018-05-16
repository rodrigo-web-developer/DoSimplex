# DoSimplex
Simple JavaScript Program to solving Linear Programming Problems with SIMPLEX

## Warning
This job was developed for study scenerio and has no commitment to professional matters.

## Example
Be the goal:

**MAX Z = 3\*x_1 + 5\*x_2**

Subject to:

  - 1\*x_1 + 0\*x_2 <= 3
  - 0\*x_1 + 1\*x_2 <= 4
  - 3\*x_1 + 2\*x_2 <= 18

  - and x_1, X_2 >= 0

Total: 2 variables and 3 restrictions.

You got the initial tableau:

|  | b | x_1 | x_2 | f_1 | f_2 | f_3 |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|f_1| 3 | 1 | 0 | 1 | 0 | 0 |
|f_2| 4 | 0 | 1 | 0 | 1 | 0 |
|f_3| 18 | 3 | 2 | 0 | 0 | 1 |
| Z | 0 | -3 | -5 | 0 | 0 | 0 |

### For code:
Using simplex.js file:

var tableau = {

  m: 3, // Number of restrictions
  
  n: 2, // number of variable
  
  tableau: [
  
  //↓ first column (index 0 of all inner array) is always the B column
  
    [0, -3, -5, 0, 0, 0], // first array is always Z line
    
    [3, 1, 0, 1, 0, 0],
    
    [4, 0, 1, 0, 1, 0],
    
    [1, 0, 0, -3, -2, 1]
    
  ],
  
};

simplex(tableau); // execute function and the solve will be calculated into variable

console.log(tableau); // see the result

console.log("Z = "+ tableau.tableau[0][0]); // Z = 29
