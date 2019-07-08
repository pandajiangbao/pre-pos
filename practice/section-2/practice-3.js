'use strict';

function countSameElements(collection) {
  var list=[];
  function getWordCnt(){ 
    return collection.reduce(function(acc,cur){ 
        acc[cur] = (acc[cur] + 1) || 1; 
        return acc; 
    },{}); 
} 
  var object=getWordCnt();
  console.log('object :', object);
  Object.keys(object).forEach(key=>{
    if(key.length>1){
      var flag=0;      
      list.forEach((item)=>{
        if(item.name==key[0]){
          flag=1;
          item.summary+=parseInt(key.replace(/[^0-9]/ig,""));
        }
      })
      if(flag==0){
        list.push({name:key[0],summary:parseInt(key[2])})
      }
    }
    else{
      list.push({name:key,summary:object[key]})
    }
});
  return list;
}
