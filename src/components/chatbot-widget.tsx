"use client";

import { useMemo, useState, type FormEvent } from "react";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const quickReplies = [
  "What services do you offer?",
  "How do I request a quote?",
  "Where is your office?",
  "Show me your projects",
];

function getAssistantReply(message: string) {
  const lower = message.toLowerCase();

  if (
    lower.includes("service") ||
    lower.includes("consulting") ||
    lower.includes("logistics")
  ) {
    return "Beltline Global supports consulting, IT services, logistics, supplies, events, and property services. We can help you choose the right support for your needs.";
  }

  if (
    lower.includes("quote") ||
    lower.includes("price") ||
    lower.includes("contact")
  ) {
    return "You can request a quote through the contact page or call our office directly. We usually respond quickly with the next steps.";
  }

  if (
    lower.includes("office") ||
    lower.includes("location") ||
    lower.includes("address")
  ) {
    return "Our office is located at Shop 4, Bangor Estate Junction, Kulende, Ilorin, Kwara State.";
  }

  if (lower.includes("project") || lower.includes("work")) {
    return "You can browse selected case studies on the Projects page to see examples of our delivery approach.";
  }

  if (lower.includes("blog") || lower.includes("article")) {
    return "Our latest insights are available on the Blog page, covering operations, technology, and business growth topics.";
  }

  return "Thanks for reaching out. I can help with services, quotes, office details, and general information about Beltline Global.";
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: "",
    },
  ]);

  const lastMessage = useMemo(() => messages[messages.length - 1], [messages]);

  const sendMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { id: current.length + 1, role: "user", text: trimmed },
      {
        id: current.length + 2,
        role: "assistant",
        text: getAssistantReply(trimmed),
      },
    ]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {open ? (
        <div className="w-[min(92vw,360px)] rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-3xl bg-[#1A2A44] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Beltline Assistant</p>
              <p className="text-xs text-slate-300">
                Ask about services or get in touch
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full px-2 py-1 text-sm text-slate-200 transition hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="max-h-72 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                  message.role === "assistant"
                    ? "bg-slate-100 text-slate-700"
                    : "ml-auto bg-[#2B5FBF] text-white"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-3">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-[#2B5FBF] hover:text-[#2B5FBF]"
                >
                  {reply}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#2B5FBF]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#2B5FBF] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#214c9e]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="mt-3 flex items-center gap-2 rounded-full bg-[#2B5FBF] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#214c9e]"
      >
        <span className="text-base">💬</span>
        {open ? "Close chat" : "Need help?"}
      </button>

      {!open ? (
        <p className="mt-2 text-right text-xs text-slate-500">
          {lastMessage.text}
        </p>
      ) : null}
    </div>
  );
}
