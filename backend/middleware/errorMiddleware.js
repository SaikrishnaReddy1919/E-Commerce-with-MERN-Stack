//IF requested for wrong url
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//if there is any error in requesting the actual url
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.send.NODE_ENV === "production" ? null : err.stack,
  });
};

export {notFound, errorHandler}