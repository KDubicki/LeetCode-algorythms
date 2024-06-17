class Solution {
    public int maxSubArray(int[] nums) {
        int max = -1* Math.abs(2 * nums[0]);
        int curr = max;

        for (int num : nums) {
            curr += num;
            if (num > curr) curr = num;
            max = Math.max(max, curr);
        }

        return max;
    }
}