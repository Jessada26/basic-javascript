const parallelOne = Promise.resolve(23);
const parallelTwo = 24;
const parallelThree = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 25);
});

// const synchronousFunction = ()=> {
//     const data = [parallelOne, parallelTwo, parallelThree]
//     data.map(item=>console.log(item))
// }

// synchronousFunction()

const asynchronousCaseAllFunction = async () => {
  const data = [parallelOne, parallelTwo, parallelThree];
  try {
    const dataMap = await Promise.all(data);
    console.log(dataMap);
  } catch (err) {
    throw Error(err);
  }
};

// asynchronousCaseAllFunction()

const asynchronousCaseAllSettledFunction = async () => {
  const data = [parallelOne, parallelTwo, parallelThree];
  try {
    const dataMap = await Promise.allSettled(data);
    console.log(dataMap);
  } catch (err) {
    throw Error(err);
  }
};

asynchronousCaseAllSettledFunction()