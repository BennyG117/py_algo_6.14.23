/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */

    // Valid parenthesis is when we have an opening and closing pair.
    // Establishing our conditions: Finding an open parenthesis...
    // Continue the loop and look for a closing parenthesis.

function parensValid(str) {
    let newStr = []; // define new string to confirm valid parenthesis

    for (let i = 0; i < str.length; i++) { // for loop to iterate through string
        const element = str[i]; // define element
        if (element == "(" || element == "{" || element == "[") { // iterate through string for "(", if exists, then...
            newStr.push(element); // push "(" into newStr
        } else if (element == ")"|| element == "{" || element == "[") {  // else if ")" exists, then...
            if (newStr.length == 0) { // if current newStr = 0 length, then..
                // console.log("False");
                return false; // false since no open prior to ")"
            }
            newStr.pop(); // if we have a matching pair, then pop, then
        }
    }
    // console.log("True");
    return newStr.length == 0; // if newStr is now empty it's because it's valid
}

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));
console.log("==========\n");


/*****************************************************************************/

/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1_1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1_1 = true;

const str2_1 = "D(i{a}l[ t]o)n{e";
const expected2_1 = false;

const str3_1 = "A(1)s[O (n]0{t) 0}k";
const expected3_1 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */

//! Wasn't able to solve problem 2 in time*
function bracesValid(str) {
    // Repeat similar to the parenthesis valid algo above.

}

/*****************************************************************************/