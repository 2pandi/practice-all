const _ = {
    once(func) {
        let result;
        let alreadyCalled = false;

        return function (...args) {
            if(!alreadyCalled) {
                alreadyCalled = true;
                result = func(...args);
            }
            return result;
        };
    },
};

module.exports = _;