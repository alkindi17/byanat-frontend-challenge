import MainTabs from "@/components/main/main-tabs";
import Map from "@/components/main/map/map";
import Stays from "@/components/main/stays/stays";
import Widgets from "@/components/main/widgets/widgets";

export default function Home() {
  return (
    <>
      <main className="h-full">
        <div className="h-full px-4 pb-24 pt-5 xl:hidden">
          <MainTabs />
        </div>
        <div className="mx-auto flex h-full max-w-screen-2xl flex-row max-xl:hidden max-md:pt-3">
          <div className="h-full basis-2/5">
            <Stays />
          </div>
          <div className="h-full basis-2/5">
            <Map />
          </div>
          <div className="h-full basis-1/5">
            <Widgets />
          </div>
        </div>
      </main>
    </>
  );
}
