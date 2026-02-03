import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState('active');
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    async function fetchProjects() {
      try {
        let URL = 'http://localhost:4000/api/projects';
        if (status === 'active') {
          URL+='?status=active';
        }
        if (status === 'paused') {
          URL+='?status=paused';
        }
        // const response = await fetch('http://localhost:4000/api/projects');

        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch Projects!');
        }

        const result = await response.json();
        setData(result);
      } catch (e) {
        setError({ message: e.message || 'Something went wrong!' });
      }
      setIsFetching(false);
    }
    fetchProjects();

  }, [status]);

  const content = isFetching ? <p>Loading...</p> : (data && <ul>
    {data.items.map(res => <li key={res.id}>{res.name} - {res.status}</li>)}
  </ul>);

  return <main className="app-main">
    <h1>Projects <small className="status-label">status: {status}</small></h1>
    <div className="button-group">
      <button onClick={() => setStatus('')}>All</button>
      <button onClick={() => setStatus('active')}>Active</button>
      <button onClick={() => setStatus('paused')}>Paused</button>
    </div>

    {error && error.message}
    {content}

    <hr className="divider" />
    <section>
      <h2>Why `useEffect` for fetching?</h2>
      <ol>
        <li><b>Keep render pure</b>: Network during render can re-set state -- re-render -- re-fetch loop.</li>
        <li><b>Runs after paint</b>: The UI shows a loading state while the request happens.</li>
        <li><b>Dependencies</b>: Only re-run when inputs change (here: <code>status</code>).</li>
        <li><b>Cleanup</b>: Abort in-flight requests on unmount/changes to avoid leaks.</li>
        <li><b>Error handling</b>: Centralized try/catch without blocking render.</li>
      </ol>
      <p><i>Tip:</i> In data-heavy apps consider libraries like React Query/SWR to manage caching and retries, but `useEffect` is the primitive you build on.</p>
    </section>
  </main>
}