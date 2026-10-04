module.exports = async (req, res) => {
  try {
    const response = await fetch(
      "https://star1.ghanadatahub.shop/api/v1/networks",
      {
        headers: {
          "x-api-key": process.env.GHANADATAHUB_API_KEY,
          "Accept": "application/json"
        }
      }
    );

    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
