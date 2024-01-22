import review from "../model/review.js";
export const createReview = async (req, res, next) => {
  try {
    const { name, paragraph, image, rating } = req.body;

    if (!name || !paragraph || !image || !rating) {
      next("Please enter correct info");
    }
    const newReview = {
      name: name,
      paragraph: paragraph,
      image: image,
      rating: rating,
    };

    const createPost = await review.create(newReview);
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
export const getReview = async (req, res, next) => {
  const reviews = await review.find();
  res.status(200).json({
    sucess: true,
    reviews,
    totalLength: reviews.length,
  });
};
export const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.body;
    const del_review = await review.findOne({ _id: id });

    if (!del_review) {
      console.log(id);
      next("No job found");
    }
    await del_review.deleteOne({ _id: id });
    res.status(200).json({
      message: "sucessfully deleted",
    });
  } catch (e) {
    next(e);
  }
};
export const updateReview = async (req, res, next) => {
  try {
    const { id, image, name, paragraph, rating } = req.body;

    if (!id || !image || !paragraph || !name || !rating) {
      next("Please provide all the fields");
    }
    const rev = await review.findOne({ _id: id });
    if (!rev) {
      next(`no job found with id ${id}`);
    }
    const updateRev = await review.findOneAndUpdate(
      { _id: id },
      { image: image, name: name, paragraph: paragraph, rating: rating }
    );
    res.status(200).json({
      updateRev,
    });
  } catch (e) {
    next(e);
  }
};
export const getoneReview = async (req, res, next) => {
  const { id } = req.body;
  const rev = await review.findOne({ _id: id });
  res.status(200).json({
    sucess: true,
    rev,
  });
};
