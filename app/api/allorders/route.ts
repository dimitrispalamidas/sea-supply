import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export async function GET() {
  try {
    // Get the authenticated user
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch all orders
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: {
            item: true,
          },
        },
      },
    });

    // Return the fetched orders as JSON
    return NextResponse.json(orders);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching orders:", error.message);
      return NextResponse.json(
        { error: `Failed to fetch orders: ${error.message}` },
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
