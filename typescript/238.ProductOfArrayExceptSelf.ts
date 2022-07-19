const productExceptSelf = (nums: number[]): number[] => {
    const leftArray: number[] = [];
    const rightArray: number[] = [];
    let leftMulti: number = 1;
    let rightMulti: number = 1;

    nums.forEach((num, index) => {
        leftArray[index] = leftMulti;
        leftMulti *= num;
    })

    const lenght: number = nums.length - 1;
    nums.reverse().forEach((num, index) => {
        const i = lenght - index;
        rightArray[i] = rightMulti;
        rightMulti *= num;
        rightArray[i] *= leftArray[i];
    })

    return rightArray;
};