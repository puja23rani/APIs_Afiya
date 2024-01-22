import token from "../model/token.js";
export const createToken = async (req, res, next) => {
  try {
    const { token_name } = req.body;

    if (!token_name) {
      next("Please enter correct info");
    }
    const newToken = {
      token_name: token_name,
    };

    const createToken = await token.create(newToken);
    res.status(200).json({
      sucess: true,
      msg: "a new type is added",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      sucess: false,
      msg: "error occured",
    });
  }
};
export const getToken = async (req, res, next) => {
  const tokens = await token.find();
  res.status(200).json({
    sucess: true,
    tokens,
  });
};
