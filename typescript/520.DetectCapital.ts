const detectCapitalUse = (word: string): boolean => {
    const regex = new RegExp(/^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/);
    return regex.test(word);
};