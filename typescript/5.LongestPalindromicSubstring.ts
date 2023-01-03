const longestPalindrome = (s: string): string => {
    const expandAroundCenter = (s: string, left: number, right: number): string => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    let longest = "";
    for (let i = 0; i < s.length; i++) {
        let temp = expandAroundCenter(s, i, i);
        if (temp.length > longest.length) {
            longest = temp;
        }
        temp = expandAroundCenter(s, i, i + 1);
        if (temp.length > longest.length) {
            longest = temp;
        }
    }
    return longest;
}