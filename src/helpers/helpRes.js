const success = (res, status, data) => {
  if (data.length === 0)
    return res
      .status(404)
      .json({ status: 404, error: { message: 'Data not found' } });
  return res.status(status).json({
    status,
    data,
  });
};

const failed = (res, status, error) => {
  res.status(status).json({
    status,
    error,
  });
};

module.exports = { success, failed };
