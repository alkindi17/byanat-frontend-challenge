import Map from "@/components/main/map/map";
import Stays from "@/components/main/stays/stays";
import Widgets from "@/components/main/widgets/widgets";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-screen-2xl flex-row max-md:pt-3">
      <div className="h-full basis-2/5">
        <Stays />
      </div>
      <div className="h-full basis-2/5">
        <Map />
      </div>
      <div className="h-full basis-1/5">
        <Widgets />
      </div>
    </main>
  );
}
