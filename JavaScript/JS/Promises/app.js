// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled




const value=2

const promise= new promise((resolve,reject)=>{
    const random =Math.floor(Math.random()*3);
    console.log(random)
    if(random === value){
        resolve('You guessed correctly')
    }
    else{
        reject('Wrong number')
    }
})

console.log(promise)

promise.then((data) => console.log(data)).catch((err) => console.log(err))

