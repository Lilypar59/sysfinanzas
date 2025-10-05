import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Empresaria",
      content: "FinanSecure ha transformado la manera en que manejo las finanzas de mi negocio. La transparencia y el soporte 24/7 son excepcionales.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    {
      name: "Carlos Ramírez",
      role: "Profesional Independiente",
      content: "Después de años buscando una institución confiable, encontré en FinanSecure la seguridad que necesitaba. Sus tasas son muy competitivas.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
    },
    {
      name: "Ana Martínez",
      role: "Inversionista",
      content: "La asesoría de inversión personalizada me ayudó a diversificar mi portafolio. Excelente servicio y resultados tangibles.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
    },
    {
      name: "Jorge Silva",
      role: "Emprendedor",
      content: "El proceso de aprobación de crédito fue rápido y sin complicaciones. FinanSecure realmente entiende las necesidades de los emprendedores.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jorge"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de clientes confían en FinanSecure para sus necesidades financieras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
