const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(3,6).then((sum)=>{
// console.log(sum);
// add(sum,5).then((sum2)=>{
//     console.log(sum2);
// }).catch((e)=>{
//     console.log(e);
// })
// }).catch(()=>{
//     console.log('Valio cabeza');
// })

add(1, 1).then((sum) => {
    console.log(sum);
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2);
}).catch((error) => {
    console.log(error);
})