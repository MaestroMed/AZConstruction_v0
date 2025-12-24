import { NextRequest, NextResponse } from "next/server";

// Mock users/clients data
const mockUsers = [
  {
    id: "1",
    type: "client_particulier",
    email: "jean.dupont@email.com",
    nom: "Dupont",
    prenom: "Jean",
    telephone: "06 12 34 56 78",
    validated: true,
    active: true,
    createdAt: new Date("2024-01-15"),
    lastLogin: new Date("2024-12-15"),
    ordersCount: 3,
    totalSpent: 8450,
  },
  {
    id: "2",
    type: "client_pro",
    email: "contact@martin-construction.fr",
    nom: "Martin",
    raisonSociale: "SARL Martin Construction",
    siret: "123 456 789 00012",
    tvaIntra: "FR12345678901",
    telephone: "03 20 12 34 56",
    remisePercent: 15,
    validated: true,
    active: true,
    createdAt: new Date("2023-06-20"),
    lastLogin: new Date("2024-12-15"),
    ordersCount: 24,
    totalSpent: 156780,
  },
  {
    id: "3",
    type: "client_particulier",
    email: "marie.lambert@email.com",
    nom: "Lambert",
    prenom: "Marie",
    telephone: "06 98 76 54 32",
    validated: true,
    active: true,
    createdAt: new Date("2024-03-10"),
    lastLogin: new Date("2024-12-14"),
    ordersCount: 2,
    totalSpent: 15600,
  },
  {
    id: "4",
    type: "client_pro",
    email: "pro@habitat-pro.fr",
    nom: "Habitat Pro",
    raisonSociale: "SAS Habitat Pro",
    siret: "987 654 321 00023",
    tvaIntra: "FR98765432101",
    telephone: "05 56 78 90 12",
    remisePercent: 20,
    validated: true,
    active: true,
    createdAt: new Date("2023-02-15"),
    lastLogin: new Date("2024-12-14"),
    ordersCount: 45,
    totalSpent: 287500,
  },
  {
    id: "5",
    type: "client_particulier",
    email: "f.petit@email.com",
    nom: "Petit",
    prenom: "François",
    telephone: "06 45 67 89 01",
    validated: true,
    active: true,
    createdAt: new Date("2024-06-05"),
    lastLogin: new Date("2024-12-13"),
    ordersCount: 1,
    totalSpent: 1950,
  },
  {
    id: "6",
    type: "client_pro",
    email: "contact@batiment-plus.fr",
    nom: "Bâtiment Plus",
    raisonSociale: "EURL Bâtiment Plus",
    siret: "456 789 123 00034",
    telephone: "04 91 23 45 67",
    remisePercent: 10,
    validated: false,
    active: true,
    createdAt: new Date("2024-12-10"),
    lastLogin: null,
    ordersCount: 0,
    totalSpent: 0,
  },
  {
    id: "7",
    type: "client_particulier",
    email: "sophie.martin@email.com",
    nom: "Martin",
    prenom: "Sophie",
    telephone: "06 23 45 67 89",
    validated: true,
    active: true,
    createdAt: new Date("2024-08-20"),
    lastLogin: new Date("2024-12-08"),
    ordersCount: 0,
    totalSpent: 0,
  },
  {
    id: "8",
    type: "client_pro",
    email: "devis@renovation-express.fr",
    nom: "Rénovation Express",
    raisonSociale: "SARL Rénovation Express",
    siret: "789 123 456 00045",
    telephone: "02 40 56 78 90",
    remisePercent: 12,
    validated: true,
    active: true,
    createdAt: new Date("2023-09-01"),
    lastLogin: new Date("2024-12-05"),
    ordersCount: 18,
    totalSpent: 95400,
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    let users = [...mockUsers];

    // Filter by type
    const type = searchParams.get("type");
    if (type === "particulier") {
      users = users.filter((u) => u.type === "client_particulier");
    } else if (type === "pro") {
      users = users.filter((u) => u.type === "client_pro");
    }

    // Filter by validation status
    const status = searchParams.get("status");
    if (status === "pending") {
      users = users.filter((u) => !u.validated);
    }

    // Search
    const search = searchParams.get("search");
    if (search) {
      const searchLower = search.toLowerCase();
      users = users.filter(
        (u) =>
          u.nom?.toLowerCase().includes(searchLower) ||
          u.prenom?.toLowerCase().includes(searchLower) ||
          u.raisonSociale?.toLowerCase().includes(searchLower) ||
          u.email.toLowerCase().includes(searchLower) ||
          u.siret?.includes(search)
      );
    }

    // Sort by creation date desc
    users.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const start = (page - 1) * pageSize;
    const paginatedUsers = users.slice(start, start + pageSize);

    return NextResponse.json({
      success: true,
      data: paginatedUsers,
      total: users.length,
      page,
      pageSize,
      totalPages: Math.ceil(users.length / pageSize),
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, validated, remisePercent, active } = body;

    const user = mockUsers.find((u) => u.id === id);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        ...user,
        validated: validated ?? user.validated,
        remisePercent: remisePercent ?? user.remisePercent,
        active: active ?? user.active,
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update user" },
      { status: 500 }
    );
  }
}









