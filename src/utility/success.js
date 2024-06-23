export const successResponse = (res, data, message) => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};


export default successResponse;