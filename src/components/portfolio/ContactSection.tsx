import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] text-center"
    >
      <FadeIn delay={0} y={40}>
        <p className="text-[#D7E2EA]/60 uppercase text-sm sm:text-base tracking-[0.3em] mb-6">
          Get in touch
        </p>
      </FadeIn>

      <FadeIn delay={0.1} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
          style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <p
          className="text-[#D7E2EA] font-light max-w-2xl mb-12 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
        >
          Got a project in mind, or just want to say hi? My inbox is always open.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <ContactButton />
      </FadeIn>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#D7E2EA]/50 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Dhruv Sharma</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/joonahqt-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D7E2EA] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:joonhqt@gmail.com"
            className="hover:text-[#D7E2EA] transition-colors"
          >
            Email
          </a>
        </div>
      </footer>
    </section>
  );
}