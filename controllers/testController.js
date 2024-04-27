const testController = (req, res) => {
res.status(200).send({
  message: "Welcome Users",
  success: true,
});
};

module.exports = {testController}