import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Handshake,
  Lightbulb,
  MessageCircle,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

/* =========================================================
   ABOUT PAGE DATA
========================================================= */

const values = [
  {
    icon: Handshake,
    title: "We're Your Partner",
    description:
      "You're not just a client. You're part of the process, and we're in this together.",
  },
  {
    icon: Rocket,
    title: "We Keep It Simple",
    description:
      "We build what works, fast, without overcomplicating things.",
  },
  {
    icon: Users,
    title: "We Focus on You",
    description:
      "Your goals shape everything we do. No cookie-cutter solutions here.",
  },
  {
    icon: ShieldCheck,
    title: "We're Honest",
    description:
      "We'll tell you what's possible, what's not, and how we'll get it done.",
  },
];

const services = [
  {
    icon: ShieldCheck,
    title: "Keep Your Tech Running",
    description:
      "We monitor your systems around the clock, keeping them secure and ready so you can focus on what you do best.",
  },
  {
    icon: Code2,
    title: "Build Apps People Love",
    description:
      "From mobile apps to websites, we create tools that are easy to use and feel personal, whether for your customers or your team.",
  },
  {
    icon: Rocket,
    title: "Move to the Cloud",
    description:
      "We help you shift to AWS, Azure, or Google Cloud, making your business faster, safer, and ready to grow.",
  },
  {
    icon: Sparkles,
    title: "Add Smart Tech",
    description:
      "We bring AI to your business, tools that predict trends, automate tasks, or answer customer questions instantly.",
  },
  {
    icon: CheckCircle2,
    title: "Organize Your Business",
    description:
      "Our custom ERP systems simplify everything from payroll to inventory, saving you time and stress.",
  },
  {
    icon: MessageCircle,
    title: "Get Your Brand Noticed",
    description:
      "From search engines to social media, we help your business stand out and connect with the right people.",
  },
  {
    icon: Palette,
    title: "Design That Feels Alive",
    description:
      "We create visuals for the web, mobile, or print. Designs that grab attention and make your brand unforgettable.",
  },
  {
    icon: Lightbulb,
    title: "Make Travel Easy",
    description:
      "We build booking platforms and offer 24/7 support in multiple languages, so your customers enjoy smooth, stress-free experiences.",
  },
];

const differences = [
  {
    number: "01",
    title: "We Start With You",
    description:
      "Every project kicks off with a free consultation where we listen to your goals, challenges, and dreams.",
  },
  {
    number: "02",
    title: "We Stay Clear",
    description:
      "You get a step-by-step plan from us with no surprises, so you always know what's coming next.",
  },
  {
    number: "03",
    title: "We Stick Around",
    description:
      "Even after a successful project launch, we will be there for updates, fixes, and training to keep everything running.",
  },
  {
    number: "04",
    title: "You Keep Coming Back",
    description:
      "95% of our clients return because of the trust, and we deliver the results again and again to keep your business growing.",
  },
];

const dzWay = [
  {
    number: "01",
    title: "One Person to Talk to",
    description:
      "Rather than getting bounced around, you will have a dedicated contact who knows your project inside and out.",
  },
  {
    number: "02",
    title: "Updates You Can Trust",
    description:
      "We keep you in the loop with clear and regular reports on what's happening and become a partner you can trust.",
  },
  {
    number: "03",
    title: "A Team That Feels Like Yours",
    description:
      "Our developers, designers, and support crew work as if they're part of your business, like your own team of talents.",
  },
];

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-2 text-[10px] font-semibold text-red-600 sm:text-xs">
      <Sparkles className="h-3.5 w-3.5" />
      <span>{children}</span>
    </div>
  );
}

