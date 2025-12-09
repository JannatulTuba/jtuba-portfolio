import React, { useState, FormEvent } from "react";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all fields before submitting.");
      setSubmitted(false);
      return;
    }

    setError(null);
    setSubmitted(true);
    console.log("Contact form submitted:", form);
  };

  return (
    <section className="page">
      <h2>Contact Me</h2>
      <p>
        If you want to connect or have questions about my work, feel free to
        send a message using this form.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            placeholder="How can I help you?"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </label>

        {error && <p className="error-text">{error}</p>}
        {submitted && !error && (
          <p className="success-text">
            Thank you! Your message has been recorded (you can see it in the
            browser console while developing).
          </p>
        )}

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};
