    /*max() that takes two number*/
function max(a,b){
 if(a>b){
     return a;
 }
 else{
     return b;
 }
}
 // max() that takes three number
 function maxofThree(a,b,c){
       return max(max(a,b),c);
      
 }
function isVowel(s){
            if(s=='A'|| s=='E'|| s=='I'|| s=='O'||s=='U'){
            return true;
        }
        else{
            return false;
        }
}
function sum(input){
    let total = 0;
    for(let i = 0 ; i < input.length ;i++){
       
        total +=Number( input[i]);
    }
    return total;

}
function multiple(inp){
    let total = 1;
    for(let i = 0 ; i < inp.length; i++){
        total *= Number(inp[i])
    }
    return total;
}
function reverse(str){
    let temp='';
    for(let i =str.length-1 ; i>= 0; i--){
        temp = temp+str.charAt(i);
    }
    return temp;
}
function findLongestWords(word1=[]){
    let res = word1[0];
    for(let i = 1 ; i < word1.length; i++){
        if(res.length < word1[i].length){
            res = word1[i];
        }
    }
    return res;
}
function filterLongWords(words=[],g){
    // let res = "";
    // for(let i = 0 ; i< words.length; i++){
    //     if(words[i].length>g){
    //         res = words[i];
    //     }
    // }
    // return res;

    return words.filter(e=>e.length>g);
}

//******************************************************************** */
function myFunctionTest(expected,found){
    if(expected===found){
        return "TEST SUCCEEDED";
    }else{
        return "TEST FAILED. EXPECTED "+ expected +" FOUND "+ found;
    }
}
function myFunctionTest(expected,found){
    if(expected===found){
        return "TEST SUCCEEDED";
    }else{
        return "TEST FAILED. EXPECTED "+ expected +" FOUND "+ found;
    }
}

console.assert((myFunctionTest(10, max(20, 10)))=="TEST SUCCEEDED",'Failed assert test');
console.log("EXPECTED OUTPUT OF MAX(30,20) IS 30 "+ myFunctionTest(30,max(30,20)));
console.log("EXPECTED OUTPUT OF MAX(10,5,2) IS 10 "+ myFunctionTest(10,maxofThree(10,5,2)));
console.log("EXPECTED OUTPUT OF isVowel(E) IS false "+ myFunctionTest(true,isVowel('E')));
console.log("EXPECTED OUTPUT OF sum([2,3,5]) IS 10 "+ myFunctionTest(10,sum([2,3,5])));
console.log("EXPECTED OUTPUT OF multiple([2,3,5]) IS 30 "+ myFunctionTest(30,multiple([2,3,5])));
console.log("EXPECTED OUTPUT OF reverse('good') IS  doog "+ myFunctionTest('doog',reverse('good')));
console.log("EXPECTED OUTPUT OF findLongestWords([sam,medhane, miki]) IS  medhane "+ myFunctionTest("medhane",findLongestWords(["sam","medhane","miki"])));
console.log("EXPECTED OUTPUT OF filterLongWords([sam,medhane, miki],5) IS  medhane "+ myFunctionTest('medhane',filterLongWords(['sam','medhane','miki'],5)));




