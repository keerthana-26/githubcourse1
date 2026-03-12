function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString("Hello")) //output will be "olleH"

function reverseString1(str){
    return str.split('').reverse().join()
}

console.log(reverseString1("Hello")) //output will be "o,l,l,e,H"

//reverse() - this method only works for arrays, if we want to use it for strings we need to use split & join