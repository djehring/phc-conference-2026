"use client";

import { useEffect, useState } from "react";
import { TICKETS_ON_SALE_AT } from "@/lib/conference";

const SALE_TIME = new Date(TICKETS_ON_SALE_AT).getTime();
// setTimeout cannot wait longer than ~24.8 days
const MAX_TIMEOUT = 2_147_483_647;

/**
 * True once tickets are on sale, decided in the visitor's browser.
 *
 * The static HTML is always rendered in the "coming soon" state; the browser
 * flips it after hydration if the sale date has passed. If the page is open
 * at the moment tickets go on sale, it flips without a reload.
 */
export function useTicketsOnSale(): boolean {
  const [onSale, setOnSale] = useState(false);

  useEffect(() => {
    const remaining = SALE_TIME - Date.now();
    if (remaining <= 0) {
      setOnSale(true);
      return;
    }
    if (remaining > MAX_TIMEOUT) return;
    const timer = setTimeout(() => setOnSale(true), remaining);
    return () => clearTimeout(timer);
  }, []);

  return onSale;
}
