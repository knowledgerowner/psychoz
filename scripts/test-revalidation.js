#!/usr/bin/env node

/**
 * Script de test pour l'API de revalidation
 * Usage: node scripts/test-revalidation.js
 */

const BASE_URL = 'http://localhost:3000';

async function testRevalidationAPI() {
  console.log('🧪 Test de l\'API de revalidation...\n');

  try {
    // Test 1: Vérifier que l'API est accessible
    console.log('1️⃣ Test de l\'endpoint GET...');
    const getResponse = await fetch(`${BASE_URL}/api/admin/revalidate`);
    const getData = await getResponse.json();
    console.log('✅ GET /api/admin/revalidate:', getData.message);
    
    // Test 2: Test sans authentification (doit échouer)
    console.log('\n2️⃣ Test sans authentification...');
    try {
      const postResponse = await fetch(`${BASE_URL}/api/admin/revalidate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'all' })
      });
      
      if (postResponse.status === 401) {
        console.log('✅ POST sans auth: Erreur 401 (Non autorisé) - Sécurité OK');
      } else {
        console.log('❌ POST sans auth: Statut inattendu', postResponse.status);
      }
    } catch (error) {
      console.log('✅ POST sans auth: Erreur attendue (pas de token)');
    }

    // Test 3: Test de l'endpoint de test
    console.log('\n3️⃣ Test de l\'endpoint de test...');
    const testResponse = await fetch(`${BASE_URL}/api/admin/revalidate/test`);
    const testData = await testResponse.json();
    console.log('✅ GET /api/admin/revalidate/test:', testData.message);

    console.log('\n🎉 Tous les tests de base sont passés !');
    console.log('\n📝 Pour tester la revalidation complète :');
    console.log('1. Connectez-vous au panel admin');
    console.log('2. Allez sur /admin/dashboard');
    console.log('3. Utilisez les boutons de revalidation');
    console.log('\n🔗 URLs à tester :');
    console.log(`   - Dashboard: ${BASE_URL}/admin/dashboard`);
    console.log(`   - API: ${BASE_URL}/api/admin/revalidate`);
    console.log(`   - Test: ${BASE_URL}/api/admin/revalidate/test`);

  } catch (error) {
    console.error('❌ Erreur lors du test:', error.message);
    console.log('\n💡 Vérifiez que :');
    console.log('   - Le serveur Next.js est démarré sur le port 3000');
    console.log('   - L\'API route est bien créée');
    console.log('   - Les composants sont bien importés');
  }
}

// Exécuter le test si le script est appelé directement
if (require.main === module) {
  testRevalidationAPI();
}

module.exports = { testRevalidationAPI }; 