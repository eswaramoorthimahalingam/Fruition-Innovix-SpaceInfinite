'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import siteLogo from "@/app/logo.jpeg";
import { NAV_ITEMS, SOCIALS, type NavItem } from "@/constants";

const isExternalLink = (link: string) =>
  link.startsWith("http") ||
  link.startsWith("mailto:") ||
  link.startsWith("tel:");

const DesktopNavItem = ({
  item,
  depth = 0,
  alignRight = false,
}: {
  item: NavItem;
  depth?: number;
  alignRight?: boolean;
}) => {
  const hasChildren = Boolean(item.children?.length);
  const dropdownPosition =
    depth === 0
      ? `${alignRight ? "right-0" : "left-0"} top-full mt-3`
      : "left-[calc(100%-0.25rem)] top-[-0.5rem]";
  const linkClass =
    depth === 0
      ? "flex items-center gap-1 whitespace-nowrap px-2 py-2 text-[13px] transition hover:text-[rgb(245,179,45)]"
      : "flex items-center justify-between gap-4 rounded-md px-3 py-2 text-sm transition hover:bg-[rgba(245,179,45,0.16)] hover:text-white";

  return (
    <li className="nav-menu-item relative list-none">
      <Link
        href={item.link}
        target={isExternalLink(item.link) ? "_blank" : undefined}
        rel={isExternalLink(item.link) ? "noreferrer noopener" : undefined}
        className={linkClass}
      >
        <span>{item.title}</span>
        {hasChildren && (
          <span className="text-[10px] text-[#f6b32d]" aria-hidden="true">
            {depth === 0 ? "v" : ">"}
          </span>
        )}
      </Link>

      {hasChildren && (
        <ul
          className={`nav-menu-dropdown fi-panel-strong absolute ${dropdownPosition} z-50 min-w-[260px] rounded-lg border p-2 text-gray-200 backdrop-blur-md ${
            depth > 0 ? "nav-menu-dropdown--nested" : ""
          }`}
        >
          {item.children?.map((child) => (
            <DesktopNavItem key={child.title} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileNavTree = ({
  item,
  depth = 0,
  onNavigate,
}: {
  item: NavItem;
  depth?: number;
  onNavigate: () => void;
}) => {
  return (
    <li className="w-full list-none">
      <Link
        href={item.link}
        className="block rounded-md px-3 py-2 text-gray-200 transition hover:bg-[rgba(245,179,45,0.14)] hover:text-white"
        style={{ paddingLeft: `${12 + depth * 16}px` }}
        onClick={onNavigate}
      >
        {item.title}
      </Link>
      {item.children && (
        <ul className="ml-3 border-l border-[rgba(245,179,45,0.38)]">
          {item.children.map((child) => (
            <MobileNavTree
              key={child.title}
              item={child}
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 fi-panel z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="/"
          aria-label="Fruition Innovix home"
          className="flex items-center"
        >
          <Image
            src={siteLogo}
            alt="Fruition Innovix"
            width={54}
            height={54}
            draggable={false}
            priority
            className="h-12 w-12 cursor-pointer rounded-full bg-white object-contain"
          />
          <div className="hidden md:flex ml-[10px] font-bold text-gray-200">
            Fruition Innovix
          </div>
        </Link>

        {/* Web Navbar */}
        <nav className="hidden xl:flex h-full flex-1 items-center justify-center px-5">
          <ul className="flex h-auto max-w-[900px] items-center justify-center gap-1 rounded-full border border-[rgba(245,179,45,0.34)] bg-[rgba(3,0,20,0.48)] px-4 py-1 text-gray-200">
            {NAV_ITEMS.map((item, index) => (
              <DesktopNavItem
                key={item.title}
                item={item}
                alignRight={index > NAV_ITEMS.length - 3}
              />
            ))}
          </ul>
        </nav>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="xl:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 max-h-[calc(100vh-65px)] w-full overflow-y-auto fi-panel-strong p-5 text-gray-300 xl:hidden">
          {/* Links */}
          <ul className="mx-auto flex w-full max-w-xl flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <MobileNavTree
                key={item.title}
                item={item}
                onNavigate={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
