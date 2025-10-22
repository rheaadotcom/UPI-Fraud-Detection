// src/services/api.js
export async function fraudDetectionAPI(payload) {
  try {
    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // try to parse JSON error body if available
      const errorText = await res.text();
      throw new Error(`Server responded ${res.status}: ${errorText}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    // rethrow so caller can handle it
    throw new Error(`fraudDetectionAPI error: ${err.message}`);
  }
}
