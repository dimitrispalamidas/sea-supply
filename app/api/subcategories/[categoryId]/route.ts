import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const subcategories = await prisma.subCategory.findMany({
      where: { categoryId: params.categoryId },
      include: {
        subsubcategories: {
          include: {
            items: true,
          },
        },
      },
    });
    return NextResponse.json(subcategories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch subcategories" },
      { status: 500 }
    );
  }
}
