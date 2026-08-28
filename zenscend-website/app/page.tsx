"use client";

import Navigation from "@/components/Navigation";
import { useState, useEffect, useRef, FormEvent } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Loader2,
  Check,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    tag: "app/",
    title: "Custom software development",
    body: "Interfaces, services, and the wiring between them, built around your domain instead of bent out of a template.",
  },
  {
    tag: "migrate/",
    title: "Legacy modernization",
    body: "Moving a system that works but nobody wants to touch onto something maintainable, without a big-bang rewrite.",
  },
  {
    tag: "cloud/",
    title: "Cloud and DevOps",
    body: "Provisioning, pipelines, and deploys that are boring on purpose. Infrastructure you can read.",
  },
  {
    tag: "advisory/",
    title: "Technical advisory",
    body: "A second opinion on an architecture, a hire, or a vendor's proposal, while it is still cheap to change course.",
  },
  {
    tag: "sec/",
    title: "Security and compliance",
    body: "Access control, secrets handling, audit trails. The parts nobody notices until they are missing.",
  },
  {
    tag: "perf/",
    title: "Performance optimization",
    body: "Profiling what already exists, finding the slow query, and making the number go down.",
  },
];

const work = [
  {
    name: "Zuza",
    href: "https://zuzatech.com/",
    logo: "/work/zuza.png",
    sector: "supply chain · retail · south africa",
    role: "Product partnership — Zenscend leads the technical side",
    body: "A platform for independent vendors across Africa: consolidated inventory, a network of trusted suppliers, and the analytics to see what is actually selling.",
    stack: ["Next.js", "vendor dashboard", "supplier integrations", "analytics"],
  },
];

const principles = [
  "Code the next person can read, including you a year from now",
  "Architecture sized for the load you have, with room for the load you expect",
  "Short cycles, with something running at the end of each one",
  "You see the repo, the board, and the bad news early",
  "We stay on after launch, because launch is when the real load arrives",
];

