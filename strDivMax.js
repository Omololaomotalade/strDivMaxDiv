function processStrDivMax(str,div,maxDiv){
  if (div > 0){
    let strLength = Math.floor(str.length/div)
    let strStorage = [];

    for(i = 0; i <str.length; i += strLength){
      const arrChunkSize = strLength + i
      let chunk = str.substring(i, arrChunkSize)

      if(chunk.length == strLength){
        if(chunk.length > maxDiv){
         chunk = chunk.substring(0, maxDiv)
      }
      strStorage.push(chunk)

    }}
    let backToString = strStorage.join('')

    return backToString;
  }
}


let strName = 'abcdefghijklmn';
console.log(processStrDivMax(strName,3,8))