import { useState, useEffect } from "react";

export default function SimpleFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Fetching data from backend...");
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();

  }, []); // Empty dependency array → runs only once after mount

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>React + Express API Example</h1>
      {data ? (
        <>
          <p>{data.message}</p>
          <small>{data.timestamp}</small>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
