module.exports = (req, res) => {
  const { name = "World" } = req.query;
  res.send({
    result: "hello world",
  });
};
