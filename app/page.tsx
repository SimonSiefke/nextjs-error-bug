import Image from "next/image";
import { SomeComponent } from "./some-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SomeComponent />
    </main>
  );
}
