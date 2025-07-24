import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter 
            de vos besoins et voir comment je peux vous aider à concrétiser vos idées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
              <p className="text-muted-foreground mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations. 
                Que ce soit pour un projet freelance, un poste permanent ou simplement 
                pour échanger sur la tech, n'hésitez pas !
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">votre.email@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-muted-foreground">+33 X XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-muted-foreground">Paris, France</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suivez-moi</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Disponibilité</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  🟢 Disponible pour missions freelance
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50">
                  🕒 Réponse sous 24h
                </Badge>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Prénom</label>
                    <Input 
                      placeholder="Votre prénom" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nom</label>
                    <Input 
                      placeholder="Votre nom" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="votre.email@example.com" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sujet</label>
                  <Input 
                    placeholder="Sujet de votre message" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Décrivez votre projet ou votre demande..." 
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                >
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <Card className="border-border bg-gradient-secondary/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Transformons ensemble vos idées en réalité digitale. 
                Contactez-moi dès aujourd'hui pour une consultation gratuite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                  Planifier un appel
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Voir mes tarifs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;