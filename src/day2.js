function day2(data){
	if(data === 'object'){
		return Object.assign({}, data);
	}
	if(data === "error"){
		throw new Error("Cannot pass error");
	}
	return data;
}

export default day2;
