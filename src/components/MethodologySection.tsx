import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Layers, 
  GitBranch, 
  Target, 
  Users, 
  Zap, 
  Shield,
  Sparkles,
  Rocket
} from "lucide-react";

const MethodologySection = () => {
  const methodologies = [
    {
      icon: Target,
      title: "Agile & Scrum",
      description: "Développement itératif avec sprints, stand-ups quotidiens et livraisons fréquentes pour s'adapter aux besoins changeants.",
      practices: ["Sprint Planning", "Daily Standups", "Retrospectives", "User Stories"]
    },
    {
      icon: GitBranch,
      title: "Git Flow",
      description: "Gestion de version structurée avec branches feature, develop et main pour un développement collaboratif efficace.",
      practices: ["Feature Branches", "Code Reviews", "Merge Requests", "Release Tags"]
    },
    {
      icon: Shield,
      title: "Test-Driven Development",
      description: "Approche TDD avec tests unitaires, d'intégration et end-to-end pour garantir la qualité du code.",
      practices: ["Unit Tests", "Integration Tests", "E2E Tests", "Code Coverage"]
    },
    {
      icon: Zap,
      title: "CI/CD",
      description: "Intégration et déploiement continus avec pipelines automatisés pour des livraisons rapides et fiables.",
      practices: ["Automated Build", "Automated Testing", "Automated Deployment", "Monitoring"]
    },
    {
      icon: Layers,
      title: "Clean Architecture",
      description: "Architecture modulaire et découplée suivant les principes SOLID pour une maintenance facilitée.",
      practices: ["SOLID Principles", "Design Patterns", "Separation of Concerns", "DRY"]
    },
    {
      icon: Users,
      title: "UX/UI Design",
      description: "Conception centrée utilisateur avec prototypage, tests d'utilisabilité et design thinking.",
      practices: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    }
  ];

  const principles = [
    { icon: Sparkles, title: "Code Quality", description: "Code propre et documenté" },
    { icon: Rocket, title: "Performance", description: "Optimisation constante" },
    { icon: Shield, title: "Sécurité", description: "Bonnes pratiques sécuritaires" },
    { icon: Users, title: "Collaboration", description: "Communication transparente" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Méthodologies & Approches
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Je m'appuie sur des méthodologies éprouvées et des bonnes pratiques 
            pour livrer des projets de qualité, dans les délais et en respectant 
            les exigences clients.
          </p>
        </div>

        {/* Méthodologies principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {methodologies.map((methodology, index) => (
            <Card 
              key={methodology.title} 
              className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow-primary transition-all duration-300">
                    <methodology.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {methodology.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {methodology.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-primary">Pratiques clés :</h4>
                  <div className="flex flex-wrap gap-2">
                    {methodology.practices.map((practice) => (
                      <Badge 
                        key={practice}
                        variant="secondary" 
                        className="bg-secondary/50 text-secondary-foreground text-xs"
                      >
                        {practice}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Principes de développement */}
        <div className="bg-gradient-secondary/30 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Principes de Développement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {principle.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process de développement */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Mon Processus de Développement
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-primary hidden lg:block" />
            
            <div className="space-y-8">
              {[
                { step: "01", title: "Analyse & Planification", description: "Compréhension des besoins, analyse technique et planification détaillée" },
                { step: "02", title: "Design & Architecture", description: "Conception UX/UI et architecture technique selon les bonnes pratiques" },
                { step: "03", title: "Développement Itératif", description: "Développement en sprints avec livraisons fréquentes et feedback continu" },
                { step: "04", title: "Tests & Qualité", description: "Tests automatisés, revues de code et validation qualité" },
                { step: "05", title: "Déploiement & Suivi", description: "Mise en production sécurisée et monitoring des performances" }
              ].map((phase, index) => (
                <div 
                  key={phase.step}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                            {phase.step}
                          </div>
                          <h4 className="text-lg font-semibold">{phase.title}</h4>
                        </div>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:block w-4 h-4 rounded-full bg-primary shadow-glow-primary" />
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;