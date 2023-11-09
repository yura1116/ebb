// var tyUrl = 'http://192.168.0.128:8080/MoveOffice/';
// var fileUrl = 'http://192.168.0.128:8080/MoveOffice/';
// var zpUrl = 'http://192.168.0.128:8080/MoveOffice/';
var tyUrl = 'http://117.60.146.107/MoveOffice/';
var fileUrl = 'http://117.60.146.107/MoveOffice/';
var zpUrl = 'http://117.60.146.107/MoveOffice/';


function convert_json(obj) {
	var result = JSON.stringify(obj);
	result = result.replace("[", "");
	result = result.replace("]", "");
	console.log("result"+result);
	if(strIsNullOrEmpty(result)){
		return "";
	}else{
		return JSON.parse(result);
	}
}


function strIsNullOrEmpty(strVal) {
	if (strVal == '' || strVal == null || strVal == undefined) {
		return true;
	} else { 
		return false;
	}
}


function listIsNullOrEmpty(obj){
	if(JSON.stringify(obj).length>2){
		return true;
	}else{
		return false;
	}
}
