import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-90"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/50 rounded-full animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent/70 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Votre Nom
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Développeur Full-Stack
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionné par la création d'applications web modernes et performantes. 
            Spécialisé en React, Node.js et développement mobile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
              Voir mes projets
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Télécharger CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;