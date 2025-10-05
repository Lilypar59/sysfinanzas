import { Wallet, CreditCard, TrendingUp, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Wallet,
      title: "Cuentas",
      description: "Cuentas corrientes y de ahorro con tasas competitivas. Sin comisiones ocultas y con acceso 24/7 a tu dinero.",
      features: ["Sin comisiones mensuales", "Tarjeta débito gratuita", "Banca en línea"],
      color: "from-primary to-primary-light"
    },
    {
      icon: CreditCard,
      title: "Créditos",
      description: "Préstamos personales y líneas de crédito flexibles con tasas preferenciales. Aprobación rápida y transparente.",
      features: ["Tasas competitivas", "Aprobación en 24hrs", "Sin penalización"],
      color: "from-secondary to-primary"
    },
    {
      icon: TrendingUp,
      title: "Inversión",
      description: "Fondos de inversión diversificados y asesoría personalizada. Haz crecer tu patrimonio de forma segura.",
      features: ["Asesoría gratuita", "Diversificación", "Rentabilidad"],
      color: "from-accent to-secondary"
    },
    {
      icon: Smartphone,
      title: "Pagos",
      description: "Transferencias instantáneas, pago de servicios y comercio electrónico. Todo desde tu smartphone.",
      features: ["Transferencias 24/7", "Sin costo adicional", "Seguridad total"],
      color: "from-primary-light to-accent"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones financieras completas diseñadas para cada etapa de tu vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${service.color} p-3 rounded-xl w-fit mb-4 group-hover:shadow-glow transition-all duration-300`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                Más información
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
