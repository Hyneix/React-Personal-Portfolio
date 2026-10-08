import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields.");
      setSent(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      setSent(false);
      return;
    }

    setError("");
    setSent(true);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
    >

      <div className="space-y-4">

        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2"
          />
        </div>

        <div>
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2"
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2"
          />
        </div>

      </div>

      {error && (
        <p className="mt-4 text-red-600">
          {error}
        </p>
      )}

      {sent && (
        <p className="mt-4 rounded-md bg-neutral-100 p-3">
          Thanks! Your message has been sent.
        </p>
      )}

      <button
        type="submit"
        className="mt-4 rounded-md bg-neutral-900 px-6 py-3 text-white"
      >
        Send Message
      </button>

    </form>
  );
}

export default ContactForm;