import Dashboard from "@/components/dashboard/jobs";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[10px]">
      <Header completed="3" onHold="1" onRoad="10" />
      <Dashboard />
    </main>
  );
}
