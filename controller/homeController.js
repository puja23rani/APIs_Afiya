import home_content from "../model/home_content.js";
export const createhome = async (req, res, next) => {
  try {
    const {
      home,
      aboutUs,
      bestDishes,
      social_media,
      contact_number,
      opening_time,
      closing_time,
      address,
      mail,
    } = req.body;

    const newItem = {
      home: home,
      aboutUs: aboutUs,
      bestDishes: bestDishes,
      social_media: social_media,
      contact_number: contact_number,
      opening_time: opening_time,
      closing_time: closing_time,
      address: address,
      mail: mail,
    };

    const createHome_cnt = await home_content.create(newItem);
    res.status(200).json({
      sucess: true,
      msg: "a new content is added",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      sucess: false,
      msg: "error occured",
    });
  }
};
export const gethomeInfo = async (req, res, next) => {
  const home_pageContent = await home_content.find();
  res.status(200).json({
    sucess: true,
    home_pageContent,
  });
};
export const updateInfo = async (req, res, next) => {
  try {
    const {
      id,
      home,
      aboutUs,
      bestDishes,
      social_media,
      contact_number,
      opening_time,
      closing_time,
      address,
      mail,
    } = req.body;

    const home_one = await home_content.findOne({ _id: id });
    if (!home_one) {
      next(`no job found with id ${id}`);
    }

    const updateInfo = await home_content.findOneAndUpdate(
      { _id: id },
      {
        home: home,
        aboutUs: aboutUs,
        bestDishes: bestDishes,
        social_media: social_media,
        contact_number: contact_number,
        opening_time: opening_time,
        closing_time: closing_time,
        address: address,
        mail: mail,
      }
    );
    res.status(200).json({
      updateInfo,
    });
  } catch (e) {
    next(e);
  }
};
