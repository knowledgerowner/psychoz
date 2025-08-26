'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import Link from 'next/link';

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
      <Link href="/articles">
        <Button 
          size="lg" 
          className="bg-sky-400 text-white hover:bg-sky-500 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <BookOpen className="mr-2 h-5 w-5" />
          Explorer les Articles
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
      
      <Link href="/contact">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-sky-300 text-white hover:bg-sky-400/20 px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
        >
          <Mail className="mr-2 h-5 w-5" />
          S&apos;abonner
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
} 