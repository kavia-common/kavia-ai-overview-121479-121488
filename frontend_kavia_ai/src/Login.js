import React, { useState } from "react";

/**
 * Login Page Component - Modern, Minimalistic, Responsive.
 * Styled using TailwindCSS utility classes to match the project's light, modern look.
 * Uses the following color palette, based on project theme:
 *   Primary:   #2a5298
 *   Secondary: #1e3c72
 *   Accent:    #f4b400
 * Basic client-side validation for email/password.
 */
// PUBLIC_INTERFACE
function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Validate fields before submission
  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Email address is invalid.";
    }
    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const _errors = validate();
    if (Object.keys(_errors).length !== 0) {
      setErrors(_errors);
      return;
    }
    setSubmitting(true);

    // Simulate login logic - replace this with your real handler
    setTimeout(() => {
      setSubmitting(false);
      if (onLogin) onLogin(form); // For parent integration
      // window.location.href = "/"; // Or navigate as needed
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f8f9fa] px-4">
      <div className="w-full max-w-md rounded-xl shadow-md bg-white border border-gray-100 p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2a5298] mb-2 text-center">
          Kavia Ai Login
        </h2>
        <p className="text-gray-500 text-sm mb-8 text-center">
          Sign in to your account
        </p>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={`w-full rounded-lg border ${errors.email
                ? "border-red-400"
                : "border-gray-200 focus:border-[#2a5298]"
                } bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2a5298] transition`}
              value={form.email}
              onChange={handleChange}
              disabled={submitting}
              required
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className={`w-full rounded-lg border ${errors.password
                ? "border-red-400"
                : "border-gray-200 focus:border-[#2a5298]"
                } bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2a5298] transition`}
              value={form.password}
              onChange={handleChange}
              disabled={submitting}
              required
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-[#f4b400] hover:bg-[#ffcb3a] text-white font-semibold px-4 py-2 rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-[#f4b400] focus:ring-offset-2 disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? (
              <span className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
            ) : null}
            Log In
          </button>
        </form>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <span className="text-xs text-gray-400">© {new Date().getFullYear()} Kavia Ai</span>
      </div>
    </div>
  );
}

export default Login;
