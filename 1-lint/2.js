/* eslint semi: ["error", "never"] */

function run (func,arg){
    func(arg)
}
function greet(name)
{
    console.log('Hi ' + name + '!')
}
const names = ["Steve", 'Greg', 'Julia']
names.map(name =>run(greet,name))