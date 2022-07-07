const missingNumber = (nums: number[]): number => {
    if (Math.min(...nums) !== 0) return 0;

    const sumNums = nums.reduce((a, b) => a + b) - nums.length;
    const sumIndex = (nums.length - 1) / 2 * nums.length;
    const difference = sumIndex - sumNums;

    return (difference ? difference : nums.length)
};