//Acts the same as a try catch handler for async functions
const asyncHandler = fn => (req, res, next) =>
    Promise
    .resolve(fn(req, res, next))
    .catch(next);

module.exports = asyncHandler;