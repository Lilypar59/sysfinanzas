import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "El nombre es muy largo"),
  email: z.string().trim().email("Email inválido").max(255, "El email es muy largo"),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "El mensaje es muy largo")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("¡Mensaje enviado!", {
        description: "Nos pondremos en contacto contigo pronto."
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Error de validación", {
          description: error.errors[0].message
        });
      } else {
        toast.error("Error", {
          description: "Hubo un problema al enviar el mensaje. Intenta de nuevo."
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <p className="text-muted-foreground mb-8">
                Nuestro equipo está disponible para responder tus consultas y brindarte la mejor asesoría financiera.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">contacto@finansecure.com</p>
                  <p className="text-muted-foreground">soporte@finansecure.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <p className="text-muted-foreground">+34 900 123 456</p>
                  <p className="text-sm text-muted-foreground">Lunes a Viernes 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Oficina Principal</h4>
                  <p className="text-muted-foreground">Calle de la Innovación, 123</p>
                  <p className="text-muted-foreground">28001 Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-medium">
              <h4 className="font-semibold mb-2">Horario de Atención</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Lunes - Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-medium space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  maxLength={255}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  maxLength={1000}
                  rows={6}
                  className="w-full resize-none"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {formData.message.length}/1000 caracteres
                </p>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad y el uso de tus datos para contactarte.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
