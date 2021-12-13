export const validateOnlyLyrics = (string)=>{

	let patt = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;

	return patt.test(string);

}
export const validateLyricsAndNumbers = (string)=>{

	let patt = /^[a-zA-Z0-9nÑ]+$/;
	return patt.test(string);

}
export const validateLyricsNumbersAndSpaces = (string)=>{

	let patt = /^[a-zA-Z0-9nÑ ]+$/;
	return patt.test(string);

}
export const validatePhone = (string)=>{

	let patt = /^[0-9()+ ]+$/;
	return patt.test(string);

}

export const validatePlaque = (string)=>{


    let patt = /^[a-zA-Z0-9ñÑ-]+$/;

    return patt.test(string);

}

export const validateOnlyNumbers = (string)=>{

	let patt = /^[0-9]+$/;

	return patt.test(string);

}

export const validateEmail = (string)=>{

	let patt = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

	return patt.test(string);

}

export const existsInArray = (value,array)=>{


	for(let i = 0; i < array.length; i++){
		if(array[i] == value){
			return true;
		}
	}
	return false;
}

