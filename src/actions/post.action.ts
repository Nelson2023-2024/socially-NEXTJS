"use server";

import prisma from "@/lib/prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, imageUrl: string) {
  try {
    //get the user id

    const userId = await getDbUserId();

    const post = await prisma.post.create({
      data: {
        content,
        image: imageUrl,
        authorId: userId,
      },
    });

    revalidatePath("/"); //immediatly fetch posts on the homePage once data is POST

    return { success: true, post };
  } catch (error) {
    console.error("Failed to create post", error);
    return { success: false, error: "Failed to create post" };
  }
}
