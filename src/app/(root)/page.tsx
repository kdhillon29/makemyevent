import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto w-[80%] bg-purple-400 text-center p-2 align-middle">
      <h1>Welcome to make my event </h1>
      <Button variant="secondary" className="px-4">
        Learn More
      </Button>
    </main>
  );
}
