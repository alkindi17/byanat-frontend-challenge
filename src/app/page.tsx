import Stays from "@/components/main/stays/stays";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-screen-2xl flex-row px-4 max-md:pt-3">
      <div className="h-full basis-2/5">
        <Stays />
      </div>
      <div className="h-full basis-2/5 bg-gray-100">Map</div>
      <div className="h-full basis-1/5 bg-gray-200">Widgets</div>
    </main>
  );
}
