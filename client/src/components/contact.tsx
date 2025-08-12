import { Mail, Phone, Linkedin, Github, Twitter, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-bg-light" data-testid="section-contact">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title" data-testid="text-contact-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto" data-testid="text-contact-description">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:edoardo.maioli99@gmail.com"
              className="flex items-center gap-3 btn-primary"
              data-testid="button-email"
            >
              <Mail size={20} />
              <span>edoardo.maioli99@gmail.com</span>
            </a>
            <a
              href="tel:+393490872283"
              className="flex items-center gap-3 btn-secondary"
              data-testid="button-phone"
            >
              <Phone size={20} />
              <span>+39 349 087 2283</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/edoardo-maioli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-200"
              data-testid="link-contact-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/edoardo-maioli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-200"
              data-testid="link-contact-github"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
