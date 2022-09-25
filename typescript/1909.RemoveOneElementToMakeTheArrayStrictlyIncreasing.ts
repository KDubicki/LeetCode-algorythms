const canBeIncreasing = (nums: number[]): boolean => {
    let result = false;
    let last = 0;

    nums.forEach((num) => {
        if (last >= num) {
            if (result) return;
            result = true;
        }
        else {
            last = num;
        }
    })

    return result;
};