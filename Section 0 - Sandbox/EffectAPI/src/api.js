const BASE = 'http://localhost:4000';

export async function fetchProjects(signal, status) {
  const url = new URL('/api/projects', BASE);
  if (status) url.searchParams.set('status', status);
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
