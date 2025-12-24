import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Search,
  Palette,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Nuancier RAL Thermolaquage | 200+ Couleurs Disponibles - AZ Construction",
  description:
    "Découvrez notre nuancier RAL complet pour thermolaquage : RAL 7016 Gris Anthracite, RAL 9005 Noir, RAL 9010 Blanc et 200+ teintes. Devis gratuit ☎️ 01 23 45 67 89",
  keywords: [
    "RAL 7016",
    "RAL 9005",
    "RAL 9010",
    "RAL 7035",
    "nuancier RAL",
    "couleurs RAL",
    "thermolaquage couleurs",
    "peinture RAL",
    "teintes RAL thermolaquage",
    "gris anthracite RAL",
    "noir RAL",
    "blanc RAL",
  ],
  alternates: {
    canonical: "https://zaconstruction.fr/couleurs-ral",
  },
  openGraph: {
    title: "Nuancier RAL Thermolaquage | AZ Construction",
    description:
      "200+ couleurs RAL disponibles pour thermolaquage. Trouvez la teinte parfaite pour votre projet.",
    url: "https://zaconstruction.fr/couleurs-ral",
    siteName: "AZ Construction",
    locale: "fr_FR",
    type: "website",
  },
};

// Base de données complète des couleurs RAL populaires
const ralColors = {
  populaires: [
    { code: "RAL 7016", name: "Gris Anthracite", hex: "#383E42", popular: true },
    { code: "RAL 9005", name: "Noir Profond", hex: "#0A0A0A", popular: true },
    { code: "RAL 9010", name: "Blanc Pur", hex: "#F7F7F7", popular: true },
    { code: "RAL 7035", name: "Gris Clair", hex: "#D7D7D7", popular: true },
    { code: "RAL 9016", name: "Blanc Signalisation", hex: "#F7FBFF", popular: true },
    { code: "RAL 7015", name: "Gris Ardoise", hex: "#4A4D4F", popular: true },
  ],
  gris: [
    { code: "RAL 7001", name: "Gris Argent", hex: "#8C969D" },
    { code: "RAL 7004", name: "Gris de Sécurité", hex: "#9B9B9B" },
    { code: "RAL 7005", name: "Gris Souris", hex: "#6B716F" },
    { code: "RAL 7011", name: "Gris Fer", hex: "#555D61" },
    { code: "RAL 7012", name: "Gris Basalte", hex: "#596163" },
    { code: "RAL 7015", name: "Gris Ardoise", hex: "#4A4D4F" },
    { code: "RAL 7016", name: "Gris Anthracite", hex: "#383E42" },
    { code: "RAL 7021", name: "Gris Noir", hex: "#2F3234" },
    { code: "RAL 7022", name: "Gris Terre d'Ombre", hex: "#4B4D46" },
    { code: "RAL 7024", name: "Gris Graphite", hex: "#45494E" },
    { code: "RAL 7026", name: "Gris Granit", hex: "#374447" },
    { code: "RAL 7030", name: "Gris Pierre", hex: "#939388" },
    { code: "RAL 7031", name: "Gris Bleu", hex: "#5D6970" },
    { code: "RAL 7032", name: "Gris Silex", hex: "#B5B0A1" },
    { code: "RAL 7033", name: "Gris Ciment", hex: "#7E8274" },
    { code: "RAL 7034", name: "Gris Jaune", hex: "#92886F" },
    { code: "RAL 7035", name: "Gris Clair", hex: "#D7D7D7" },
    { code: "RAL 7036", name: "Gris Platine", hex: "#979392" },
    { code: "RAL 7037", name: "Gris Poussière", hex: "#7C7F7E" },
    { code: "RAL 7038", name: "Gris Agate", hex: "#B4B8B0" },
    { code: "RAL 7039", name: "Gris Quartz", hex: "#6B695F" },
    { code: "RAL 7040", name: "Gris Fenêtre", hex: "#9DA3A6" },
    { code: "RAL 7042", name: "Gris Signalisation A", hex: "#8F9695" },
    { code: "RAL 7043", name: "Gris Signalisation B", hex: "#4E5451" },
    { code: "RAL 7044", name: "Gris Soie", hex: "#BDBDB2" },
    { code: "RAL 7045", name: "Gris Télécom 1", hex: "#91969A" },
    { code: "RAL 7046", name: "Gris Télécom 2", hex: "#82898E" },
    { code: "RAL 7047", name: "Gris Télécom 4", hex: "#CFD0CF" },
  ],
  blancsNoirs: [
    { code: "RAL 9001", name: "Blanc Crème", hex: "#FDF4E3" },
    { code: "RAL 9002", name: "Blanc Gris", hex: "#E7EBDA" },
    { code: "RAL 9003", name: "Blanc de Sécurité", hex: "#F4F8F4" },
    { code: "RAL 9010", name: "Blanc Pur", hex: "#F7F7F7" },
    { code: "RAL 9011", name: "Noir Graphite", hex: "#27292B" },
    { code: "RAL 9016", name: "Blanc Signalisation", hex: "#F7FBFF" },
    { code: "RAL 9017", name: "Noir Signalisation", hex: "#1E1E1E" },
    { code: "RAL 9018", name: "Blanc Papyrus", hex: "#CFD3CD" },
    { code: "RAL 9005", name: "Noir Profond", hex: "#0A0A0A" },
  ],
  rouges: [
    { code: "RAL 3000", name: "Rouge Feu", hex: "#AB2524" },
    { code: "RAL 3001", name: "Rouge de Sécurité", hex: "#A02128" },
    { code: "RAL 3002", name: "Rouge Carmin", hex: "#A1232B" },
    { code: "RAL 3003", name: "Rouge Rubis", hex: "#8D1D2C" },
    { code: "RAL 3004", name: "Rouge Bordeaux", hex: "#6B1C23" },
    { code: "RAL 3005", name: "Rouge Vin", hex: "#59191F" },
    { code: "RAL 3007", name: "Rouge Noir", hex: "#3E2022" },
    { code: "RAL 3009", name: "Rouge Oxyde", hex: "#6D342D" },
    { code: "RAL 3011", name: "Rouge Brun", hex: "#792423" },
    { code: "RAL 3012", name: "Rouge Beige", hex: "#C6846D" },
    { code: "RAL 3013", name: "Rouge Tomate", hex: "#9C322E" },
    { code: "RAL 3014", name: "Vieux Rose", hex: "#D47479" },
    { code: "RAL 3015", name: "Rose Clair", hex: "#E1A6AD" },
    { code: "RAL 3016", name: "Rouge Corail", hex: "#A63D38" },
    { code: "RAL 3017", name: "Rosé", hex: "#D3545F" },
    { code: "RAL 3018", name: "Rouge Fraise", hex: "#D14152" },
    { code: "RAL 3020", name: "Rouge Signalisation", hex: "#C1121C" },
    { code: "RAL 3022", name: "Rouge Saumon", hex: "#D56D56" },
    { code: "RAL 3027", name: "Rouge Framboise", hex: "#B42041" },
    { code: "RAL 3031", name: "Rouge Orient", hex: "#A63437" },
  ],
  bleus: [
    { code: "RAL 5000", name: "Bleu Violet", hex: "#384C70" },
    { code: "RAL 5001", name: "Bleu Vert", hex: "#1F4764" },
    { code: "RAL 5002", name: "Bleu Outremer", hex: "#2B2D78" },
    { code: "RAL 5003", name: "Bleu Saphir", hex: "#1E3A5F" },
    { code: "RAL 5004", name: "Bleu Noir", hex: "#1D1E2C" },
    { code: "RAL 5005", name: "Bleu de Sécurité", hex: "#154889" },
    { code: "RAL 5007", name: "Bleu Brillant", hex: "#41678D" },
    { code: "RAL 5008", name: "Bleu Gris", hex: "#313D48" },
    { code: "RAL 5009", name: "Bleu Azur", hex: "#2E5978" },
    { code: "RAL 5010", name: "Bleu Gentiane", hex: "#13447C" },
    { code: "RAL 5011", name: "Bleu Acier", hex: "#232C3F" },
    { code: "RAL 5012", name: "Bleu Clair", hex: "#3481B8" },
    { code: "RAL 5013", name: "Bleu Cobalt", hex: "#1E3468" },
    { code: "RAL 5014", name: "Bleu Pigeon", hex: "#637D96" },
    { code: "RAL 5015", name: "Bleu Ciel", hex: "#2874B2" },
    { code: "RAL 5017", name: "Bleu Signalisation", hex: "#0E518D" },
    { code: "RAL 5018", name: "Bleu Turquoise", hex: "#21888F" },
    { code: "RAL 5019", name: "Bleu Capri", hex: "#1A5784" },
    { code: "RAL 5020", name: "Bleu Océan", hex: "#0B4151" },
    { code: "RAL 5021", name: "Bleu d'Eau", hex: "#07737A" },
    { code: "RAL 5022", name: "Bleu Nocturne", hex: "#2F2A5A" },
    { code: "RAL 5023", name: "Bleu Distant", hex: "#4D6F99" },
    { code: "RAL 5024", name: "Bleu Pastel", hex: "#6A93B0" },
  ],
  verts: [
    { code: "RAL 6000", name: "Vert Patine", hex: "#3C7460" },
    { code: "RAL 6001", name: "Vert Émeraude", hex: "#366735" },
    { code: "RAL 6002", name: "Vert Feuillage", hex: "#325928" },
    { code: "RAL 6003", name: "Vert Olive", hex: "#50533C" },
    { code: "RAL 6004", name: "Vert Bleu", hex: "#024442" },
    { code: "RAL 6005", name: "Vert Mousse", hex: "#0E4243" },
    { code: "RAL 6006", name: "Olive Gris", hex: "#3C392E" },
    { code: "RAL 6007", name: "Vert Bouteille", hex: "#2C3222" },
    { code: "RAL 6008", name: "Vert Brun", hex: "#37342A" },
    { code: "RAL 6009", name: "Vert Sapin", hex: "#27352A" },
    { code: "RAL 6010", name: "Vert Herbe", hex: "#4D6F39" },
    { code: "RAL 6011", name: "Vert Réséda", hex: "#6C7C59" },
    { code: "RAL 6012", name: "Vert Noir", hex: "#303D3A" },
    { code: "RAL 6013", name: "Vert Jonc", hex: "#7C765A" },
    { code: "RAL 6014", name: "Olive Jaune", hex: "#474135" },
    { code: "RAL 6015", name: "Olive Noir", hex: "#3D3D36" },
    { code: "RAL 6016", name: "Vert Turquoise", hex: "#026A52" },
    { code: "RAL 6017", name: "Vert Mai", hex: "#468641" },
    { code: "RAL 6018", name: "Vert Jaune", hex: "#48A43F" },
    { code: "RAL 6019", name: "Vert Blanc", hex: "#B7D9B1" },
    { code: "RAL 6020", name: "Vert Oxyde Chromique", hex: "#354733" },
    { code: "RAL 6021", name: "Vert Pâle", hex: "#86A47C" },
    { code: "RAL 6022", name: "Olive Terne", hex: "#3E3C32" },
    { code: "RAL 6024", name: "Vert Signalisation", hex: "#008754" },
    { code: "RAL 6025", name: "Vert Fougère", hex: "#4D6F39" },
    { code: "RAL 6026", name: "Vert Opale", hex: "#005F4E" },
    { code: "RAL 6027", name: "Vert Clair", hex: "#7EBAB5" },
    { code: "RAL 6028", name: "Vert Pin", hex: "#315442" },
    { code: "RAL 6029", name: "Vert Menthe", hex: "#006F3D" },
    { code: "RAL 6032", name: "Vert de Sécurité", hex: "#237F52" },
    { code: "RAL 6033", name: "Turquoise Menthe", hex: "#46877F" },
    { code: "RAL 6034", name: "Turquoise Pastel", hex: "#7AACAC" },
  ],
  jaunes: [
    { code: "RAL 1000", name: "Beige Vert", hex: "#BEBD7F" },
    { code: "RAL 1001", name: "Beige", hex: "#C2B078" },
    { code: "RAL 1002", name: "Jaune Sable", hex: "#C6A664" },
    { code: "RAL 1003", name: "Jaune de Sécurité", hex: "#E5BE01" },
    { code: "RAL 1004", name: "Jaune Or", hex: "#CDA434" },
    { code: "RAL 1005", name: "Jaune Miel", hex: "#A98307" },
    { code: "RAL 1006", name: "Jaune Maïs", hex: "#E4A010" },
    { code: "RAL 1007", name: "Jaune Narcisse", hex: "#DC9D00" },
    { code: "RAL 1011", name: "Beige Brun", hex: "#8A6642" },
    { code: "RAL 1012", name: "Jaune Citron", hex: "#C7B446" },
    { code: "RAL 1013", name: "Blanc Perle", hex: "#EAE6CA" },
    { code: "RAL 1014", name: "Ivoire", hex: "#E1CC4F" },
    { code: "RAL 1015", name: "Ivoire Clair", hex: "#E6D2B5" },
    { code: "RAL 1016", name: "Jaune Soufre", hex: "#EDFF21" },
    { code: "RAL 1017", name: "Jaune Safran", hex: "#F5D033" },
    { code: "RAL 1018", name: "Jaune Zinc", hex: "#F8F32B" },
    { code: "RAL 1019", name: "Beige Gris", hex: "#9E9764" },
    { code: "RAL 1020", name: "Jaune Olive", hex: "#999950" },
    { code: "RAL 1021", name: "Jaune Colza", hex: "#F3DA0B" },
    { code: "RAL 1023", name: "Jaune Signalisation", hex: "#FAD201" },
    { code: "RAL 1024", name: "Jaune Ocre", hex: "#AEA04B" },
    { code: "RAL 1026", name: "Jaune Brillant", hex: "#FFFF00" },
    { code: "RAL 1027", name: "Jaune Curry", hex: "#9D9101" },
    { code: "RAL 1028", name: "Jaune Melon", hex: "#F4A900" },
    { code: "RAL 1032", name: "Jaune Genêt", hex: "#D6AE01" },
    { code: "RAL 1033", name: "Jaune Dahlia", hex: "#F3A505" },
    { code: "RAL 1034", name: "Jaune Pastel", hex: "#EFA94A" },
    { code: "RAL 1035", name: "Beige Nacré", hex: "#6A5D4D" },
    { code: "RAL 1036", name: "Or Nacré", hex: "#705335" },
    { code: "RAL 1037", name: "Jaune Soleil", hex: "#F09200" },
  ],
  marrons: [
    { code: "RAL 8001", name: "Brun Terre de Sienne", hex: "#955F20" },
    { code: "RAL 8002", name: "Brun de Sécurité", hex: "#6C4F3D" },
    { code: "RAL 8003", name: "Brun Argile", hex: "#734222" },
    { code: "RAL 8004", name: "Brun Cuivré", hex: "#8E402A" },
    { code: "RAL 8007", name: "Brun Fauve", hex: "#59351F" },
    { code: "RAL 8008", name: "Brun Olive", hex: "#6F4A2F" },
    { code: "RAL 8011", name: "Brun Noisette", hex: "#5B3A29" },
    { code: "RAL 8012", name: "Brun Rouge", hex: "#592321" },
    { code: "RAL 8014", name: "Brun Sépia", hex: "#49392D" },
    { code: "RAL 8015", name: "Brun Marron", hex: "#4E3B31" },
    { code: "RAL 8016", name: "Brun Acajou", hex: "#4C2F27" },
    { code: "RAL 8017", name: "Brun Chocolat", hex: "#45322E" },
    { code: "RAL 8019", name: "Brun Gris", hex: "#3D3635" },
    { code: "RAL 8022", name: "Brun Noir", hex: "#1A1718" },
    { code: "RAL 8023", name: "Brun Orangé", hex: "#A65E2E" },
    { code: "RAL 8024", name: "Brun Beige", hex: "#79553D" },
    { code: "RAL 8025", name: "Brun Pâle", hex: "#755C48" },
    { code: "RAL 8028", name: "Brun Terre", hex: "#4E3B31" },
  ],
  oranges: [
    { code: "RAL 2000", name: "Orange Jaune", hex: "#DD7907" },
    { code: "RAL 2001", name: "Orange Rouge", hex: "#BE4E20" },
    { code: "RAL 2002", name: "Orange Sang", hex: "#C63927" },
    { code: "RAL 2003", name: "Orange Pastel", hex: "#FA842B" },
    { code: "RAL 2004", name: "Orange Pur", hex: "#E75B12" },
    { code: "RAL 2005", name: "Orange Brillant", hex: "#FF2300" },
    { code: "RAL 2007", name: "Orange Clair Brillant", hex: "#FFA421" },
    { code: "RAL 2008", name: "Orange Rouge Clair", hex: "#F3752C" },
    { code: "RAL 2009", name: "Orange Signalisation", hex: "#E15501" },
    { code: "RAL 2010", name: "Orange de Sécurité", hex: "#D4652F" },
    { code: "RAL 2011", name: "Orange Profond", hex: "#EC7C25" },
    { code: "RAL 2012", name: "Orange Saumon", hex: "#DB6A50" },
  ],
};

