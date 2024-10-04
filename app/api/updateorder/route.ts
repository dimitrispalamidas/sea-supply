import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Make sure the prisma import path is correct

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Get the request body
    const { orderId, status } = body;

    if (!orderId || !status) {
      return NextResponse.json(
        { error: "Missing orderId or status" },
        { status: 400 }
      );
    }

    // Update the order in the database using Prisma
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });

    return NextResponse.json({
      message: "Order updated successfully",
      updatedOrder,
    });
  } catch (error) {
    console.error("Failed to update order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}
