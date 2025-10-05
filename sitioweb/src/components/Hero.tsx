import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Lock } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Soluciones Financieras Seguras</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Bienvenido a{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                FinanSecure
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Soluciones financieras <strong className="text-foreground">seguras y transparentes</strong> diseñadas para tu tranquilidad. 
              Construimos tu futuro financiero con confianza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("contacto")}
                className="group"
              >
                Conoce más
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("servicios")}
              >
                Ver servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Clientes activos</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-secondary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfacción</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Soporte</p>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full h-[500px]">
              {/* Feature cards */}
              <div className="absolute top-0 right-0 bg-card border border-border rounded-2xl p-6 shadow-large hover:shadow-glow transition-all duration-300 w-64">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Seguridad Garantizada</h3>
                <p className="text-sm text-muted-foreground">Protección de datos de nivel bancario</p>
              </div>

              <div className="absolute bottom-0 left-0 bg-card border border-border rounded-2xl p-6 shadow-large hover:shadow-glow transition-all duration-300 w-64" style={{ animationDelay: "0.3s" }}>
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Crecimiento Sostenible</h3>
                <p className="text-sm text-muted-foreground">Inversiones inteligentes y rentables</p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-2xl p-6 shadow-large hover:shadow-glow transition-all duration-300 w-64 z-10" style={{ animationDelay: "0.4s" }}>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Transparencia Total</h3>
                <p className="text-sm text-muted-foreground">Sin costos ocultos, todo claro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
