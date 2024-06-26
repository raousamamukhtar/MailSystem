"use client"
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [html, setHtml] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, subject, text, html }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.status === 200) {
      toast.success('Email sent successfully!');
      // Clear the form fields
      setTo('');
      setSubject('');
      setText('');
      setHtml('');
    } else {
      toast.error('Failed to send email.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Send Custom Email</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">To:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Text:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-gray-700">HTML:</label>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Send Email
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
      <Toaster />
    </div>
  );
}
