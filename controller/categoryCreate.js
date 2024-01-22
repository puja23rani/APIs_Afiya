import category from "../model/category.js";

export const createCat = async (req, res, next) => {
  try {
    const { image, title, description, slug } = req.body;
    if (!image || !title || !description || !slug) {
      next("please provide required info");
    }

    const newCat = {
      image: image,
      title: title,
      description: description,
      slug: slug,
    };
    const cat = await category.create(newCat);

    res.status(200).json({
      sucess: true,
      msg: "category is added",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      sucess: false,
      msg: "error occured",

      err,
    });
  }
};
export const getCategories = async (req, res, next) => {
  const cats = await category.find();
  res.status(200).json({
    sucess: true,
    cats,
    totalLength: cats.length,
  });
};
export const updateCat = async (req, res, next) => {
  try {
    const { id, image, title, description, slug } = req.body;

    if (!id || !image || !description || !title || !slug) {
      next("Please provide all the fields");
    }
    const cat = await category.findOne({ _id: id });
    if (!cat) {
      next(`no job found with id ${id}`);
    }
    const updateCat = await category.findOneAndUpdate(
      { _id: id },
      { image: image, title: title, description: description, slug: slug }
    );
    res.status(200).json({
      updateCat,
    });
  } catch (e) {
    next(e);
  }
};
export const deleteCat = async (req, res, next) => {
  try {
    const { id } = req.body;
    const del_cat = await category.findOne({ _id: id });

    if (!del_cat) {
      console.log(id);
      next("No job found");
    }
    await del_cat.deleteOne({ _id: id });
    res.status(200).json({
      message: "sucessfully deleted",
    });
  } catch (e) {
    next(e);
  }
};

export const getoneCategory = async (req, res, next) => {
  const { id } = req.body;
  const cats = await category.findOne({ _id: id });
  res.status(200).json({
    sucess: true,
    cats,
  });
};
