// complete the given function


function palindrome(str){
	str=str.toLowerCase();
	
	let s='';
	for(let i =0;i<str.length;i++){
		let temp=str[i];
		if(isCharacterALetter(temp)){
			s+=temp;
		}
	}

    console.log(s);

let i=0;
	let j=s.length-1;
	while(i<=j){
		if(s[i]!=s[j]){
			return false;
		}
        i++;
        j--;
	}

	return true;

}
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }
module.exports = palindrome
