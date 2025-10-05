import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Sobre{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FinanSecure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos una institución financiera comprometida con la seguridad, transparencia y educación financiera de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Misión */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up group">
            <div className="bg-gradient-to-br from-primary to-primary-light p-3 rounded-xl w-fit mb-6 group-hover:shadow-glow transition-all duration-300">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proporcionar soluciones financieras innovadoras y seguras, centradas en la educación financiera y la protección de los activos de nuestros clientes, construyendo relaciones de confianza a largo plazo.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
            <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-xl w-fit mb-6 group-hover:shadow-glow transition-all duration-300">
              <Eye className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser la institución financiera líder en seguridad y transparencia, reconocida por empoderar a las personas con conocimiento financiero y herramientas confiables para alcanzar sus metas económicas.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-accent to-secondary p-3 rounded-xl w-fit mb-6 group-hover:shadow-glow transition-all duration-300">
              <Award className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestros Valores</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Seguridad:</strong> Protección total de tu información</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Transparencia:</strong> Claridad en cada transacción</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Educación:</strong> Empoderamiento financiero</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Innovación:</strong> Tecnología de vanguardia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
