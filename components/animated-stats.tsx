'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 secondes
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues(stats.map((stat) => {
        const targetValue = stat.value;
        const currentValue = Math.floor(targetValue * progress);
        return currentValue;
      }));

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedValues(stats.map(stat => stat.value));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <CardContent className="p-4 text-center">
            <div className="flex justify-center mb-2">
              <div className="p-2 bg-sky-400/30 rounded-full">
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-1">
              {animatedValues[index].toLocaleString()}
              {stat.suffix}
            </div>
            <div className="text-sm text-white/80">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 