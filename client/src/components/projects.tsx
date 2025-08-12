import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "stargazers",
      title: "StarGazers",
      category: "Android Demo App",
      technologies: "Kotlin, MVVM, Dependency Injection, Kotlin Coroutines",
      image: "../images/star_gazers_screenshot.jpeg",
      link: "https://github.com/EdoardoMaiolii/StarGazers"
    },
    {
      id: "mmtech",
      title: "MMTech",
      category: "E-commerce Website",
      technologies: "HTML, CSS, MySQL, JavaScript, PHP",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&h=360",
      link: "https://github.com/EdoardoMaiolii/mmtech"
    },
    {
      id: "mge",
      title: "MGE - Mathematical Graphic Engine",
      category: "Desktop Application",
      technologies: "C++, Graphics Programming, Mathematical Visualization",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&h=360",
      link: "https://github.com/EdoardoMaiolii/MGE"
    },
    {
      id: "bachelor-thesis",
      title: "IoMT - EGA Case Study",
      category: "Bachelor Thesis",
      technologies: "IoT, Medical Technology, Embedded Systems",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&h=360",
      link: "https://amslaurea.unibo.it/24306/"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white" data-testid="section-projects">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title" data-testid="text-projects-title">Personal Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-bg-light rounded-xl shadow-lg overflow-hidden card-hover group"
              data-testid={`card-project-${project.id}`}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-scale-down bg-neutral-900 group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2" data-testid={`text-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-accent font-semibold mb-2" data-testid={`text-category-${project.id}`}>
                  {project.category}
                </p>
                <p className="text-secondary mb-4" data-testid={`text-technologies-${project.id}`}>
                  {project.technologies}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-200"
                  data-testid={`link-project-${project.id}`}
                >
                  View Project <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
