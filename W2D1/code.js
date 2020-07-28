 function sum(num=[]){
  return num.reduce((x,y)=>x+y);
  
}

function multiples (num = []){
    return num.reduce((w,z)=> w*z);
}

function reverse(str){
  return str.split("").reduce((r,char)=> char + r , '');
  
}
function filterLongWords(word=[],i){
    return word.filter(e=> e.length > i);
}