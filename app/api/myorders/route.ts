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

    // Fetch the orders for the logged-in user
    const orders = await prisma.order.findMany({
      where: { userId },
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

export async function POST(req: Request) {
  try {
    const { userId } = auth(); // Get the authenticated user’s ID

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cartItems = await req.json();

    const order = await prisma.order.create({
      data: {
        userId: userId, // Store the authenticated Clerk user’s ID
        items: {
          create: cartItems.map((item: any) => ({
            quantity: item.quantity,
            item: {
              connect: { id: item.id }, // Connect the OrderItem to an existing Item by its ID
            },
          })),
        },
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
