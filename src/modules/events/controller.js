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

const POST = async (req, res) => {
  try {
    const event = await model.POST(req.body, req.files);

    if (event) {
      res.status(201).json({
        status: 201,
        message: "succes",
        data: event,
      });
    } else {
      res.status(402).json({
        status: 402,
        message: "error",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const event = await model.PUT(req.body, req?.headers);

    if (event) {
      res.status(200).json({
        status: 200,
        message: "succes",
        data: event,
      });
    } else {
      res.status(403).json({
        status: 403,
        message: "Forbidden error",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export default { GET, POST, PUT };