/* =========================================================
   VALUE CARD
========================================================= */

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-[20px] border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 transition duration-300 group-hover:bg-red-600 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-sm font-bold text-gray-900 sm:text-base">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutUsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f7f5] text-[#111318]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-black/5 bg-[#f7f7f5]">
        <div className="mx-auto grid min-h-[560px] w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
          {/* HERO CONTENT */}

          <div className="order-2 lg:order-1">
            <SectionLabel>
              About DZ MARKETING SOLUTIONS PVT. LTD.
            </SectionLabel>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-tight text-[#111318] sm:text-5xl md:text-6xl lg:text-7xl">
              About DZ MARKETING SOLUTIONS PVT. LTD.

              <span className="block text-red-600">
                Where Ideas Meet Impact
              </span>
            </h1>

            <h2 className="mt-6 text-lg font-bold leading-7 text-gray-800 sm:text-xl lg:text-2xl">
              You dream about it. We build it,
              <span className="text-red-600"> TOGETHER</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              We transform ideas into practical technology solutions that help
              businesses work smarter, grow faster, and create better
              experiences for their customers.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-red-600/15 transition duration-300 hover:bg-red-700 sm:text-sm"
              >
                Let's Talk
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-xs font-bold text-gray-800 shadow-sm transition duration-300 hover:border-red-400 hover:text-red-600 sm:text-sm"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[24px] border border-gray-200 bg-white p-2 shadow-xl shadow-gray-200/60 sm:rounded-[30px] sm:p-3">
              <img
                src="/images/service-06.png"
                alt="DZ MARKETING SOLUTIONS PVT. LTD. technology team"
                className="h-[280px] w-full rounded-[18px] object-cover sm:h-[360px] sm:rounded-[22px] md:h-[400px] lg:h-[430px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
          {/* IMAGE */}

          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[24px] border border-gray-200 bg-[#f7f7f5] p-2 shadow-sm sm:rounded-[28px] sm:p-3">
              <img
                src="/images/service-07.png"
                alt="DZ MARKETING SOLUTIONS PVT. LTD. team working with ERP technology"
                loading="lazy"
                className="h-[280px] w-full rounded-[18px] object-cover sm:h-[360px] sm:rounded-[22px] lg:h-[430px]"
              />
            </div>
          </div>

          {/* CONTENT */}

          <div className="order-1 lg:order-2">
            <SectionLabel>
              Welcome to DZ MARKETING SOLUTIONS PVT. LTD.
            </SectionLabel>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">
              Who We Are
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              <p>
                We're DZ MARKETING SOLUTIONS PVT. LTD. – a team that believes
                technology should make life easier, not harder. Do you have
                ideas you want to turn into real action? We're here for you
                whether you are a small business or a large enterprise. Turn
                your vision into tools that work.
              </p>

              <p>
                We don't just build tech; we build trust, connection, and
                solutions that feel like they were made just for you. Whether
                it's a mobile app that feels just right, a travel platform that
                books trips in a snap, or a system to keep your business
                running smoothly, we shall make it happen.
              </p>

              <p>
                We started with a simple idea: technology should serve people,
                not the other way around. Every line of code we write, every
                design we create, every late-night support call we answer – it's
                all about helping you succeed. Your dream is our mission, and
                we're here to carry it forward with heart and hustle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT DRIVES US
      ===================================================== */}

      <section className="bg-[#f7f7f5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What Drives Us</SectionLabel>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">
              Real Problems.
              <span className="text-red-600"> Real Solutions.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              We're not here to chase trends or throw around fancy terms.
              We're here to solve real-world problems – Your Problems. Maybe
              your business is growing faster than you can keep up, or you're
              losing hours to repetitive tasks. Maybe you've got a big idea
              but don't know where to start. That's where we come in.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Our mission? To give you tools that make your work easier, your
              customers happier, and your goals closer. We pour everything into
              that. Because if you win, we feel it too.
            </p>
          </div>

          {/* VALUE CARDS */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {values.map((value) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO FOR YOU
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What We Do For You</SectionLabel>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">
              Technology Built Around
              <span className="text-red-600"> Your Business</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              From everyday IT management to advanced AI and cloud solutions,
              we create technology that solves real business challenges.
            </p>
          </div>

          {/* SERVICE CARDS */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative rounded-[20px] border border-gray-200 bg-[#f7f7f5] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-bold text-gray-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-bold leading-5 text-gray-900 sm:text-base">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WE'RE DIFFERENT
      ===================================================== */}

      <section className="bg-[#f7f7f5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
          {/* CONTENT */}

          <div>
            <SectionLabel>Why We're Different</SectionLabel>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">
              We Build
              <span className="text-red-600"> With You,</span>
              <br />
              Not Just For You.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              You think you have options, so why pick us? Because we care about
              your story as much as you do. We do not just hand you a product
              and walk away; we listen, and we ask questions. We dig into what
              makes your business tick to build it into something that feels
              like it's yours, because it is.
            </p>

            {/* DIFFERENCES */}

            <div className="mt-8 space-y-4">
              {differences.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-xs font-bold text-red-600">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}

          <div>
            <div className="overflow-hidden rounded-[24px] border border-gray-200 bg-white p-2 shadow-lg sm:rounded-[30px] sm:p-3">
              <img
                src="/images/service-05.png"
                alt="Technology and digital business solutions"
                loading="lazy"
                className="h-[340px] w-full rounded-[18px] object-cover sm:h-[470px] sm:rounded-[24px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DZ MARKETING SOLUTIONS PVT. LTD. WAY
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
          {/* IMAGE */}

          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[24px] border border-gray-200 bg-[#f7f7f5] p-2 shadow-sm sm:rounded-[30px] sm:p-3">
              <img
                src="/images/service-03.png"
                alt="DZ MARKETING SOLUTIONS PVT. LTD. technology team"
                loading="lazy"
                className="h-[320px] w-full rounded-[18px] object-cover sm:h-[450px] sm:rounded-[24px] lg:h-[520px]"
              />
            </div>
          </div>

          {/* CONTENT */}

          <div className="order-1 lg:order-2">
            <SectionLabel>
              The DZ MARKETING SOLUTIONS PVT. LTD. Way
            </SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">
              Thrive In Everything You Choose-
              <span className="block text-red-600">
                The DZ MARKETING SOLUTIONS PVT. LTD. Way
              </span>
            </h2>

            <div className="mt-8 space-y-4">
              {dzWay.map((item) => (
                <div
                  key={item.number}
                  className="group rounded-[20px] border border-gray-200 bg-[#f7f7f5] p-5 transition duration-300 hover:border-red-200 hover:bg-white hover:shadow-md sm:p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#f7f7f5] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-red-100 bg-white shadow-sm sm:rounded-[30px]">
          {/* DECORATIVE GLOW */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-red-100 blur-[110px]" />

          <div className="relative px-5 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <MessageCircle className="h-6 w-6" />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">
              Your Dream.
              <span className="text-red-600"> Our Mission.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
              Let's turn your ideas into technology that makes a real
              difference. We're ready when you are.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-xs font-bold text-white transition duration-300 hover:bg-red-700 sm:text-sm"
              >
                Let's Talk
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-xs font-bold text-gray-800 transition duration-300 hover:border-red-400 hover:text-red-600 sm:text-sm"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}