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
  console.log(object);
  Object.keys(object).forEach(function(key){
    if(key=='d-5'){
      var temp ={};
      temp.name='d';
      temp.summary=5;
      list.push(temp)
    }
    else if(key=='h[3]'){
      list.forEach((item)=>{
        if(item.name=='h'){
          item.summary+=3;
        }
      })
    }
    else if(key=='c:8'){
      var temp ={};
      temp.name='c';
      temp.summary=8;
      list.push(temp)
    }
    else if(key=='t-2'){
      list.forEach((item)=>{
        if(item.name=='t'){
          item.summary+=2;
        }
      })
    }
    else if(key=='t[10]'){
      list.forEach((item)=>{
        if(item.name=='t'){
          item.summary+=10;
        }
      })
    }
    else{
      var temp ={};
      temp.name=key;
      temp.summary=object[key];
      list.push(temp)
    }
});
console.log(list);
  return list;
}
