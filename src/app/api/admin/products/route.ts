import { NextRequest, NextResponse } from "next/server";

// Mock products data
const mockProducts = [
  {
    id: "1",
    slug: "porte-jansen-design",
    nom: "Porte Jansen Design",
    description: "Porte d'entrée en profilés Jansen",
    familleId: "1",
    famille: { id: "1", nom: "Garde-corps", slug: "garde-corps" },
    prixBaseHT: 2850,
    poidsBase: 120,
    delaiFabrication: 21,
    actif: true,
    imageUrl: "/images/products/porte-jansen.jpg",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "2",
    slug: "garde-corps-verre",
    nom: "Garde-corps Verre & Inox",
    description: "Garde-corps en verre trempé avec fixations inox",
    familleId: "2",
    famille: { id: "2", nom: "Garde-corps", slug: "garde-corps" },
    prixBaseHT: 450,
    poidsBase: 25,
    delaiFabrication: 14,
    actif: true,
    imageUrl: "/images/products/garde-corps-verre.jpg",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-11-28"),
  },
  {
    id: "3",
    slug: "escalier-helicoidal",
    nom: "Escalier Hélicoïdal",
    description: "Escalier hélicoïdal en acier avec marches bois",
    familleId: "3",
    famille: { id: "3", nom: "Escaliers", slug: "escaliers" },
    prixBaseHT: 8500,
    poidsBase: 450,
    delaiFabrication: 35,
    actif: true,
    imageUrl: "/images/products/escalier-helicoidal.jpg",
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-11-15"),
  },
  {
    id: "4",
    slug: "fenetre-atelier",
    nom: "Fenêtre Atelier Jansen",
    description: "Fenêtre style atelier en profilés Jansen",
    familleId: "4",
    famille: { id: "4", nom: "Fenêtres", slug: "fenetres" },
    prixBaseHT: 280,
    poidsBase: 12,
    delaiFabrication: 10,
    actif: true,
    imageUrl: "/images/products/fenetre-atelier.jpg",
    createdAt: new Date("2024-04-20"),
    updatedAt: new Date("2024-12-05"),
  },
  {
    id: "5",
    slug: "grille-acoustique",
    nom: "Grille Acoustique Premium",
    description: "Grille de ventilation avec atténuation acoustique",
    familleId: "5",
    famille: { id: "5", nom: "Grilles de ventilation", slug: "grilles-ventilation" },
    prixBaseHT: 12500,
    poidsBase: 350,
    delaiFabrication: 28,
    actif: true,
    imageUrl: "/images/products/grille-acoustique.jpg",
    createdAt: new Date("2024-05-12"),
    updatedAt: new Date("2024-12-10"),
  },
];

const mockFamilies = [
  { id: "1", nom: "Garde-corps", slug: "garde-corps", ordre: 1, active: true },
  { id: "2", nom: "Garde-corps", slug: "garde-corps", ordre: 2, active: true },
  { id: "3", nom: "Escaliers", slug: "escaliers", ordre: 3, active: true },
  { id: "4", nom: "Fenêtres", slug: "fenetres", ordre: 4, active: true },
  { id: "5", nom: "Grilles de ventilation", slug: "grilles-ventilation", ordre: 5, active: true },
  { id: "6", nom: "Portails", slug: "portails", ordre: 6, active: true },
  { id: "7", nom: "Clôtures", slug: "clotures", ordre: 7, active: true },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type === "families") {
      return NextResponse.json({
        success: true,
        data: mockFamilies,
      });
    }

    // Filter by family if provided
    const familyId = searchParams.get("familyId");
    let products = mockProducts;
    if (familyId) {
      products = products.filter((p) => p.familleId === familyId);
    }

    // Search
    const search = searchParams.get("search");
    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter(
        (p) =>
          p.nom.toLowerCase().includes(searchLower) ||
          p.description?.toLowerCase().includes(searchLower)
      );
    }

    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const start = (page - 1) * pageSize;
    const paginatedProducts = products.slice(start, start + pageSize);

    return NextResponse.json({
      success: true,
      data: paginatedProducts,
      total: products.length,
      page,
      pageSize,
      totalPages: Math.ceil(products.length / pageSize),
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Create product with Prisma
    const newProduct = {
      id: String(mockProducts.length + 1),
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create product" },
      { status: 500 }
    );
  }
}


