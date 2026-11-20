
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Your Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Your Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          rows={5}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-purple-600 px-8 py-3 font-medium text-white hover:bg-purple-700"
      >
        Send Message
      </button>

      {submitted && (
        <p className="text-sm text-green-600">
          Your message has been submitted successfully!
        </p>
      )}
    </form>
  );
}
