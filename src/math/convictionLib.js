module.exports = {
    getConviction: (a, D, y0, x, t) => {
        return y0 * a ** t + (x * (1 - a ** t)) / (1 - a);
    }
};
