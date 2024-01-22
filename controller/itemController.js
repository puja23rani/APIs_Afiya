import item from "../model/item.js";
export const createItem = async (req, res, next) => {
  try {
    const {
      name,
      slug,
      images,
      thumbnail,
      categories,
      types,
      isCheck,
      mrp,
      salesprice,
      varient,
    } = req.body;

    // if (
    //   !name ||
    //   !slug ||
    //   !images ||
    //   !thumbnail ||
    //   !categories ||
    //   !types ||
    //   !isCheck
    // ) {
    //   if (isCheck == true) {
    //     if (!mrp || !salesprice) {
    //       next("Please enter correct info");
    //     }
    //   } else if (!varient) {
    //     next("Please enter correct info");
    //   }
    // }
    var newItem;
    if (isCheck == false) {
      newItem = {
        name: name,
        slug: slug,
        images: images,
        thumbnail: thumbnail,
        categories: categories,
        types: types,
        isCheck: isCheck,
        mrp: mrp,
        salesprice: salesprice,
      };
    } else {
      newItem = {
        name: name,
        slug: slug,
        images: images,
        thumbnail: thumbnail,
        categories: categories,
        types: types,
        isCheck: isCheck,
        varient: varient,
      };
    }

    const createType = await item.create(newItem);
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
export const getItems = async (req, res, next) => {
  const items = await item.find();
  res.status(200).json({
    sucess: true,
    items,
    totalLength: items.length,
  });
};
export const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.body;
    const del_item = await item.findOne({ _id: id });

    if (!del_item) {
      console.log(id);
      next("No job found");
    }
    await del_item.deleteOne({ _id: id });
    res.status(200).json({
      message: "sucessfully deleted",
    });
  } catch (e) {
    next(e);
  }
};
export const getoneItem = async (req, res, next) => {
  const { id } = req.body;
  const items = await item.findOne({ _id: id });
  res.status(200).json({
    sucess: true,
    items,
  });
};
export const updateItems = async (req, res, next) => {
  try {
    const {
      id,
      name,
      slug,
      images,
      thumbnail,
      categories,
      types,
      isCheck,
      mrp,
      salesprice,
      varient,
    } = req.body;

    if (
      !id ||
      !name ||
      !slug ||
      !images ||
      !thumbnail ||
      !categories ||
      !types ||
      !isCheck
    ) {
      if (isCheck == true) {
        if (!mrp || !salesprice) {
          next("Please enter correct info");
        }
      } else if (!varient) {
        next("Please enter correct info");
      }
    }
    const items = await item.findOne({ _id: id });
    if (!items) {
      next(`no job found with id ${id}`);
    }
    if (isCheck == false) {
      const updateitem = await item.findOneAndUpdate(
        { _id: id },
        {
          name: name,
          slug: slug,
          images: images,
          thumbnail: thumbnail,
          categories: categories,
          types: types,
          isCheck: isCheck,
          mrp: mrp,
          salesprice: salesprice,
        }
      );
      res.status(200).json({
        updateitem,
      });
    } else {
      const updateitem = await item.findOneAndUpdate(
        { _id: id },
        {
          name: name,
          slug: slug,
          images: images,
          thumbnail: thumbnail,
          categories: categories,
          types: types,
          isCheck: isCheck,

          varient: varient,
        }
      );
      res.status(200).json({
        updateitem,
      });
    }
  } catch (e) {
    next(e);
  }
};
