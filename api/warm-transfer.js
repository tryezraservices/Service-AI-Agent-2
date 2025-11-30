export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      // Only accept POST
      return res.status(405).json({ error: "Method not allowed" });
    }
    const payload = req.body;
    console.log("Received JSON state:", payload);

    // (Optional) Forward the payload to a CRM or database:
    // await fetch("https://your-crm.com/store", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    // });

    // Send success response with the payload
    return res.status(200).json({
      success: true,
      message: "Warm transfer data processed successfully.",
      received: payload  // use the actual data object
    });
  } catch (err) {
    console.error("❌ Error in warm transfer webhook:", err);
    // Send error response
    return res.status(500).json({
      error: "Server error",
      details: err.message
    });
  }
}