const stats = [
  { figure: "10+", label: "Projects shipped" },
  { figure: "5+", label: "Clients served" },
  { figure: "<24h", label: "Reply to new enquiries" },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Real local time in Pretoria, not decorative terminal output. Starts null so
  // the server-rendered placeholder matches the first client render.
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-ZA", {
      timeZone: "Africa/Johannesburg",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Pointer position inside the hero panel, reported in the panel header the way
  // an instrument reports a probe. rAF-throttled so mousemove stays cheap.
  const panelRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const [probe, setProbe] = useState<{ x: number; y: number } | null>(null);

  const handlePointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = panelRef.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const x = Math.round(e.clientX - box.left);
    const y = Math.round(e.clientY - box.top);
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setProbe({ x, y }));
  };

  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");

      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const field =
    "w-full bg-paper-sunk border border-field px-4 py-3 text-sm text-ink placeholder:text-ink-dim/70 focus:border-signal focus:bg-paper transition-colors";

  return (
    <>
      <Navigation />

      {/* Hero -------------------------------------------------------------- */}
      <section id="home" className="relative overflow-hidden pt-14">
        <div aria-hidden className="absolute inset-0 field-structure" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28">
          <div className="cut-frame [--c:28px]">
            <div
              ref={panelRef}
              onMouseMove={handlePointer}
              onMouseLeave={() => setProbe(null)}
              className="relative bg-ground text-text"
            >
              {/* panel header strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-6 py-3 font-display text-[10px] tracking-tight text-dim">
                <span>zenscend.co</span>
                <span className="tabular-nums">
                  <span className="probe-readout text-dim/60">
                    x:{probe ? String(probe.x).padStart(4, "0") : "----"} y:
                    {probe ? String(probe.y).padStart(4, "0") : "----"}
                  </span>
                  <span className="probe-readout mx-3 text-dim/40">|</span>
                  {now ?? "--:--:--"} SAST
                </span>
              </div>

              {probe && (
                <div aria-hidden>
                  <span
                    className="crosshair-line inset-y-0 w-px"
                    style={{ left: probe.x }}
                  />
                  <span
                    className="crosshair-line inset-x-0 h-px"
                    style={{ top: probe.y }}
                  />
                </div>
              )}

              <div className="relative px-6 py-12 sm:px-12 md:py-16">
                <p className="settle flex items-center gap-2 font-display text-[11px] tracking-tight text-dim">
                  <span className="h-1.5 w-1.5 bg-signal" />
                  accepting work
                </p>

                <h1
                  className="settle mt-6 font-display text-[1.75rem]/[1.2] tracking-[-0.055em] sm:text-4xl/[1.14] md:text-[3.25rem]/[1.1]"
                  style={{ ["--i" as string]: 1 }}
                >
                  Interfaces people use.{" "}
                  <span className="sm:block">
                    Systems that hold.
                    <span aria-hidden className="cursor-block" />
                  </span>
                </h1>

                {/* The rule under the headline ascends in steps instead of
                    running flat: the stair carved into the mark, and the
                    "-scend" half of the name. */}
                <div aria-hidden className="mt-12 flex h-12 items-end">
                  {[12, 24, 36, 48].map((h, i) => (
                    <span
                      key={h}
                      className={`stair-step w-10 border-l-2 border-t-2 ${
                        i === 3 ? "border-signal" : "border-structure"
                      }`}
                      style={{ height: h, ["--i" as string]: i + 2 }}
                    />
                  ))}
                  <span className="h-px flex-1 self-start bg-line" />
                </div>

                <p
                  className="settle mt-10 max-w-xl text-lg leading-relaxed text-dim"
                  style={{ ["--i" as string]: 6 }}
                >
                  We are not a web shop or a mobile shop. We are developers.
                  Whatever the problem runs on, we build it — and we run it
                  after.
                </p>

                <div
                  className="settle mt-10 flex flex-col gap-3 sm:flex-row"
                  style={{ ["--i" as string]: 7 }}
                >
                  <a
                    href="#contact"
                    className="cut [--c:12px] inline-flex items-center justify-center gap-2 bg-signal px-6 py-4 font-display text-[11px] tracking-tight text-ground transition-colors hover:bg-text"
                  >
                    Start a project <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center border border-line px-6 py-4 font-display text-[11px] tracking-tight text-dim transition-colors hover:border-dim hover:text-text"
                  >
                    See what we build
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services ---------------------------------------------------------- */}
      <section id="services" className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
          <p className="font-display text-[11px] tracking-tight text-signal-ink">services</p>
          <h2 className="mt-4 max-w-2xl font-display text-2xl leading-tight tracking-[-0.05em] md:text-[2rem]">
            What we build
          </h2>
          <p className="mt-4 max-w-xl text-ink-dim">
            This is what we are asked for most. It is not the limit.
          </p>

          <div className="cut-frame [--c:28px] mt-14">
            <div className="grid gap-px bg-line text-text sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.tag}
                  className="group bg-ground p-7 transition-colors hover:bg-wash md:p-9"
                >
                  <p className="font-display text-[11px] tracking-tight text-dim transition-colors group-hover:text-signal">
                    {service.tag}
                  </p>
                  <h3 className="mt-5 font-display text-sm leading-snug tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-dim">{service.body}</p>
                </div>
              ))}

              {/* `*` is the shell glob for "match anything". The section says
                  limitless in the page's own vocabulary instead of claiming it. */}
              <a
                href="#contact"
                className="group flex items-center justify-between gap-6 bg-ground p-7 transition-colors hover:bg-wash sm:col-span-2 md:p-9 lg:col-span-3"
              >
                <span className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <span className="font-display text-[11px] tracking-tight text-signal">*/</span>
                  <span className="text-sm text-dim">
                    Whatever is not on this list. The stack is incidental — ask.
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-dim transition-colors group-hover:text-signal" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our work ---------------------------------------------------------- */}
      <section id="work" className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
          <p className="font-display text-[11px] tracking-tight text-signal-ink">our work</p>
          <h2 className="mt-4 max-w-2xl font-display text-2xl leading-tight tracking-[-0.05em] md:text-[2rem]">
            What we have shipped
          </h2>

          <div className="mt-14 space-y-px">
            {work.map((project) => (
              <div key={project.name} className="cut-frame [--c:28px]">
                <div className="grid gap-px bg-line text-text sm:grid-cols-[13rem_1fr]">
                  {/* the asset is artwork on pure black; the plate owns that
                      rather than trying to blend it into the ground */}
                  <div className="flex items-center justify-center bg-black p-8">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={348}
                      height={349}
                      className="h-24 w-24 object-contain"
                    />
                  </div>

                  <div className="bg-ground p-7 md:p-9">
                    <p className="font-display text-[10px] tracking-tight text-dim">
                      {project.sector}
                    </p>
                    <h3 className="mt-4 font-display text-xl tracking-[-0.04em]">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-display text-[10px] leading-relaxed tracking-tight text-text">
                      {project.role}
                    </p>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-dim">
                      {project.body}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="font-display text-[10px] tracking-tight text-dim"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 border border-line px-5 py-3 font-display text-[11px] tracking-tight text-dim transition-colors hover:border-dim hover:text-text"
                    >
                      zuzatech.com
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About ------------------------------------------------------------- */}
      <section id="about" className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-display text-[11px] tracking-tight text-signal-ink">about</p>
              <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.05em] md:text-[2rem]">
                How we work
              </h2>

              <p className="mt-8 leading-relaxed text-ink-dim">
                Zenscend is Zen and Ascend: clarity in how a system is built, and
                room for it to grow. In practice that means we would rather spend a
                week on the data model than a month on the migration that follows a
                bad one.
              </p>
              <p className="mt-5 leading-relaxed text-ink-dim">
                We work as part of your team, not adjacent to it. Most of what we do
                is unglamorous — the screen that has to work on a cheap phone over
                patchy data, the query that has to return in time, the deploy that
                has to be uneventful.
              </p>

              <ul className="mt-10 space-y-4">
                {principles.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                    <span className="text-sm leading-relaxed text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-20">
              <div className="cut-frame [--c:24px]">
                <div className="bg-wash text-text">
                  <div className="border-b border-line/60 px-7 py-3 font-display text-[10px] tracking-tight text-dim">
                    to date
                  </div>
                  <dl className="divide-y divide-line/60">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-baseline justify-between gap-6 px-7 py-7"
                      >
                        <dd className="font-display text-3xl tracking-[-0.04em] md:text-4xl">
                          {stat.figure}
                        </dd>
                        <dt className="text-right text-sm text-dim">{stat.label}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact ----------------------------------------------------------- */}
      <section id="contact" className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
          <p className="font-display text-[11px] tracking-tight text-signal-ink">contact</p>
          <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.05em] md:text-[2rem]">
            Tell us about the system
          </h2>
          <p className="mt-4 max-w-xl text-ink-dim">
            What you are building, what is breaking, or what you are choosing
            between. We reply within a day.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-display text-[10px] tracking-tight text-ink-dim"
                >
                  name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={field}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-display text-[10px] tracking-tight text-ink-dim"
                >
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-display text-[10px] tracking-tight text-ink-dim"
                >
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={field}
                  placeholder="What are you building, and what is in the way?"
                />
              </div>

              <div aria-live="polite">
                {submitStatus === "success" && (
                  <p className="flex items-center gap-3 border border-field bg-paper-sunk px-4 py-3 text-sm text-ink">
                    <Check className="h-4 w-4 shrink-0 text-signal" />
                    Sent. We will reply within a day.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="flex items-center gap-3 border border-signal/60 bg-paper-sunk px-4 py-3 text-sm text-ink">
                    <AlertCircle className="h-4 w-4 shrink-0 text-signal" />
                    {errorMessage || "Could not send. Try again, or email bongani@zenscend.co."}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cut [--c:12px] flex w-full items-center justify-center gap-2 bg-signal sm:w-auto sm:px-10 px-6 py-4 font-display text-[11px] tracking-tight text-ground transition-colors hover:bg-text disabled:cursor-not-allowed disabled:bg-rule disabled:text-ink-dim"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  "Send message"
                )}
              </button>
            </form>

            <div className="space-y-10">
              <div>
                <p className="font-display text-[10px] tracking-tight text-ink-dim">direct</p>
                <div className="mt-5 space-y-4">
                  <a
                    href="mailto:info@zenscend.co"
                    className="flex items-center gap-4 text-sm text-ink transition-colors hover:text-signal-ink"
                  >
                    <Mail className="h-4 w-4 text-ink-dim" />
                    info@zenscend.co
                  </a>
                  <p className="flex items-center gap-4 text-sm text-ink">
                    <MapPin className="h-4 w-4 text-ink-dim" />
                    Brooklyn, Pretoria
                  </p>
                </div>
              </div>

              <div className="cut-frame [--c:20px]">
                <div className="bg-ground p-7 text-text">
                  <h3 className="font-display text-sm tracking-tight">Rather just talk?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-dim">
                    Message us on WhatsApp. The same person who builds it answers.
                  </p>
                  <a
                    href="https://wa.me/27645327596?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Zenscend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-3 bg-whatsapp px-5 py-3 font-display text-[11px] tracking-tight text-ground transition-colors hover:bg-whatsapp-deep"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-display text-[10px] tracking-tight text-ink-dim sm:px-8">
          <span>© 2026 Zenscend Tech Solutions</span>
          <span>innovate. elevate. zenscend.</span>
        </div>
      </footer>
    </>
  );
}
