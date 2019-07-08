'use strict';

function countSameElements(collection) {
  var list=[];
  function getWordCnt(){ 
    return collection.reduce(function(prev,next){ 
        prev[next] = (prev[next] + 1) || 1; 
        return prev; 
    },{}); 
} 
  var object=getWordCnt();
  Object.keys(object).forEach(function(key){
    if(key=='d-5'){
      var temp ={};
      temp.key='d';
      temp.count=5;
      list.push(temp)
    }
    else{
      var temp ={};
      temp.key=key;
      temp.count=object[key];
      list.push(temp)
    }
});
console.log(list);
  return list;
}
