import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import ContactForm from "@/components/sections/ContactForm";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Business Websites",
    description:
      "Professional, responsive websites that help your business build credibility and attract more customers.",
    features: ["Business websites", "Landing pages", "Company websites"],
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Web Applications",
    description:
      "Custom web applications designed to simplify your operations and solve real business problems.",
    features: ["Admin dashboards", "Customer portals", "Management systems"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Custom Software",
    description:
      "Purpose-built software solutions tailored to your workflows, requirements and business goals.",
    features: [
      "Custom functionality",
      "API integrations",
      "Business automation",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Website Maintenance",
    description:
      "Keep your digital presence secure, updated and performing smoothly as your business grows.",
    features: [
      "Updates and fixes",
      "Performance improvements",
      "Technical support",
    ],
  },
];

const projects = [
  {
    category: "Education",
    title: "Coaching Institute Website",
    description:
      "A professional website concept for an educational institute to showcase courses, faculty and student success stories.",
    number: "01",
    color: "from-blue-100 to-indigo-200",
    label: "Education platform",
    image: "/images/coaching-institute-concept.png",
  },
  {
    category: "Healthcare",
    title: "Clinic Website",
    description:
      "A clean website concept for a healthcare provider with doctor profiles, services and appointment enquiries.",
    number: "02",
    color: "from-emerald-100 to-teal-200",
    label: "Healthcare website",
    image: "/images/clinic-website-concept.png",
  },
  {
    category: "Business Software",
    title: "Business Management App",
    description:
      "A web application concept featuring authentication, dashboards, role-based access and business reporting.",
    number: "03",
    color: "from-violet-100 to-purple-200",
    label: "Management software",
    image: "/images/business-management-app-concept.png",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Built around your goals",
    description:
      "We understand your requirements first and build a solution that supports your business objectives.",
  },
  {
    icon: Layers3,
    title: "Designed to grow",
    description:
      "We create maintainable solutions that can evolve as your business and requirements change.",
  },
  {
    icon: Workflow,
    title: "Simple collaboration",
    description:
      "Clear communication, practical suggestions and a straightforward development process.",
  },
  {
    icon: Rocket,
    title: "Focused on quality",
    description:
      "Responsive design, reliable functionality and attention to the details that matter.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We discuss your business, understand your requirements and define the project scope.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We organize the structure, plan the user experience and establish the visual direction.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build your website or application with a focus on usability, performance and quality.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We test the solution, prepare it for launch and help you with ongoing improvements.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative scroll-mt-20 overflow-hidden bg-white pt-36 pb-24 lg:pt-44 lg:pb-32"
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles size={15} />
                YOUR DIGITAL GROWTH PARTNER
              </div>

              <h1 className="max-w-2xl text-5xl leading-[1.12] font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                We build digital experiences that{" "}
                <span className="text-blue-600">grow businesses.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                From professional business websites to custom web applications,
                we turn your ideas into practical digital solutions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Start a Project <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
                >
                  Explore Our Work <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2">
                  <Check size={17} className="text-blue-600" />
                  Business-focused solutions
                </span>
                <span className="flex items-center gap-2">
                  <Check size={17} className="text-blue-600" />
                  Modern technology
                </span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-100 to-indigo-100 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-4 shadow-2xl shadow-blue-900/15">
                <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-slate-400">customvaas.dev</span>
                  <Code2 size={17} className="text-blue-400" />
                </div>

                <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-7">
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-semibold tracking-widest text-blue-400">
                      DIGITAL SOLUTIONS
                    </span>
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
                      Ideas into
                      <br />
                      reality<span className="text-blue-400">.</span>
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      Thoughtful design. Powerful technology. Meaningful
                      results.
                    </p>
                    <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
                      Explore solutions <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <Globe2 className="text-blue-400" size={21} />
                        <span className="text-xs text-slate-500">01</span>
                      </div>
                      <p className="font-semibold text-white">Websites</p>
                      <p className="mt-1 text-xs text-slate-400">
                        Your business online
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <MonitorSmartphone
                          className="text-indigo-400"
                          size={21}
                        />
                        <span className="text-xs text-slate-500">02</span>
                      </div>
                      <p className="font-semibold text-white">Applications</p>
                      <p className="mt-1 text-xs text-slate-400">
                        Solutions that work
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <Layers3 className="text-emerald-400" size={21} />
                        <span className="text-xs text-slate-500">03</span>
                      </div>
                      <p className="font-semibold text-white">
                        Custom Software
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Built for your needs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">
                      Building something meaningful?
                    </span>
                    <ArrowUpRight size={18} className="text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Rocket size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Built for growth</p>
                    <p className="text-xs text-slate-500">
                      Designed around your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-20 bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-bold tracking-widest text-blue-600">
                WHAT WE DO
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Digital solutions for your business
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Whether you're starting from scratch or improving an existing
                system, we help bring your digital ideas to life.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.number}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={25} />
                      </div>
                      {/* <span className="text-sm font-bold text-slate-300">
                        {service.number}
                      </span> */}
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 min-h-24 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <Check size={15} className="text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#contact"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3"
                    >
                      Discuss your project <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR WORK */}
        <section id="work" className="scroll-mt-20 bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-sm font-bold tracking-widest text-blue-600">
                  SELECTED WORK
                </span>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Ideas brought to life
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  Explore the types of digital experiences we are creating for
                  businesses and organizations.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex w-fit items-center gap-2 font-semibold text-blue-600"
              >
                Have a project in mind? <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.number} className="group">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${project.color}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-5 top-5 z-10 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                      {project.category}
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="text-slate-400 transition group-hover:text-blue-600"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>
                    <span className="mt-4 inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      Concept project
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CUSTOMVAAS */}
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <span className="text-sm font-bold tracking-widest text-blue-400">
                WHY CUSTOMVAAS
              </span>
              <h2 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
                More than just a website.
                <span className="text-blue-400">
                  {" "}
                  A solution for your business.
                </span>
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-slate-400">
                Technology should make running a business easier, not more
                complicated. We focus on understanding your needs and creating
                digital solutions that are practical, reliable and ready to grow
                with you.
              </p>
              <Link
                href="#about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
              >
                Get to know us <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.07]"
                  >
                    <Icon size={26} className="text-blue-400" />
                    <h3 className="mt-5 font-bold">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div className="relative">
              <div className="rounded-3xl bg-blue-50 p-8 sm:p-12">
                <div className="rounded-2xl bg-white p-8 shadow-xl shadow-blue-900/5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Code2 size={28} />
                  </div>
                  <h3 className="mt-7 text-3xl font-extrabold text-slate-900">
                    Websites.
                    <br />
                    Applications.
                    <br />
                    Custom Software.
                  </h3>
                  <p className="mt-5 leading-7 text-slate-600">
                    Thoughtful development for businesses with ideas worth
                    building.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-1.5 w-12 rounded-full bg-blue-600" />
                    {/* <div className="h-1.5 w-6 rounded-full bg-blue-200" />
                    <div className="h-1.5 w-6 rounded-full bg-blue-200" /> */}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-4 rounded-xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-xl">
                Built with purpose
              </div>
            </div>

            <div>
              <span className="text-sm font-bold tracking-widest text-blue-600">
                ABOUT CUSTOMVAAS
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Technology that makes ideas possible.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Customvaas is a web development agency focused on building
                professional websites, web applications and custom software for
                growing businesses.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                We believe good software starts with understanding the problem.
                That's why we focus on clear communication, thoughtful planning
                and solutions that serve a real purpose.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="border-l-2 border-blue-600 pl-4">
                  <p className="font-bold text-slate-900">Business focused</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Practical digital solutions
                  </p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <p className="font-bold text-slate-900">Quality driven</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Thoughtful development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="scroll-mt-20 bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="text-sm font-bold tracking-widest text-blue-600">
                HOW WE WORK
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                From idea to launch
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                A straightforward process that keeps you informed at every stage
                of your project.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
                    {step.number}
                  </div>
                  {index !== process.length - 1 && (
                    <div className="absolute left-16 top-7 hidden h-px w-[calc(100%-2rem)] bg-blue-200 md:block" />
                  )}
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-7 py-14 text-center text-white sm:px-14">
            <span className="text-sm font-bold tracking-widest text-blue-100">
              HAVE AN IDEA?
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let's build something meaningful together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
              Tell us what you have in mind. Let's discuss how the right digital
              solution can help your business move forward.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Start a Conversation <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20 bg-slate-50 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-bold tracking-widest text-blue-600">
                GET IN TOUCH
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Let's talk about your project.
              </h2>
              <p className="mt-6 max-w-lg leading-8 text-slate-600">
                Have a business idea, need a new website or want to improve an
                existing application? We'd love to hear from you.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <Mail size={21} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email us</p>
                    <p className="font-semibold text-slate-900">
                      customvaas@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <Phone size={21} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone us</p>
                    <p className="font-semibold text-slate-900">
                      +91 7055889083
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <MessageCircle size={21} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Project enquiries</p>
                    <p className="font-semibold text-slate-900">
                      Let's discuss your requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
              <h3 className="mb-7 text-2xl font-bold text-slate-900">
                Tell us about your project
              </h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="#home" className="inline-flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
                  C
                </span>
                <span className="text-2xl font-extrabold">
                  Custom<span className="text-blue-400">vaas</span>
                </span>
              </Link>
              <p className="mt-5 max-w-sm leading-7 text-slate-400">
                Websites. Applications. Custom Software.
                <br />
                Digital solutions for growing businesses.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                {[
                  ["Home", "#home"],
                  ["Services", "#services"],
                  ["Our Work", "#work"],
                  ["About", "#about"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link className="transition hover:text-white" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Our Services</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li>Business Websites</li>
                <li>Web Applications</li>
                <li>Custom Software</li>
                <li>Website Maintenance</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row">
            {/* <p>© {new Date().getFullYear()} Customvaas. All rights reserved.</p> */}
            <p>© 2026 Customvaas. All rights reserved.</p>
            <Link
              href="#home"
              className="flex items-center gap-2 hover:text-white"
            >
              Back to top <ChevronRight size={15} className="-rotate-90" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
