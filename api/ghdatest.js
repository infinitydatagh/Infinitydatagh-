export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://star1.ghanadatahub.shop/api/v1/networks"
    );

    const text = await response.text();

    res.status(200).json({
      success: true,
      status: response.status,
      response: text
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
