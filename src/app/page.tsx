import { headers } from "next/headers";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();
  const images = await db.image.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...images,...images,...images].map((image, index)=>
          (
            <div key={image.id + "-" + index} className="flex flex-col w-48">
              <img src={image.url} alt="image" />
              <div>{image.name}</div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
