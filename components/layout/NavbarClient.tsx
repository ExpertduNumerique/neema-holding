"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "./Navbar";
import { POLE_ICONS, POLE_ICON_COLORS } from "./PoleIcons";

interface NavbarClientProps {
  directLinks: NavLink[];
  plusLinks: NavLink[];
  mobileLinks: NavLink[];
}

const ChevronDown = ({ open }: { open?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
    className={cn("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export function NavbarClient({ directLinks, plusLinks, mobileLinks }: NavbarClientProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [plusOpen, setPlusOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const plusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isFirstPathname = useRef(true);
  useEffect(() => {
    if (isFirstPathname.current) {
      isFirstPathname.current = false;
      return;
    }
    setMobileOpen(false);
    setPlusOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setPlusOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (plusRef.current && !plusRef.current.contains(e.target as Node)) setPlusOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const plusActive = plusLinks.some((l) => isActive(l.href));

  return (
    <>
      <style>{`
        #main-header {
          background-color: #0B2A66 !important;
          ${scrolled
            ? "box-shadow: 0 4px 24px rgba(0,0,0,0.3); border-bottom-color: rgba(255,255,255,0.12);"
            : "box-shadow: none;"
          }
          transition: box-shadow 0.25s ease, border-bottom-color 0.25s ease;
        }
      `}</style>

      {/* ── Liens directs desktop (xl+) ── */}
      <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
        {directLinks.map(({ href, label }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 min-h-[44px] flex items-center",
                active ? "text-white" : "hover:bg-white/8"
              )}
              style={{ color: active ? "#fff" : "rgba(255,255,255,.72)" }}
              aria-current={active ? "page" : undefined}
            >
              {label}
              {active && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                  style={{ backgroundColor: "#22B863" }}
                  aria-hidden="true"
                />
              )}
            </Link>
          );
        })}

        {/* ── "Plus" (Trading, Store) ── */}
        {plusLinks.length > 0 && (
          <div ref={plusRef} className="relative">
            <button
              onClick={() => setPlusOpen((v) => !v)}
              aria-expanded={plusOpen}
              aria-haspopup="menu"
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px]",
                plusOpen || plusActive ? "text-white bg-white/10" : "hover:bg-white/8"
              )}
              style={{ color: plusOpen || plusActive ? "#fff" : "rgba(255,255,255,.72)" }}
            >
              Plus
              <ChevronDown open={plusOpen} />
            </button>

            <div
              className={cn(
                "absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-56 rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 origin-top z-50",
                plusOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              )}
              style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,.07)" }}
              role="menu"
            >
              <div className="p-2">
                {plusLinks.map(({ href, label, iconId }) => {
                  const colors = POLE_ICON_COLORS[iconId];
                  return (
                    <Link
                      key={href}
                      href={href}
                      role="menuitem"
                      className="flex items-center gap-3 p-2.5 rounded-xl transition-colors"
                      style={{ color: "#0B2A66" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F0F5FF"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
                    >
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: colors?.bg, color: colors?.color }}
                        aria-hidden="true"
                      >
                        {POLE_ICONS[iconId]}
                      </span>
                      <span className="text-sm font-semibold">{label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── CTA + hamburger ── */}
      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="hidden xl:flex px-5 py-2 text-sm font-bold rounded-full transition-all active:scale-95 min-h-[44px] items-center"
          style={{ backgroundColor: "#12A150", color: "#fff" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#0C7A38"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#12A150"; }}
        >
          Nous contacter
        </Link>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          className="xl:hidden p-2.5 rounded-lg transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
          style={{ color: "rgba(255,255,255,.8)", background: "rgba(255,255,255,.06)", border: "1.5px solid rgba(255,255,255,.15)" }}
        >
          <span className="block w-6 h-6 relative">
            <span className={cn("absolute inset-0 flex items-center justify-center transition-all duration-200", mobileOpen ? "opacity-100" : "opacity-0 rotate-90")}>
              <CloseIcon />
            </span>
            <span className={cn("absolute inset-0 flex items-center justify-center transition-all duration-200", mobileOpen ? "opacity-0 -rotate-90" : "opacity-100")}>
              <MenuIcon />
            </span>
          </span>
        </button>
      </div>

      {/* ══════════════════════════════════════════════
          MENU MOBILE / TABLETTE (< xl)
         ══════════════════════════════════════════════ */}
      <div
        className={cn(
          "fixed inset-0 z-30 xl:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
        style={{ backgroundColor: "rgba(0,0,0,.55)", backdropFilter: "blur(6px)", top: "64px" }}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-16 right-0 bottom-0 w-full sm:w-[380px] z-40 xl:hidden flex flex-col transition-transform duration-300 ease-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ backgroundColor: "#081D4D", borderLeft: "1px solid rgba(255,255,255,.07)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label="Navigation mobile">
          <div className="space-y-0.5">
            {mobileLinks.map(({ href, label, iconId }) => {
              const active = isActive(href);
              const colors = POLE_ICON_COLORS[iconId];
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all active:scale-[.98]"
                  style={{
                    color: active ? "#fff" : "rgba(255,255,255,.75)",
                    backgroundColor: active ? "rgba(34,184,99,.15)" : undefined,
                    fontWeight: active ? 700 : 500,
                    fontSize: "0.95rem",
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: colors?.bg, color: colors?.color }}
                  >
                    {POLE_ICONS[iconId]}
                  </span>
                  {label}
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#22B863" }} aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="shrink-0 px-4 pb-6 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3.5 rounded-2xl text-sm font-bold text-center text-white transition-all active:scale-95 flex items-center justify-center"
            style={{ backgroundColor: "#12A150" }}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </>
  );
}
