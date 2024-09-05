import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";

// Function to sync user with database
export async function createOrSyncUser() {
  const user = await currentUser(); // Get Clerk's user data

  if (!user) {
    throw new Error("User not authenticated");
  }

  // Check if the user already exists in MongoDB (using Prisma)
  const existingUser = await prisma.user.findUnique({
    where: { id: user.id }, // Clerk's userId
  });

  // If user doesn't exist, create a new one in MongoDB
  if (!existingUser) {
    await prisma.user.create({
      data: {
        id: user.id, // Use Clerk's userId as the MongoDB User ID
        email: user.emailAddresses,
        role: "SEAFARER",
      },
    });
  }
}
