const a = function getDate() {
    today = new Date()
   let dd = today.getDate();
   console.log(dd);
}

a()

const b = function getMonth() {
   today = new Date()
  let dd = today.getMonth();
  console.log(dd);
}

b()

const c = function getBatchInfo(){
   console.log("Radon , W3D1 , the topic for today is node module system")
}
c()

module.exports.a = a
module.exports.b = b
module.exports.c = c

