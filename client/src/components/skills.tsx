import { Code, Smartphone, Database, Globe, Wrench, MessageSquare } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: <Code className="text-accent" size={24} />,
      skills: ["Kotlin", "Java", "Swift", "Python", "C", "C#", "JavaScript", "PHP", "Bash", "Assembly"]
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: <Smartphone className="text-accent" size={24} />,
      skills: ["Android Studio", "Xcode", "Jetpack Compose", "SwiftUI", "Android TV", "Android Automotive"]
    },
    {
      id: "backend-database",
      title: "Backend & Database",
      icon: <Database className="text-accent" size={24} />,
      skills: ["REST API", "MySQL", "Dependency Injection", "Kotlin Coroutines", "OOP", "MVVM"]
    },
    {
      id: "web-technologies",
      title: "Web Technologies",
      icon: <Globe className="text-accent" size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "Responsive Design"]
    },
    {
      id: "tools-methodologies",
      title: "Tools & Methodologies",
      icon: <Wrench className="text-accent" size={24} />,
      skills: ["Git", "Gradle", "Agile", "Scrum", "Arduino", "IoT", "Embedded Systems"]
    },
    {
      id: "languages",
      title: "Languages",
      icon: <MessageSquare className="text-accent" size={24} />,
      skills: ["Italian (Native)", "English (Professional)", "German (Intermediate)"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white" data-testid="section-skills">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title" data-testid="text-skills-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-bg-light rounded-xl shadow-lg p-6 card-hover"
              data-testid={`card-skills-${category.id}`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-bold text-primary ml-3" data-testid={`text-skill-title-${category.id}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                    data-testid={`tag-skill-${category.id}-${index}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}