#!/usr/bin/env node

/**
 * Script de test pour la logique des icônes de catégories
 * Usage: node scripts/test-category-icons.js
 */

function generateIconData(categoryName) {
  // Extraire les premières lettres de chaque mot
  const words = categoryName.split(' ').filter(word => word.length > 0);
  let letters = '';
  
  if (words.length >= 2) {
    // Prendre les 2 premières lettres des 2 premiers mots
    letters = words.slice(0, 2).map(word => word.charAt(0).toUpperCase()).join('');
  } else if (words.length === 1) {
    // Si un seul mot, prendre les 2 premières lettres
    letters = categoryName.slice(0, 2).toUpperCase();
  } else {
    letters = categoryName.slice(0, 2).toUpperCase();
  }
  
  // Générer une couleur basée sur le hash du nom
  const hash = categoryName.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500',
    'bg-red-500', 'bg-indigo-500', 'bg-pink-500', 'bg-teal-500',
    'bg-cyan-500', 'bg-amber-500', 'bg-emerald-500', 'bg-violet-500'
  ];
  
  const colorIndex = Math.abs(hash) % colors.length;
  const bgColor = colors[colorIndex];
  
  return { letters, bgColor, hash, colorIndex };
}

// Test avec différentes catégories
const testCategories = [
  'Biais Cognitif',
  'Psychologie Sociale',
  'Intelligence Émotionnelle',
  'PNL',
  'Manipulation Psychologique',
  'Résilience',
  'Stress et Anxiété',
  'Mémoire',
  'Développement Personnel',
  'Relations Interpersonnelles'
];

console.log('🧪 Test de la logique des icônes de catégories\n');

testCategories.forEach(category => {
  const { letters, bgColor, hash, colorIndex } = generateIconData(category);
  console.log(`📁 "${category}" → ${letters} (${bgColor}) [hash: ${hash}, color: ${colorIndex}]`);
});

console.log('\n✅ Test terminé !');
console.log('\n💡 Exemples de résultats :');
console.log('   - "Biais Cognitif" → BC (couleur unique)');
console.log('   - "Psychologie Sociale" → PS (couleur unique)');
console.log('   - "PNL" → PN (couleur unique)');
console.log('   - "Résilience" → RÉ (couleur unique)');

module.exports = { generateIconData }; 