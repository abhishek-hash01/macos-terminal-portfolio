export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { prompt } = await request.json();
  if (!prompt) {
    return new Response(JSON.stringify({ error: "Prompt is required" }), { status: 400 });
  }
  try {
    const apiKey = "AIzaSyCUUFL9NZG6ZMlE4bJDW3yuZshmHPSgcE0";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }]
    };
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const result = await response.json();
    const aiResponse = result.candidates[0].content.parts[0].text;
    return new Response(JSON.stringify({ response: aiResponse }), { status: 200 });
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to AI" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
