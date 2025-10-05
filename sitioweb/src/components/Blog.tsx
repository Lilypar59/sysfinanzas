import { Calendar, ArrowRight, TrendingUp, Shield, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: "5 Estrategias para Mejorar tu Salud Financiera en 2025",
      excerpt: "Descubre las mejores prácticas para optimizar tus finanzas personales y alcanzar tus metas económicas este año.",
      date: "15 de Enero, 2025",
      category: "Finanzas Personales",
      icon: TrendingUp,
      color: "from-primary to-primary-light"
    },
    {
      title: "Protege tus Inversiones: Guía Completa de Seguridad Financiera",
      excerpt: "Aprende cómo proteger tus activos con las mejores prácticas de seguridad y diversificación de inversiones.",
      date: "10 de Enero, 2025",
      category: "Seguridad",
      icon: Shield,
      color: "from-secondary to-primary"
    },
    {
      title: "Inversión Inteligente: Cómo Empezar con Poco Capital",
      excerpt: "No necesitas grandes sumas para invertir. Te mostramos cómo comenzar tu camino hacia la libertad financiera.",
      date: "5 de Enero, 2025",
      category: "Inversión",
      icon: Lightbulb,
      color: "from-accent to-secondary"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Blog y{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Noticias
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantente informado con consejos, guías y las últimas novedades del mundo financiero
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <article.icon className="h-20 w-20 text-white opacity-80" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>

                <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {article.category}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <Button variant="link" className="p-0 h-auto group/btn">
                  Leer más
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver todos los artículos
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
