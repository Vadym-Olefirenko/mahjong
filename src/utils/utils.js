export const generateArrayOfPrimeNumbers = (n) => {
    const array = [];
    let count = 0;

        for (var j=2; j <= n; j++) {
            for (let i = 1; i <= j; i++) {
                if (j % i === 0) {
                    count++;   
                }
            }

            if (j === 1) {
                array.push(j);
            }

            if (count === 2) {
                array.push(j);
            }

            count = 0;
        }
        
    return array;
};

export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const generatedArray = generateArrayOfPrimeNumbers(55);

export const arrayOfNumbers = [...generatedArray, ...generatedArray];