const getUser = function (req, res) {
  try {
    res.json({
      name: "John Doe",
      email: "W2hYV@example.com",
    });
  } catch (err) {
    res.json({
        message: "Error in getUser controller",
        error: err.message
    })
  }
};

function createUser(req, res) {
  res.send("User route hit hua maza aagya - from post mwthod");
}

module.exports = {
  getUser,
  createUser,
};
