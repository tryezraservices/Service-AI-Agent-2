export default async function handler(req, res) {
  // Only accept POST requests from Blackbox
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;

    console.log("🔥 Received warm transfer payload from Blackbox:");
    console.log(JSON.stringify(payload, null, 2));

    // ------------------------------------------------
    // 1. Extract JSON state object
    // ------------------------------------------------
    const handoff = payload?.handoff_data;

    if (!handoff) {
      return res.status(400).json({
        error: "Missing handoff_data in payload"
      });
    }

    // ------------------------------------------------
    // 2. Example: Forward this to your CRM / DB / Agent UI
    // (Add your custom logic here)
    // ------------------------------------------------
    // await fetch("https://your-crm.com/store", { method: "POST", body: JSON.stringify(handoff) });

    // ------------------------------------------------
    // 3. Response Blackbox expects
    // ------------------------------------------------
    return res.status(200).json({
      success: true,
      message: "Warm transfer data processed successfully.",
      received: handoff
    });

  } catch (err) {
    console.error("❌ Error in warm transfer webhook:", err);

    return res.status(500).json({
      error: "Server error",
      details: err.message
    });
  }
}
