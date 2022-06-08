const Lower = function(){
    const dave = "Javascript is a Great Language"
    const dave1 = console.log(dave.toLocaleLowerCase())
}
Lower()

const Upper = function(){
    const cat = "Javascript is a Great Language"
    const cat1 = console.log(cat.toUpperCase())
}

Upper()


module.exports.Lower = Lower
module.exports.Upper = Upper