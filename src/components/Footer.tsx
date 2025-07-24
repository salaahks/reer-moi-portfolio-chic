import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-muted-foreground">
              Développeur Full-Stack passionné par la création d'applications 
              web modernes et performantes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full border border-border hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full border border-border hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full border border-border hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="space-y-2">
              {[
                { label: "À propos", href: "#about" },
                { label: "Projets", href: "#projects" },
                { label: "Méthodologies", href: "#methodologies" },
                { label: "Contact", href: "#contact" }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>votre.email@example.com</p>
              <p>+33 X XX XX XX XX</p>
              <p>Paris, France</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Portfolio. Tous droits réservés.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1 mt-2 md:mt-0">
              Fait avec <Heart className="w-4 h-4 text-red-500" /> en React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;