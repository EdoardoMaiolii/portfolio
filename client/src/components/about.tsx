export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-light" data-testid="section-about">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title" data-testid="text-about-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 card-hover">
          <p className="text-lg text-secondary leading-relaxed" data-testid="text-about-description">
            Hi! I'm Edoardo, I'm currently working as an Android Automotive Software Developer at Amaris in Torino. 
            I specialize in creating responsive and precise UI/UX experiences for top-leading automotive companies, 
            developing interfaces that will be used by millions of drivers worldwide. My expertise spans from mobile development 
            with Android and iOS platforms, IoT systems, to embedded technologies. I'm passionate about crafting 
            user-centered solutions that combine cutting-edge technology with intuitive design.
          </p>
        </div>
      </div>
    </section>
  );
}
