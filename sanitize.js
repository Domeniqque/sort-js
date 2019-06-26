
const sanitize = text => Object.values(text
    // .replace(/[^A-Za-zç]/g, "")
    .replace(/\s/g, '')
    .toLowerCase()
    .split("")
    .reduce((acc, i) => {
        acc[i] = i;
        return acc;
    }, {})
);

module.exports = sanitize;