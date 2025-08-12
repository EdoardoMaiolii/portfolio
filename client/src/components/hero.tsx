import { Github, Linkedin, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white section-padding" data-testid="section-hero">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6" data-testid="text-hero-title">
              Hi, I'm <span className="text-accent">Edoardo</span>
            </h1>
            <p className="text-xl sm:text-2xl text-secondary mb-8 leading-relaxed" data-testid="text-hero-description">
              Mobile & Android Software Developer, passionate about crafting high-quality Android applications and delivering seamless user experiences to millions worldwide.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#experience"
                className="btn-primary"
                data-testid="button-view-work"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/edoardo-maioli"
                className="text-secondary hover:text-accent transition-colors duration-200"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/edoardo-maioli"
                className="text-secondary hover:text-accent transition-colors duration-200"
                data-testid="link-github"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/3">
            <img
              src="/images/personal_photo.jpeg"
              alt="Edoardo Maioli - Professional headshot"
              className="rounded-full w-80 h-80 object-cover shadow-2xl mx-auto"
              data-testid="img-profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
