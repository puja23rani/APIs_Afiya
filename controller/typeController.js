import typeFood from "../model/typeFood.js";

export const createType = async (req, res, next) => {
  try {
    const { title, icon } = req.body;
    if (!title || !icon) {
      next("Please enter correct info");
    }
    const newType = { title: title, icon: icon };
    const createType = await typeFood.create(newType);
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
export const getAlltypes = async (req, res, next) => {
  const types = await typeFood.find();
  res.status(200).json({
    sucess: true,
    types,
    total: types.length,
  });
};
export const updateType = async (req, res, next) => {
  try {
    const { id, title, icon } = req.body;

    if (!id || !icon || !title) {
      next("Please provide all the fields");
    }
    const updatetype = await typeFood.findOne({ _id: id });
    if (!updatetype) {
      next(`no job found with id ${id}`);
    }
    const update_typed = await typeFood.findOneAndUpdate(
      { _id: id },
      { icon: icon, title: title }
    );
    res.status(200).json({
      update_typed,
    });
  } catch (e) {
    next(e);
  }
};
export const deleteType = async (req, res, next) => {
  try {
    const { id } = req.body;
    const del_type = await typeFood.findOne({ _id: id });
    if (!del_type) {
      next("No job found");
    }
    await del_type.deleteOne({ _id: id });
    res.status(200).json({
      message: "sucessfully deleted",
    });
  } catch (e) {
    next(e);
  }
};
export const getoneType = async (req, res, next) => {
  const { id } = req.body;
  const types = await typeFood.findOne({ _id: id });
  res.status(200).json({
    sucess: true,
    types,
  });
};
