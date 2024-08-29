import Link from "next/link";

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
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages,...mockImages,...mockImages].map((image)=>
          (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
