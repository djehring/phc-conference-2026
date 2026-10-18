import Link from "next/link";
import { BRAND_NAME, MAIN_SITE_URL } from "@/lib/brand";

const NAV = [
  { href: "/#speakers", label: "Speakers" },
  { href: "/#family", label: "Family weekend" },
  { href: "/#dinner", label: "Dinner" },
  { href: "/#get-involved", label: "Get involved" },
  { href: "/2026/", label: "2026 archive" },
];

export default function SiteHeader() {
  return (
    <header className="border-b-4 border-phc-cyan bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phc-cyan"
        >
          <img
            src="/images/PHC_logo.svg"
            alt={`${BRAND_NAME}: PHC Conference home`}
            width={830}
            height={180}
            className="h-9 w-auto sm:h-11"
          />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-4 text-sm font-semibold text-phc-navy">
          <ul className="hidden items-center gap-5 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-phc-cyan transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={MAIN_SITE_URL}
            className="rounded-full border-2 border-phc-navy px-3 py-1.5 text-xs hover:bg-phc-navy hover:text-white transition-colors sm:px-4 sm:text-sm"
          >
            phcuk.org
          </a>
        </nav>
      </div>
      <nav aria-label="Main (mobile)" className="border-t border-off-white md:hidden">
        <ul className="mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-x-auto px-4 py-2 text-[0.8125rem] font-semibold text-phc-navy">
          {NAV.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link href={item.href} className="block px-1 py-1 hover:text-phc-cyan">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
