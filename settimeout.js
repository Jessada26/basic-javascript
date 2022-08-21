let count = 0;

const eventBySetTimeOut = async()=> {
    setTimeout(eventBySetTimeOut, 2000)
    if (count)
    console.log(count)
    count++;
}

eventBySetTimeOut()