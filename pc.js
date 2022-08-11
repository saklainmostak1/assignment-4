function isJavaScriptFile(file){
    if(typeof file == "string"){
        let jscript = file.endsWith(".js");
        if(jscript == true){
            return true;
        }else{
            return false;
        }
    }else{
        return "Input a string Please!!!"
    }
}
// let fileName = isJavaScriptFile('assignment.jd')
// let fileName = isJavaScriptFile(100)
// console.log(fileName)

function isJavaScriptFile(file){
    if  (typeof file !== 'string'){
        return "Enter a string please!!!!"
    }
    else if ( file.endsWith('.js') ){
        return true;
    }
    else {
        return false;
    }
}
let fileName = isJavaScriptFile(100);
console.log(fileName);
