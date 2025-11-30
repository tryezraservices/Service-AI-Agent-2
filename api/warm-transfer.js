export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const state = req.body;

  console.log("Received JSON state object:", state);

  return res.status(200).json({
    status: "ok",
    received: state
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
