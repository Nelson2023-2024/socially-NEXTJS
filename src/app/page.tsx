import CreatePost from "@/components/posts/CreatePost";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const authUser = await currentUser()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {
          authUser ? (<CreatePost/>) : null
        }
       
      </div>
      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        Who to follow
      </div>
    </div>
  );
}
