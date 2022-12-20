function generateHashtag (str) {
  
    let result = "#"
    if(str.length === 0){
      return false
    }else {
      let arrayOfWords = str.split(" ")
      
      for(let i = 0; i < arrayOfWords.length; i++){
        for (let g = 0; g < arrayOfWords[i].length; g++){
          if(g === 0){
            result += arrayOfWords[i][g].toUpperCase()
          } else {
            result += arrayOfWords[i][g]
          }
        }
      }
      
      if(result.length >= 140){
        return false
      }
      
      return result
    }
  }


  console.log(generateHashtag(""))
  generateHashtag("")