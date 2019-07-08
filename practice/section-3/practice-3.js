'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let list=[];
  let object={};
  for(let i=0;i<collectionA.length;i++){
    object[collectionA[i]] = collectionA[i] in object ? ++object[collectionA[i]] : 1 ; 
  }
  for(let item in object){
    list.push({key:item,count:object[item]})
  }
  list.forEach(itemC=>{
    objectB.value.forEach(itemB=>{
      if(itemC.key==itemB){
        itemC.count-=parseInt(itemC.count/3);
      }
    })
  })
  return list;
}
