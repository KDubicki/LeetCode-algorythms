const lengthOfLongestSubstring = (s: string): number => {
    let longest: number = 0;
    let substring: string = '';

    let currentSubstringLength: number = 0;
    // @ts-ignore
    [...s].forEach((ch: string) => {
        // @ts-ignore
        if (substring.includes(ch)) {
            let charIndex: number = substring.indexOf(ch) + 1;
            substring = substring.slice(charIndex, substring.length);
            currentSubstringLength = substring.length;
        }

        substring += ch;
        longest = Math.max(longest, ++currentSubstringLength);
    })

    return longest;
};