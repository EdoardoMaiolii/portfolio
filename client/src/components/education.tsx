import { Star, GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      id: "unibo-bsc",
      institution: "University of Bologna",
      degree: "Bachelor's Degree in Computer Engineering and Computer Science",
      period: "September 2018 - October 2021",
      logo: "../images/unibo_logo.jpg",
      details: "Bachelor Thesis: IoMT, EGA as a case study - focused on Internet of Medical Things and electronic health applications.",
      thesisLink: "https://amslaurea.unibo.it/24306/",
      gridSpan: "md:col-span-2"
    },
  ];

  return (
    <section id="education" className="section-padding bg-bg-light" data-testid="section-education">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title" data-testid="text-education-title">Education</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className={`bg-white rounded-xl shadow-lg p-8 card-hover ${edu.gridSpan}`}
              data-testid={`card-education-${edu.id}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} Logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                  data-testid={`img-logo-${edu.id}`}
                />
                <div>
                  <h3 className="text-xl font-bold text-primary" data-testid={`text-degree-${edu.id}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-accent font-semibold" data-testid={`text-institution-${edu.id}`}>
                    {edu.institution}
                  </p>
                  <p className="text-secondary" data-testid={`text-period-${edu.id}`}>
                    {edu.period}
                  </p>
                </div>
              </div>
              
              {edu.details && (
                <div className="flex items-start mb-4" data-testid={`text-details-${edu.id}`}>
                  <GraduationCap className="text-accent mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-secondary">{edu.details}</span>
                </div>
              )}
              
              {edu.thesisLink && (
                <div className="mt-4">
                  <a
                    href={edu.thesisLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200 text-sm"
                    data-testid={`link-thesis-${edu.id}`}
                  >
                    📄 View Thesis
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
