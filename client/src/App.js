import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", location: "" });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    setData(result);
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    const res = await fetch(
      `http://localhost:5000/regenerate-headline?name=${formData.name}&location=${formData.location}`
    );
    const result = await res.json();
    setData((prev) => ({ ...prev, headline: result.headline }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Local Business Dashboard</h1>

        <input
          type="text"
          placeholder="Business Name"
          className="border p-2 w-full mb-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 w-full mb-4 rounded"
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={fetchData}
        >
          Submit
        </button>

        {loading && <p className="text-center mt-4">Loading...</p>}

        {data && (
          <div className="mt-6 p-4 border rounded bg-gray-50">
            <p>⭐ <strong>Rating:</strong> {data.rating}</p>
            <p>🗣️ <strong>Reviews:</strong> {data.reviews}</p>
            <p>📰 <strong>Headline:</strong> {data.headline}</p>
            <button
              className="mt-3 bg-green-600 text-white px-3 py-1 rounded"
              onClick={regenerateHeadline}
            >
              Regenerate SEO Headline
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
