"use client";

import { useState, type FormEvent } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    const mailtoLink = `mailto:adam_i41@yahoo.com?subject=${encodeURIComponent("New enquiry from Beltline website")}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <input
        className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 outline-none focus:border-[#2B5FBF] text-slate-800 dark:text-slate-100"
        placeholder="Name"
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
      />
      <input
        className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 outline-none focus:border-[#2B5FBF] text-slate-800 dark:text-slate-100"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
      />
      <input
        className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 outline-none focus:border-[#2B5FBF] text-slate-800 dark:text-slate-100 sm:col-span-2"
        placeholder="Phone"
        value={form.phone}
        onChange={(event) => setForm({ ...form, phone: event.target.value })}
      />
      <textarea
        className="min-h-32 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 outline-none focus:border-[#2B5FBF] text-slate-800 dark:text-slate-100 sm:col-span-2"
        placeholder="Message"
        value={form.message}
        onChange={(event) => setForm({ ...form, message: event.target.value })}
      />
      <button className="rounded-full bg-[#2B5FBF] px-6 py-3 font-semibold text-white transition hover:bg-[#214c9e] sm:col-span-2">
        Send Message
      </button>
      {status === "success" ? (
        <p className="sm:col-span-2 text-sm font-medium text-emerald-600">
          Thanks! Your enquiry is ready to be sent via your email app.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="sm:col-span-2 text-sm font-medium text-rose-600">
          Please add your name, email, and a message before sending.
        </p>
      ) : null}
    </form>
  );
}
