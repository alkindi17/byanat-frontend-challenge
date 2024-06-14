export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-screen-2xl flex-row gap-7 px-4 pb-6 pt-2 max-md:pt-3">
      <div className="h-full basis-2/5 bg-gray-100">Stays</div>
      <div className="h-full basis-2/5 bg-gray-100">Map</div>
      <div className="h-full basis-1/5 bg-gray-100">Widgets</div>
    </main>
  );
}
