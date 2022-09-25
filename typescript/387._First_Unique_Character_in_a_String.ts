const firstUniqChar = (s: string): number => {
    const chars = Array.from(new Set(s.split('')))
    const char = chars.find(ch => s.indexOf(ch) === s.lastIndexOf(ch))
    return char ? s.indexOf(char) : -1
};