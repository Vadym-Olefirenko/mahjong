
export const generateArray = (length, max) => {
    const arr = [];
        while(arr.length < length){
            let randomnumber = Math.floor(Math.random() * max) + 1;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }

    return arr;
};

export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }