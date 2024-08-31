import { headers } from "next/headers";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/225220cd-d3a1-49ba-ade0-cf50a8f436e3-pwowja.jpeg",
  "https://utfs.io/f/ec9b0f00-e96f-4db7-a587-d3c0eac10c1b-s25q8j.jpeg",
  "https://utfs.io/f/3b709a51-5321-4e33-93f0-d4298741fae4-cotfka.jpeg",
  "https://utfs.io/f/d77db1c5-ad02-4e4c-8c0a-5c8b1758ed04-1a5pjl.jpeg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
export default async function HomePage() {
  headers();
  const posts = await db.post.findMany();

  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>))}
        {
          [...mockImages,...mockImages,...mockImages].map((image, index)=>
          (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
