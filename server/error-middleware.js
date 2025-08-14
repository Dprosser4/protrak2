import ClientError from './client-error.js';

function errorMiddleware(err, req, res, next) {

  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  } if (err.code === '23505') {
    console.error(err);
    res.status(400).json({
      error: 'duplicate'
    });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
}

export default errorMiddleware;
