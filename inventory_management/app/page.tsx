import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[10px] p-[10px]">
      <Header completed="3" onHold="1" onRoad="10" />
    </main>
  );
}
