//Objective is to return the result of an arithmetic sequence involving
//'(', ')', '+', and '-' 

let s = "(1+(4+5+2)-3)+(6+8)"


//O(n) solution using a stack

let result = 0
let sign = 1
let opStack = []
let stack = []

for (let i = 0; i < s.length; i++) {
    let curr = s[i]

    //Skip spaces
    if (curr == ' ') {
        continue

    //Keep track of the sign operation
    } else if (curr == '+') {
        sign = 1
    } else if (curr == '-') {
        sign = -1

    //Get the entire number, then add it to the temp result using the sign
    } else if (curr >= '0' && curr <= '9') {
        let num = curr
        while (s[i + 1] >= '0' && s[i + 1] <= '9' && (i + 1) < s.length) {
            num += s[i + 1]
            i++
        }
        result += parseInt(num) * sign

    //Reset the temporary result and sign whenever we reach a '('
    } else if (curr == '(') {
        stack.push(result)
        result = 0
        opStack.push(sign)
        sign = 1

    //A ')' means we've reached the end of our current expression,
    //so evaluate the current result and add it with the previous 
    //expression
    } else if (curr = ')') {
        result = opStack.pop() * result + stack.pop()
        sign = 1
    }
}

return result
