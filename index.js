function shout(string)
{
  return string.toUpperCase()
  
}

function whisper(string)
{
  return string.toLowerCase()
}


function logShout(){
  console.log("HELLO")
}

function logWhisper(){
  console.log( "hello" )
}

function sayHiToGrandma(string) {
  if (whisper(string) === string){
    return "I can't hear you!"
  }  else{
    return "YES INDEED"
  }
}
