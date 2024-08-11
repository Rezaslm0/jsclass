// this project about String Variabls
let mystring = "bezoodi dar inja ye chozi nasb mishavad";
let charofstring = "";
//function returns the last character of the string
function lastCharOfString(string) {
  let lengthofstring = string.length;

  if (lengthofstring !== "") {
    return lengthofstring;
  } else {
    return "string has zero length";
  }
}
console.log(lastCharOfString(mystring));
