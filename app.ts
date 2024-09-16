let size: string[] = ['midium','large']
let defaultMessage = "I love this shirt"
let mediumShirt = (`this size of shirt is ${size[0]},${defaultMessage}`)
let largeShirt = (`this size of shirt is ${size[1]},${defaultMessage}`)
let smallShirt = ('size of shirt is : small and I love painting')
let extraLargeshirt = ('size of shirt is: extralarge and I love cooking ')
function make_Tshirt(){
    let simpleFunction = (mediumShirt)
    console.log(simpleFunction)
    return simpleFunction
}
let response = make_Tshirt()
console.log(response)