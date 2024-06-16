import Map from "@/components/main/map/map";
import Stays from "@/components/main/stays/stays";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-screen-2xl flex-row max-md:pt-3">
      <div className="h-full basis-2/5">
        <Stays />
      </div>
      <div className="h-full basis-2/5">
        <Map />
      </div>
      <div className="h-full basis-1/5 bg-white px-4 pt-9">Widgets</div>
    </main>
  );
}
