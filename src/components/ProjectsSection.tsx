import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes. Interface moderne et responsive.",
      image: project1,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web App"
    },
    {
      id: 2,
      title: "Application Mobile Fintech",
      description: "Application mobile de gestion financière avec tracker de dépenses et analytics en temps réel.",
      image: project2,
      technologies: ["React Native", "Firebase", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Tableau de bord pour l'analyse de données avec visualisations interactives et rapports automatisés.",
      image: project3,
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Data Viz"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations récentes, alliant innovation 
            technique et design moderne pour créer des expériences utilisateur exceptionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge 
                  className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
                >
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary" 
                      className="bg-secondary/50 text-secondary-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;