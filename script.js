const extendHex = (shortHex) => {
  // write your code herE
	 "#" +(shortHex.slice(shortHex.startsWith("#") ? 1:0).split("").map((currElem)=> currElem+currElem).join(""));
  
con
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
