// createIterator = () => {
//     var i = 0;
//     var next = () => {
//         return { value: i++, done:false}
//     };
//     return {
//          next ,
//     }    
// }

// iter = createIterator();
// // i = 0
// while(next = iter.next()){
//     console.log(next.value)
//     if(next.value>10){ break; }
// }

var iter = (max=Infinity) => ({
    [Symbol.iterator](){
        var i = 0;
        return {
             next(){
                return { value: i++, done: i > max}
            } 
        }  
    }
})

for(let i of iter(5)){
    console.log(i)
    if(i>10){ break; }
}

// ASync

// createAsyncIterator = () => {
//     var i = 0;
//     var next = () => {
//         return new Promise((resolve)=>{
//             setTimeout(()=> resolve({ value: i++, done:false}), 1000)
//         })
//     };
//     return {
//          next:next ,
//     }
// }

// iter = createAsyncIterator();
// i = 0
// iterate = res => {
//     if(!res.done && i++ <5){ console.log(res.value); iter.next().then(iterate) }
// }
// iter.next().then(iterate)

asyncIterator = {
  [Symbol.asyncIterator](){
      var i = 0;
      var next = () => {
          return new Promise((resolve)=>{
              setTimeout(()=> resolve({ value: i++, done:false}), 1000)
          })
      };
      return {
           next:next ,
      }   
  }
}
for await(let i of asyncIterator){
  console.log(i)
  if(i>5){ break; }
}