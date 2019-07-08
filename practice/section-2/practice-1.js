'use strict';

function countSameElements(collection) {
  var list=[];
  // var object=new Object();
  // object.key='';
  // for(var i=0;i<collection.length;i++){
  //   for(var j=0;j<collection.length;j++){
  //     if(collection)
  //   }
  // }
  // collection.forEach((element,index) => {
  //   if(element!=object.key){
  //     object.key=element;
  //     object.count=1;
  //   }
  //   else if(element=object.key){
  //     object.count++;
  //   }
  //   list.push(object);
  // });

  function getWordCnt(){ 
    return collection.reduce(function(prev,next){ 
        prev[next] = (prev[next] + 1) || 1; 
        return prev; 
    },{}); 
} 
  var object=getWordCnt();
  Object.keys(object).forEach(function(key){
    var temp ={};
    temp.key=key;
    temp.count=object[key];
    list.push(temp)
});
console.log(list);
  return list;
}
