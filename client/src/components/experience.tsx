import { CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: "amaris",
      company: "Amaris",
      position: "Android Automotive Software Developer",
      period: "June 2024 - Present",
      logo: "/images/images.jpeg",
      achievements: [
        "Creating responsive and precise UI/UX experiences for top-leading automotive companies, developing interfaces that will be used by millions of drivers worldwide in the future.",
        "Specializing in Android Automotive development with focus on user experience and performance optimization for in-vehicle systems."
      ]
    },
    {
      id: "onit",
      company: "Onit",
      position: "Mobile Software Developer",
      period: "October 2021 - June 2024",
      logo: "/images/onitsmart_logo.jpg",
      achievements: [
        "Reached thousands of users on Play Store with Android mobile apps written in Java and Kotlin, and Android TV app with Kotlin (B2B).",
        "Developed native iOS mobile app with Swift storyboard and SwiftUI, through Xcode framework, delivering cross-platform mobile solutions."
      ]
    },
    {
      id: "codicezero",
      company: "CodiceZero",
      position: "Android Mobile Software Developer Intern",
      period: "July 2021 - September 2021",
      logo: "/images/codicezero_logo.png",
      achievements: [
        "Learned Kotlin language and Android Studio framework, building foundational skills in mobile development.",
        "Gained hands-on experience with Android development best practices and modern mobile architecture patterns."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white" data-testid="section-experience">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title" data-testid="text-experience-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-bg-light rounded-xl shadow-lg p-8 card-hover" data-testid={`card-experience-${exp.id}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                  data-testid={`img-logo-${exp.id}`}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary" data-testid={`text-position-${exp.id}`}>
                    {exp.position}
                  </h3>
                  <p className="text-accent font-semibold" data-testid={`text-company-${exp.id}`}>
                    {exp.company}
                  </p>
                  <p className="text-secondary" data-testid={`text-period-${exp.id}`}>
                    {exp.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-secondary">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start" data-testid={`text-achievement-${exp.id}-${index}`}>
                    <CheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