const categories = [
  { id: "populaires", name: "Les + populaires", icon: Star },
  { id: "gris", name: "Gris", color: "#7F7F7F" },
  { id: "blancsNoirs", name: "Blancs & Noirs", color: "#1A1A1A" },
  { id: "bleus", name: "Bleus", color: "#1E3A5F" },
  { id: "verts", name: "Verts", color: "#0E4243" },
  { id: "rouges", name: "Rouges", color: "#A02128" },
  { id: "jaunes", name: "Jaunes & Beiges", color: "#E5BE01" },
  { id: "oranges", name: "Oranges", color: "#E75B12" },
  { id: "marrons", name: "Marrons", color: "#5B3A29" },
];

export default function CouleursRALPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/services/thermolaquage" className="hover:text-white transition-colors">
                Thermolaquage
              </Link>
              <span>/</span>
              <span className="text-cyan-glow">Couleurs RAL</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-cyan-glow/20 border border-cyan-glow/30 rounded-full px-4 py-2 mb-6">
              <Palette className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">
                Nuancier complet
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Couleurs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-400">
                RAL Thermolaquage
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Découvrez notre nuancier complet avec plus de <strong className="text-cyan-glow">200 teintes RAL</strong> disponibles
              pour vos projets de thermolaquage. Mat, satiné, brillant ou texturé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Demander un échantillon
                </Button>
              </Link>
              <a href="tel:+33123456789">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  01 23 45 67 89
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-cyan-glow/10 border-y border-cyan-glow/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
              <span className="text-navy-dark">Toutes finitions disponibles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
              <span className="text-navy-dark">Échantillons sur demande</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
              <span className="text-navy-dark">Couleurs sur mesure possibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Colors by Category */}
      {categories.map((category) => {
        const colors = ralColors[category.id as keyof typeof ralColors];
        if (!colors || colors.length === 0) return null;

        return (
          <section key={category.id} className="py-16 border-b border-gray-100 last:border-0">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-3 mb-8">
                {category.icon ? (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-yellow-500/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-yellow-600" />
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-xl shadow-inner"
                    style={{ backgroundColor: category.color }}
                  />
                )}
                <div>
                  <h2 className="text-2xl font-bold text-navy-dark">{category.name}</h2>
                  <p className="text-gray-500 text-sm">{colors.length} teintes</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {colors.map((color) => (
                  <div
                    key={color.code}
                    className="group cursor-pointer"
                    title={`${color.code} - ${color.name}`}
                  >
                    <div
                      className="aspect-square rounded-xl shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all relative overflow-hidden"
                      style={{ backgroundColor: color.hex }}
                    >
                      {/* Popular badge */}
                      {"popular" in color && color.popular && (
                        <div className="absolute top-1 right-1">
                          <Sparkles className="w-4 h-4 text-yellow-400 drop-shadow-lg" />
                        </div>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-2">
                        <span className="text-white text-xs font-bold">{color.code}</span>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs font-medium text-navy-dark truncate">{color.code}</p>
                      <p className="text-xs text-gray-500 truncate">{color.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Finishes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy-dark mb-4">
              Types de Finitions
            </h2>
            <p className="text-gray-600">
              Chaque couleur RAL est disponible en plusieurs finitions pour s'adapter
              parfaitement à votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Mat", desc: "Aspect velouté sans reflets", popular: true },
              { name: "Satiné", desc: "Légère brillance discrète", popular: true },
              { name: "Brillant", desc: "Surface lisse et réfléchissante", popular: false },
              { name: "Texturé", desc: "Aspect granulé anti-traces", popular: false },
            ].map((finish, index) => (
              <Card key={index} variant="elevated" className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-dark mb-2">{finish.name}</h3>
                  <p className="text-gray-500 text-sm">{finish.desc}</p>
                  {finish.popular && (
                    <span className="inline-block mt-3 text-xs bg-cyan-glow/20 text-cyan-700 px-2 py-1 rounded-full">
                      Populaire
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'Aide pour Choisir ?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Notre équipe vous conseille sur la couleur idéale pour votre projet.
              Échantillons disponibles sur demande.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Demander conseil
                </Button>
              </Link>
              <Link href="/services/thermolaquage">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  En savoir plus sur le thermolaquage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







