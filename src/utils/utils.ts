export const generateArrayOfPrimeNumbers = (n: number): number[] => {
    const array: number[] = [];
    let count: number = 0;

        for (let j = 2; j <= n; j++) {
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

export const shuffle = (array: number[]): number[] => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const generatedArray: number[] = generateArrayOfPrimeNumbers(55);

export const arrayOfNumbers: number[] = [...generatedArray, ...generatedArray];