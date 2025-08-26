"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-sky-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="Psychoz" width={64} height={64} className="rounded-lg bg-transparent overflow-hidden"/>
            <span className="font-semibold tracking-tight text-white">Psychoz</span>
          </div>
          <p className="text-sm text-white mt-4 max-w-prose">
            Le blog psychologie moderne: actualités, analyses et tutoriels sur l&apos;esprit humain.
          </p>
          <p className="text-xs text-blue-100 mt-4">© {new Date().getFullYear()} Psychoz. Tous droits réservés.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Liens</h4>
          <ul className="mt-4 space-y-2 text-sm text-blue-100">
            <li><Link href="/articles" className="hover:text-white transition-colors">Articles</Link></li>
            <li><Link href="/categories" className="hover:text-white transition-colors">Catégories</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Newsletter</h4>
          <p className="text-sm text-blue-100 mt-2">Recevez les nouveaux articles chaque semaine.</p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input type="email" placeholder="Votre email" required className="flex-1 rounded-full bg-white" />
            <Button type="submit" className="bg-white text-sky-600 hover:bg-gray-100 rounded-full">S&apos;abonner</Button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-7xl h-[1px] bg-blue-300"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-blue-100">
        <Link href="https://www.oxelya.com" className="hover:text-white transition-colors">Made By Oxelya</Link>
      </div>
    </footer>
  );
} 