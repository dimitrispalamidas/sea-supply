import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust the import path according to your project structure

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: {
            item: true, // Include the related Item model
          },
        },
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const cartItems = await req.json();

    const order = await prisma.order.create({
      data: {
        userId: "507f1f77bcf86cd799439011", // Replace with the actual user ID or fetch from the authenticated session
        items: {
          create: cartItems.map((item: any) => ({
            quantity: item.quantity,
            item: {
              connect: { id: item.id }, // Connects the OrderItem to an existing Item by its ID
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
