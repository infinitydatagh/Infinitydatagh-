export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.vercel.com");
    res.status(200).json({
      success: true,
      status: response.status
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
