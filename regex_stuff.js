function Validator (body){
    let nonDgit = new RegExp(/\D/g)
    let nonWordOrDigit = new RegExp(/[^a-zA-Z\d\s:]/gu)
    let moreThanOneChar = new RegExp(/.{2}/gu)
    let nonPathyChars = new RegExp(/[^\w\/\\]/gui)
    if(regexValidation("name",nonWordOrDigit,body)&&
       regexValidation("price",nonDgit,body)&&
       regexValidation("currency",moreThanOneChar,body)&&
       regexValidation("option",nonWordOrDigit,body)&&
       regexValidation("imagePath",nonPathyChars,body)){
        return true
    }else {
        return false
    }
  }
  
  
   Validator.prototype.regexValidation = function (key, regex,body){
    if (body[key]!=undefined && body[key]!="" && body[key]!=null){
      
      if(body[key].match(regex)){
        return false
      }else {
        return true
      }
  
    }
    return false
  
  } 

  module.exports = Validator