function processStrDivMax(str,div,maxDiv){
  if (div > 0){
    let strLength = Math.floor(str.length/div)
    let strStorage = [];
    let chunk;

    for(i = 0; i <str.length; i += strLength){
      const arrChunkSize = strLength + i
      chunk = str.substring(i, arrChunkSize)

      if(chunk.length == strLength){
        if(chunk.length > maxDiv){
         chunk = chunk.substring(0, maxDiv)
      }
      
      let diff = strLength - chunk.length

    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        chunk += '*';
      }
      
    }
      strStorage.push(chunk)

    }
    
  }

  console.log(strStorage);
    let backToString = strStorage.join('')

    return backToString;
  }
}


let strName = 'abcdefghijklmnopqrs';
console.log(strName.length);
console.log(processStrDivMax(strName,3,4))