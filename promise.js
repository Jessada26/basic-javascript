const stepOne = new Promise((resolve, reject) => {
      if (1) {
        resolve(1)
      } else {
        reject("not know na step1")
      }
  
})

const stepTwo =(res)=> {
     console.log(res)
    return new Promise((resolve, reject) => {
        if (res) {
          resolve(res+1)
        } else {
          reject("not know na step2")
        }
    
  })
}

//by catch

// stepOne.then(res=>stepTwo(res)).catch(err=>console.log(err))
//or by not catch
// stepOne.then(
//     (res)=>stepTwo(res),
//     (err)=>stepTwo(err)
// ).then((res)=>console.log(res+' fefe'))

//or by async

const newGen =async()=>{
    try {
        const data = await stepOne;
        const dataTwo = await stepTwo(data)
        console.log(dataTwo)
         return data
    } catch(err) {
         throw Error(err) // will return and log
    }
}

newGen()