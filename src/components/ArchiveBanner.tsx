import Link from "next/link";
import { Archive, ArrowRight } from "lucide-react";

/** Shown at the top of every page under /2026/. */
export default function ArchiveBanner() {
  return (
    <div className="bg-warm-amber/15 border-b border-warm-amber/40 text-phc-navy-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-3 text-center text-sm sm:flex-row sm:gap-3">
        <span className="inline-flex items-center gap-2 font-heading font-bold">
          <Archive className="h-4 w-4" aria-hidden="true" />
          2026 archive
        </span>
        <span>
          PHC Conference 2026 took place on 16 and 17 May 2026 at The Light, Euston, London.
        </span>
        <Link href="/" className="inline-flex items-center gap-1 font-semibold underline underline-offset-2">
          See the 2027 conference <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
