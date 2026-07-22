import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-display text-3xl font-bold text-indigo-deep">
        Artwork not found
      </h1>
      <p className="mt-3 text-ink-muted">
        This piece may have moved, or the link might be incomplete.
      </p>
      <div className="mt-6 flex gap-3">
        <ButtonLink href="/marketplace">Back to marketplace</ButtonLink>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center rounded-2xl px-4 text-sm font-semibold text-indigo-deep underline-offset-4 hover:underline"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
