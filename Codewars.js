function evenChars(string) {
  let lengthCheck = string.legnth;
  let splittedString = string.split("");
  //let have even character first
  let evenChar = splittedString.filter((char, index) => index % 2 == 0);
  //let push inside first index 1
  let fullIndex = evenChar.push(splittedString[1]);
  //final check

  if (fullIndex.length > 100) {
    return "Invalid String";
  }
}
