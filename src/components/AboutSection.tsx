import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Smartphone, Database, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { category: "Frontend", icon: Palette, skills: ["React", "TypeScript", "Tailwind CSS", "Vue.js", "Next.js"] },
    { category: "Backend", icon: Database, skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Mobile", icon: Smartphone, skills: ["React Native", "Flutter", "Expo", "iOS", "Android"] },
    { category: "DevOps", icon: Globe, skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Jenkins"] },
    { category: "Outils", icon: Zap, skills: ["Git", "Figma", "Postman", "VS Code", "Jira"] },
    { category: "Langages", icon: Code, skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"] }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Développeur passionné avec plus de 5 ans d'expérience dans la création 
            d'applications web et mobile. Je transforme vos idées en solutions digitales 
            innovantes et performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Mon Parcours</h3>
            <p className="text-muted-foreground leading-relaxed">
              Diplômé en informatique, j'ai développé une expertise solide en développement 
              full-stack. Mon approche combine créativité technique et rigueur méthodologique 
              pour livrer des projets de qualité.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je privilégie les technologies modernes et les bonnes pratiques pour créer 
              des applications scalables, maintenables et centrées sur l'expérience utilisateur.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                🎯 Orienté résultats
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                🚀 Innovation
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                👥 Travail d'équipe
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-secondary rounded-2xl p-8 border border-border">
              <h4 className="text-xl font-semibold mb-4 text-primary">Statistiques</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projets Réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Années d'Expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-center mb-12">
            Compétences Techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <skillGroup.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;