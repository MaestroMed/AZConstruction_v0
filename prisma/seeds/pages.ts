import { PrismaClient } from "@prisma/client";

export const cmsPages = [
  {
    slug: "conditions-livraison",
    title: "Conditions de Livraison",
    content: `
<h2>Livraison sur toute la France</h2>
<p>AZ Construction livre l'ensemble de ses produits sur tout le territoire français métropolitain.</p>

<h3>Délais de livraison</h3>
<p>Les délais de livraison varient en fonction du type de produit commandé :</p>
<ul>
  <li><strong>Produits standards</strong> : 2 à 3 semaines</li>
  <li><strong>Produits sur mesure simples</strong> : 3 à 4 semaines</li>
  <li><strong>Ouvrages complexes</strong> : 4 à 6 semaines</li>
  <li><strong>Escaliers et structures</strong> : 6 à 8 semaines</li>
</ul>

<h3>Modes de livraison</h3>
<p>Selon la taille et le poids de votre commande, nous proposons :</p>
<ul>
  <li><strong>Livraison standard</strong> : dépôt en pied d'immeuble ou en bordure de chantier</li>
  <li><strong>Livraison avec déchargement</strong> : utilisation d'un hayon élévateur</li>
  <li><strong>Livraison avec grue</strong> : pour les pièces de grande dimension</li>
</ul>

<h3>Tarification</h3>
<p>Les frais de livraison sont calculés en fonction de la distance et du volume. Un devis détaillé vous sera communiqué avant validation de votre commande.</p>

<h3>Zones de livraison gratuite</h3>
<p>La livraison est offerte pour toute commande supérieure à 2000€ HT en Île-de-France.</p>
    `.trim(),
    published: true,
    metaTitle: "Conditions de Livraison | AZ Construction",
    metaDescription: "Découvrez nos conditions de livraison pour vos ouvrages métalliques sur mesure. Livraison sur toute la France.",
  },
  {
    slug: "garanties",
    title: "Nos Garanties",
    content: `
<h2>Garanties AZ Construction</h2>
<p>Tous nos produits bénéficient de garanties complètes pour votre tranquillité d'esprit.</p>

<h3>Garantie fabrication</h3>
<p>Nos ouvrages métalliques sont garantis <strong>10 ans</strong> contre tout défaut de fabrication.</p>

<h3>Garantie thermolaquage</h3>
<p>Notre traitement de surface thermolaqué est garanti <strong>10 ans</strong> :
<ul>
  <li>Résistance aux UV</li>
  <li>Tenue des couleurs</li>
  <li>Résistance à la corrosion</li>
</ul>
</p>

<h3>Garantie motorisation</h3>
<p>Les systèmes de motorisation sont garantis <strong>2 ans</strong> pièces et main d'œuvre.</p>

<h3>Conditions de garantie</h3>
<p>La garantie s'applique sous réserve :</p>
<ul>
  <li>D'une installation conforme aux règles de l'art</li>
  <li>D'un entretien régulier selon nos recommandations</li>
  <li>D'une utilisation normale du produit</li>
</ul>
    `.trim(),
    published: true,
    metaTitle: "Nos Garanties | AZ Construction",
    metaDescription: "Découvrez les garanties AZ Construction : 10 ans sur la fabrication et le thermolaquage.",
  },
  {
    slug: "notre-atelier",
    title: "Notre Atelier",
    content: `
<h2>Un atelier moderne de 2000m²</h2>
<p>Notre atelier situé en Île-de-France est équipé des dernières technologies pour la fabrication de vos ouvrages métalliques.</p>

<h3>Nos équipements</h3>
<ul>
  <li><strong>Découpe laser fibre</strong> : précision au dixième de millimètre</li>
  <li><strong>Pliage CNC</strong> : jusqu'à 4 mètres de longueur</li>
  <li><strong>Soudure TIG/MIG</strong> : finitions parfaites</li>
  <li><strong>Cabine de peinture</strong> : thermolaquage professionnel</li>
  <li><strong>Cintreuse hydraulique</strong> : formes courbes et arrondis</li>
</ul>

<h3>Notre équipe</h3>
<p>15 professionnels qualifiés travaillent quotidiennement dans notre atelier :</p>
<ul>
  <li>Chaudronniers-soudeurs qualifiés</li>
  <li>Métalliers-serruriers</li>
  <li>Techniciens bureau d'études</li>
  <li>Spécialistes thermolaquage</li>
</ul>

<h3>Visite de l'atelier</h3>
<p>Nous vous accueillons sur rendez-vous pour vous faire découvrir notre savoir-faire. Contactez-nous pour organiser une visite.</p>
    `.trim(),
    published: true,
    metaTitle: "Notre Atelier | AZ Construction",
    metaDescription: "Découvrez l'atelier AZ Construction : 2000m² équipés des dernières technologies pour la métallerie.",
  },
  {
    slug: "engagements-qualite",
    title: "Nos Engagements Qualité",
    content: `
<h2>La qualité au cœur de notre métier</h2>
<p>Chez AZ Construction, la qualité n'est pas une option, c'est notre signature.</p>

<h3>Matières premières</h3>
<ul>
  <li>Acier européen certifié EN 10025</li>
  <li>Aluminium première qualité</li>
  <li>Inox 304 et 316 selon les applications</li>
  <li>Verres certifiés avec marquage CE</li>
</ul>

<h3>Processus de fabrication</h3>
<p>Chaque ouvrage passe par un contrôle qualité rigoureux :</p>
<ol>
  <li>Vérification des plans et côtes</li>
  <li>Contrôle des soudures</li>
  <li>Test d'adhérence du thermolaquage</li>
  <li>Inspection finale avant expédition</li>
</ol>

<h3>Certifications</h3>
<ul>
  <li>Qualification professionnelle QUALIBAT</li>
  <li>Assurance décennale</li>
  <li>Garantie de parfait achèvement</li>
</ul>
    `.trim(),
    published: true,
    metaTitle: "Engagements Qualité | AZ Construction",
    metaDescription: "Découvrez les engagements qualité AZ Construction : matières premières certifiées et contrôles rigoureux.",
  },
  {
    slug: "eco-responsabilite",
    title: "Notre Démarche Éco-responsable",
    content: `
<h2>Métallerie et développement durable</h2>
<p>AZ Construction s'engage pour une production plus respectueuse de l'environnement.</p>

<h3>Recyclage des matériaux</h3>
<p>L'acier et l'aluminium sont recyclables à 100% et à l'infini. Nous recyclons :</p>
<ul>
  <li>100% de nos chutes de production</li>
  <li>Les emballages et cartons</li>
  <li>Les produits en fin de vie</li>
</ul>

<h3>Réduction de l'empreinte carbone</h3>
<ul>
  <li>Approvisionnement local privilégié</li>
  <li>Optimisation des transports</li>
  <li>Éclairage LED dans l'atelier</li>
  <li>Équipements basse consommation</li>
</ul>

<h3>Peintures et traitements</h3>
<p>Nos peintures poudre sont sans solvant et nos processus de traitement respectent les normes environnementales les plus strictes.</p>
    `.trim(),
    published: true,
    metaTitle: "Démarche Éco-responsable | AZ Construction",
    metaDescription: "Découvrez la démarche éco-responsable AZ Construction : recyclage, réduction de l'empreinte carbone.",
  },
];

export async function seedPages(prisma: PrismaClient) {
  console.log("📄 Seeding CMS pages...");

  for (const page of cmsPages) {
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: page,
      create: page,
    });
  }

  console.log(`  ✅ ${cmsPages.length} CMS pages created`);
}



