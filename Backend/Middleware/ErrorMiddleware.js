const notfound = (req, res, next) =>{
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404);
    next(error);
};

const errorhandler = (req, res, next, err) =>{
    const statusCode= res.statusCode === 200 ? 500 : statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = {notfound, errorhandler}