 const str2 = "    jaVAScriPt Is a GReaT LAnguAgE   "
function trim(){
    console.log("after trim", str2.trim());
}


 function lower(){
     console.log("string in lowercase-", str2.toLowerCase());
 }
 function upper(){
    console.log("string in uppercase-", str2.toUpperCase());
}
module.exports.trim = trim
module.exports.lower = lower
module.exports.upper = upper