//reduce
//iterates,callback function
//reduce to single value - number,array,object
//1 parameter ('acc') -total of all calculations
//2 parameter ('curr') -current value/iteration


/*function multiply()
{
const args=[...arguments]
const result=args.reduce((total,item) =>{
    return item? item*total :item+total
},1)
return result
}
*/

function multiply(...args)
{
    return args.reduce((total,item) =>{
        return item? item*total :item+total
    },1)

}






console.log(multiply(9, 0))

console.log(multiply(4, 5))
// 4 * 5 = 20
console.log(multiply(1, 2, 3, 5))
// 1 * 2 * 3 * 5 = 30
console.log(multiply(2, 0, 4, 2))
// 2 + 0 * 4 * 2
