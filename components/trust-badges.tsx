'use client';

import { Shield, Award, Clock, Users } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    label: "Contenu Vérifié",
    description: "Par des experts en psychologie"
  },
  {
    icon: Award,
    label: "Qualité Premium",
    description: "Articles de référence"
  },
  {
    icon: Clock,
    label: "Mise à jour",
    description: "Contenu régulièrement actualisé"
  },
  {
    icon: Users,
    label: "Communauté",
    description: "Plus de 1000 lecteurs actifs"
  }
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8 grid grid-cols-2 md:grid-cols-4">
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="flex flex-col items-center text-white/90 hover:text-white transition-colors duration-300 group"
        >
          <div className="p-3 bg-sky-400/30 rounded-full mb-2 group-hover:bg-sky-400/50 transition-colors duration-300">
            <badge.icon className="h-6 w-6" />
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">{badge.label}</div>
            <div className="text-xs text-white/70">{badge.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 