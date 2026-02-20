import { NextRequest, NextResponse } from "next/server";

// Mock quotes data
const mockQuotes = [
  {
    id: "1",
    numero: "DEV-2024-0089",
    userId: "6",
    user: {
      id: "6",
      nom: "Bernard",
      prenom: "Antoine",
      email: "a.bernard@email.com",
      type: "client_particulier",
    },
    dateDemande: new Date("2024-12-12T10:00:00"),
    dateExpiration: new Date("2024-12-27T23:59:59"),
    status: "en_attente",
    totalHT: 4666.67,
    tva: 933.33,
    totalTTC: 5600,
    commentaireClient: "Devis pour une porte d'entrée design avec vitrage",
    items: [
      {
        id: "1",
        productId: "1",
        product: { nom: "Porte Jansen Premium" },
        quantity: 1,
        prixUnitaireHT: 2850,
        prixTotalHT: 2850,
      },
      {
        id: "2",
        productId: "6",
        product: { nom: "Motorisation Premium" },
        quantity: 1,
        prixUnitaireHT: 1816.67,
        prixTotalHT: 1816.67,
      },
    ],
  },
  {
    id: "2",
    numero: "DEV-2024-0088",
    userId: "7",
    user: {
      id: "7",
      nom: "Bâtiment Plus",
      prenom: null,
      raisonSociale: "EURL Bâtiment Plus",
      email: "contact@batiment-plus.fr",
      type: "client_pro",
    },
    dateDemande: new Date("2024-12-10T14:30:00"),
    dateExpiration: new Date("2024-12-25T23:59:59"),
    status: "envoye",
    totalHT: 20291.67,
    tva: 4058.33,
    totalTTC: 24350,
    remiseSpeciale: 10,
    commentaireClient: "Projet immeuble - 12 garde-corps + 2 escaliers",
    commentaireAdmin: "Remise accordée pour volume important",
    items: [
      {
        id: "3",
        productId: "2",
        product: { nom: "Garde-corps Verre & Acier" },
        quantity: 12,
        prixUnitaireHT: 450,
        prixTotalHT: 5400,
      },
      {
        id: "4",
        productId: "3",
        product: { nom: "Escalier Droit Standard" },
        quantity: 2,
        prixUnitaireHT: 6500,
        prixTotalHT: 13000,
      },
    ],
  },
  {
    id: "3",
    numero: "DEV-2024-0087",
    userId: "8",
    user: {
      id: "8",
      nom: "Martin",
      prenom: "Sophie",
      email: "sophie.martin@email.com",
      type: "client_particulier",
    },
    dateDemande: new Date("2024-12-08T09:15:00"),
    dateExpiration: new Date("2024-12-23T23:59:59"),
    status: "en_attente",
    totalHT: 2408.33,
    tva: 481.67,
    totalTTC: 2890,
    commentaireClient: "Fenêtres atelier pour loft",
    items: [
      {
        id: "5",
        productId: "4",
        product: { nom: "Fenêtre Atelier Jansen" },
        quantity: 8,
        prixUnitaireHT: 280,
        prixTotalHT: 2240,
      },
      {
        id: "6",
        productId: "7",
        product: { nom: "Portillon assorti" },
        quantity: 1,
        prixUnitaireHT: 168.33,
        prixTotalHT: 168.33,
      },
    ],
  },
  {
    id: "4",
    numero: "DEV-2024-0086",
    userId: "9",
    user: {
      id: "9",
      nom: "Rénovation Express",
      prenom: null,
      raisonSociale: "SARL Rénovation Express",
      email: "devis@renovation-express.fr",
      type: "client_pro",
    },
    dateDemande: new Date("2024-12-05T11:00:00"),
    dateExpiration: new Date("2024-12-20T23:59:59"),
    status: "accepte",
    totalHT: 15833.33,
    tva: 3166.67,
    totalTTC: 19000,
    remiseSpeciale: 5,
    commentaireClient: "Grilles de ventilation pour local technique",
    items: [
      {
        id: "7",
        productId: "5",
        product: { nom: "Grille Acoustique Premium" },
        quantity: 1,
        prixUnitaireHT: 12500,
        prixTotalHT: 12500,
      },
      {
        id: "8",
        productId: "8",
        product: { nom: "Extension latérale" },
        quantity: 1,
        prixUnitaireHT: 2500,
        prixTotalHT: 2500,
      },
    ],
  },
  {
    id: "5",
    numero: "DEV-2024-0085",
    userId: "10",
    user: {
      id: "10",
      nom: "Durand",
      prenom: "Pierre",
      email: "p.durand@email.com",
      type: "client_particulier",
    },
    dateDemande: new Date("2024-12-01T16:45:00"),
    dateExpiration: new Date("2024-12-16T23:59:59"),
    status: "expire",
    totalHT: 3750,
    tva: 750,
    totalTTC: 4500,
    commentaireClient: "Escalier extérieur avec rampe",
    items: [
      {
        id: "9",
        productId: "3",
        product: { nom: "Escalier Extérieur" },
        quantity: 1,
        prixUnitaireHT: 3750,
        prixTotalHT: 3750,
      },
    ],
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    let quotes = [...mockQuotes];

    // Filter by status
    const status = searchParams.get("status");
    if (status) {
      quotes = quotes.filter((q) => q.status === status);
    }

    // Search
    const search = searchParams.get("search");
    if (search) {
      const searchLower = search.toLowerCase();
      quotes = quotes.filter(
        (q) =>
          q.numero.toLowerCase().includes(searchLower) ||
          q.user.nom?.toLowerCase().includes(searchLower) ||
          q.user.raisonSociale?.toLowerCase().includes(searchLower) ||
          q.user.email.toLowerCase().includes(searchLower)
      );
    }

    // Sort by date desc
    quotes.sort((a, b) => new Date(b.dateDemande).getTime() - new Date(a.dateDemande).getTime());

    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const start = (page - 1) * pageSize;
    const paginatedQuotes = quotes.slice(start, start + pageSize);

    return NextResponse.json({
      success: true,
      data: paginatedQuotes,
      total: quotes.length,
      page,
      pageSize,
      totalPages: Math.ceil(quotes.length / pageSize),
    });
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Generate quote number
    const numero = `DEV-2024-${String(mockQuotes.length + 90).padStart(4, "0")}`;

    const newQuote = {
      id: String(mockQuotes.length + 1),
      numero,
      dateDemande: new Date(),
      dateExpiration: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
      status: "en_attente",
      ...body,
    };

    return NextResponse.json({
      success: true,
      data: newQuote,
    });
  } catch (error) {
    console.error("Error creating quote:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create quote" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    const quote = mockQuotes.find((q) => q.id === id);
    if (!quote) {
      return NextResponse.json(
        { success: false, error: "Quote not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: { ...quote, status },
    });
  } catch (error) {
    console.error("Error updating quote:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update quote" },
      { status: 500 }
    );
  }
}


