import model from "./model.js";

const GET = async (req, res) => {
  try {
    const events = await model.GET(req?.headers);

    if (events) {
      res.status(200).json({
        status: 200,
        message: "succes",
        data: events,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "data not found",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export default { GET };
