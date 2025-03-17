"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/30 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Menu */}
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold">Menu</span>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <Link
              href="/past-issues"
              className="text-lg font-medium hover:text-gray-600 transition-colors"
              onClick={onClose}
            >
              Past Issues
            </Link>
            <Link
              href="/creator"
              className="text-lg font-medium hover:text-gray-600 transition-colors"
              onClick={onClose}
            >
              Are You A Creator?
            </Link>
          </div>

          <div className="mt-auto pt-8 flex flex-col space-y-4">
            <Button
              className="w-full rounded-full bg-black text-white hover:bg-gray-800"
              asChild
              onClick={onClose}
            >
              <Link href="/creator">Are You A Creator?</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
