const doWorkCallBack = (callback) => {
    setTimeout(() => {
       // callback('Es un error', undefined)
       callback(undefined,[1,2,3,4,5])
    }, 2000)
}

doWorkCallBack((error, result) => {
    if (error) {
        return console.log(error);
    }

    console.log(result);
})