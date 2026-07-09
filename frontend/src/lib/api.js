// Base URL of the VProTech Digital backend API.
// Set VITE_API_URL in a .env file (e.g. VITE_API_URL=http://localhost:5000/api).
// Falls back to localhost:5000 for local development if not set.
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Generic JSON request helper.
 * Throws an Error with a readable message on non-2xx responses.
 */
async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // Non-JSON response (e.g. 204 No Content) — ignore.
  }

  if (!res.ok) {
    const message =
      data?.errors?.[0]?.msg || data?.message || `Request failed (${res.status})`;
    throw new Error(message);
  }

  return data;
}

/**
 * Multipart/form-data request helper (for file uploads like resumes).
 * Do NOT set a Content-Type header manually — the browser sets the correct
 * multipart boundary automatically when passing a FormData body.
 */
async function requestFormData(path, formData, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    body: formData,
    ...options,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // ignore
  }

  if (!res.ok) {
    const message =
      data?.errors?.[0]?.msg || data?.message || `Request failed (${res.status})`;
    throw new Error(message);
  }

  return data;
}

// ---- Contact ----
export function submitContactForm(payload) {
  // payload: { name, email, phone, subject, message }
  return request("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

// ---- Careers ----
export function getCareers() {
  return request("/careers");
}

export function getCareerById(id) {
  return request(`/careers/${id}`);
}

export function applyToCareer(careerId, formData) {
  // formData must include: name, email, phone, coverLetter (optional), resume (file)
  return requestFormData(`/careers/${careerId}/apply`, formData);
}

// ---- Blogs ----
export function getBlogs(params = {}) {
  const query = new URLSearchParams(params).toString();
  return request(`/blogs${query ? `?${query}` : ""}`);
}

export function getBlogBySlug(slug) {
  return request(`/blogs/${slug}`);
}

export default API_BASE_URL;
