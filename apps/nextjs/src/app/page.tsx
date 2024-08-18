import { api, HydrateClient } from "~/trpc/server";

export const runtime = "nodejs";

export default function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  // void api.post.all.prefetch();

  return (
    <HydrateClient>
      <main className="container h-screen py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          Mi nueva pagina web!
        </div>
      </main>
    </HydrateClient>
  );
}
