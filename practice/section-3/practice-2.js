'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(itemA=>{
    objectB.value.forEach(itemB=>{
      if(itemA.key==itemB){
        itemA.count-=parseInt(itemA.count/3);
      }
    })
  })
  return collectionA;
}
