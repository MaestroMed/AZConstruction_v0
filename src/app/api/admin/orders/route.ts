import { NextRequest, NextResponse } from "next/server";

// Mock orders data
const mockOrders = [
  {
    id: "1",
    numero: "ORD-2024-0156",
    userId: "1",
    user: {
      id: "1",
      nom: "Dupont",
      prenom: "Jean",
      email: "jean.dupont@email.com",
      type: "client_particulier",
    },
    dateCommande: new Date("2024-12-15T10:30:00"),
    statusCommande: "en_preparation",
    statusPaiement: "paye",
    totalHT: 2875,
    tva: 575,
    totalTTC: 3450,
    adresseLivraison: {
      rue: "15 Rue des Lilas",
      codePostal: "75011",
      ville: "Paris",
      pays: "France",
    },
    items: [
      {
        id: "1",
        productId: "1",
        product: { nom: "Porte Jansen Premium" },
        quantity: 1,
        prixUnitaireHT: 2875,
        prixTotalHT: 2875,
      },
    ],
  },
  {
    id: "2",
    numero: "ORD-2024-0155",
    userId: "2",
    user: {
      id: "2",
      nom: "Martin",
      prenom: null,
      raisonSociale: "SARL Martin Construction",
      email: "contact@martin-construction.fr",
      type: "client_pro",
    },
    dateCommande: new Date("2024-12-15T07:15:00"),
    statusCommande: "payee",
    statusPaiement: "paye",
    totalHT: 7433.33,
    tva: 1486.67,
    totalTTC: 8920,
    adresseLivraison: {
      rue: "Zone Industrielle Nord",
      codePostal: "59000",
      ville: "Lille",
      pays: "France",
    },
    items: [
      {
        id: "2",
        productId: "2",
        product: { nom: "Garde-corps Verre & Inox" },
        quantity: 5,
        prixUnitaireHT: 1486.67,
        prixTotalHT: 7433.33,
      },
    ],
  },
  {
    id: "3",
    numero: "ORD-2024-0154",
    userId: "3",
    user: {
      id: "3",
      nom: "Lambert",
      prenom: "Marie",
      email: "marie.lambert@email.com",
      type: "client_particulier",
    },
    dateCommande: new Date("2024-12-14T14:20:00"),
    statusCommande: "en_fabrication",
    statusPaiement: "paye",
    totalHT: 10416.67,
    tva: 2083.33,
    totalTTC: 12500,
    adresseLivraison: {
      rue: "8 Avenue des Champs",
      codePostal: "69001",
      ville: "Lyon",
      pays: "France",
    },
    items: [
      {
        id: "3",
        productId: "3",
        product: { nom: "Escalier Hélicoïdal" },
        quantity: 1,
        prixUnitaireHT: 10416.67,
        prixTotalHT: 10416.67,
      },
    ],
  },
  {
    id: "4",
    numero: "ORD-2024-0153",
    userId: "4",
    user: {
      id: "4",
      nom: "Habitat Pro",
      prenom: null,
      raisonSociale: "SAS Habitat Pro",
      email: "pro@habitat-pro.fr",
      type: "client_pro",
    },
    dateCommande: new Date("2024-12-14T09:45:00"),
    statusCommande: "expediee",
    statusPaiement: "paye",
    totalHT: 3983.33,
    tva: 796.67,
    totalTTC: 4780,
    adresseLivraison: {
      rue: "Zone Artisanale Sud",
      codePostal: "33000",
      ville: "Bordeaux",
      pays: "France",
    },
    items: [
      {
        id: "4",
        productId: "4",
        product: { nom: "Fenêtre Atelier Jansen" },
        quantity: 15,
        prixUnitaireHT: 265.56,
        prixTotalHT: 3983.33,
        configSnapshot: { longueur: "15m" },
      },
    ],
  },
  {
    id: "5",
    numero: "ORD-2024-0152",
    userId: "5",
    user: {
      id: "5",
      nom: "Petit",
      prenom: "François",
      email: "f.petit@email.com",
      type: "client_particulier",
    },
    dateCommande: new Date("2024-12-13T16:00:00"),
    statusCommande: "livree",
    statusPaiement: "paye",
    totalHT: 1625,
    tva: 325,
    totalTTC: 1950,
    adresseLivraison: {
      rue: "22 Rue du Commerce",
      codePostal: "44000",
      ville: "Nantes",
      pays: "France",
    },
    items: [
      {
        id: "5",
        productId: "1",
        product: { nom: "Porte Technique" },
        quantity: 1,
        prixUnitaireHT: 1625,
        prixTotalHT: 1625,
      },
    ],
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    let orders = [...mockOrders];

    // Filter by status
    const status = searchParams.get("status");
    if (status) {
      orders = orders.filter((o) => o.statusCommande === status);
    }

    // Search
    const search = searchParams.get("search");
    if (search) {
      const searchLower = search.toLowerCase();
      orders = orders.filter(
        (o) =>
          o.numero.toLowerCase().includes(searchLower) ||
          o.user.nom?.toLowerCase().includes(searchLower) ||
          o.user.raisonSociale?.toLowerCase().includes(searchLower) ||
          o.user.email.toLowerCase().includes(searchLower)
      );
    }

    // Sort by date desc
    orders.sort((a, b) => new Date(b.dateCommande).getTime() - new Date(a.dateCommande).getTime());

    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const start = (page - 1) * pageSize;
    const paginatedOrders = orders.slice(start, start + pageSize);

    return NextResponse.json({
      success: true,
      data: paginatedOrders,
      total: orders.length,
      page,
      pageSize,
      totalPages: Math.ceil(orders.length / pageSize),
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, statusCommande } = body;

    // TODO: Update order with Prisma
    const order = mockOrders.find((o) => o.id === id);
    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: { ...order, statusCommande },
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update order" },
      { status: 500 }
    );
  }
}


