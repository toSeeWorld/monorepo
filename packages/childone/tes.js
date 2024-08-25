const newreg = /[A-Z]/g
console.log('helloWorldMy'.replace(newreg,(math,p1)=>{
    return  '-' + math.toLowerCase()
}))