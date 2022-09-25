const maximum69Number = (num: number): number => {
    const nums = num.toString().split('');
    if (nums.includes('6')) nums[nums.indexOf('6')] = '9';
    return parseInt(nums.join(''))
}