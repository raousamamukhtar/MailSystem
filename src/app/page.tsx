"use client";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, subject, text }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.status === 200) {
      toast.success('Email sent successfully!');
      // Clear the form fields
      setTo('');
      setSubject('');
      setText('');
    } else {
      toast.error('Failed to send email.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">Send Custom Email</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">To:</label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Recipient's email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email subject"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Text:</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Plain text content"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Email
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        <Toaster />
      </div>
    </div>
  );
}
