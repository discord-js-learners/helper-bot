module.exports = (value) => {
    let result = value % 2

    if (result !== 0) {
        result = value % 3
        if (result !== 0) {
            result = value % 5
            if (result !== 0) {
                result = value % 7
                if (result !== 0) {
                    return 'prime';
                }
                return 'divisible by 7';
            }
            return 'divisible by 5';
        }
        return 'divisible by 3';
    }
    return 'divisible by 2';
}