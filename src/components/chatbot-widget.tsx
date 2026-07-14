"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type FormEvent } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: "Hello! I’m Beltline’s assistant. I can help with services, quotes, office details, and recent work.",
    },
  ]);

  const hasStartedChat = messages.some((message) => message.role === "user");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sendMessage = async (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { id: current.length + 1, role: "user", text: trimmed },
    ]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          id: current.length + 1,
          role: "assistant",
          text: data.reply || getAssistantReply(trimmed),
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: current.length + 1,
          role: "assistant",
          text: "I’m sorry, I couldn’t reach the assistant right now. Please contact us directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-[min(92vw,360px)] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl"
          >
            <div className="flex items-center justify-between rounded-t-3xl bg-[#1A2A44] px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">Beltline Assistant</p>
                <p className="text-xs text-slate-300">
                  Ask about services or get in touch
                </p>
              </div>
              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="rounded-full px-2 py-1 text-sm text-slate-200 transition hover:bg-white/10"
              >
                ✕
              </motion.button>
            </div>

            <div className="max-h-72 space-y-3 overflow-y-auto p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                      : "ml-auto bg-[#2B5FBF] text-white"
                  }`}
                >
                  {message.text}
                </div>
              ))}
              {isLoading ? (
                <div className="max-w-[85%] rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                  Typing...
                </div>
              ) : null}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 p-3">
              {!hasStartedChat ? (
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <motion.button
                      key={reply}
                      type="button"
                      onClick={() => sendMessage(reply)}
                      whileTap={{ scale: 0.97 }}
                      className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 transition hover:border-[#2B5FBF] dark:hover:border-[#60a5fa] hover:text-[#2B5FBF] dark:hover:text-[#60a5fa]"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2 text-sm outline-none focus:border-[#2B5FBF] text-slate-800 dark:text-slate-100"
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-[#2B5FBF] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#214c9e]"
                >
                  Send
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-3 flex items-center gap-2 rounded-full bg-[#2B5FBF] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#214c9e]"
      >
        <span className="text-base">💬</span>
        {open ? "Close chat" : "Need help?"}
      </motion.button>
    </div>
  );
}
