import { Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FinanSecure
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Soluciones financieras seguras y transparentes para tu tranquilidad económica.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Cuentas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Créditos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Inversión
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Pagos
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#nosotros" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Seguridad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} FinanSecure. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              FinanSecure es una marca registrada. Regulado por el Banco Central.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
