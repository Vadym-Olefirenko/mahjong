// export const generateArray = (length, max) => (
//     [...new Array(length)]
//       .map(() => Math.round(Math.random() * max))
// );

export const generateArray = (length, max) => {
    const arr = []
        while(arr.length < length){
            var randomnumber = Math.floor(Math.random()*max) + 1;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }

    return arr;
};