import { v2 as cloudinary } from 'cloudinary';

// Configuration Cloudinary avec l'URL complète
cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

export default cloudinary;

export async function uploadImage(file: File): Promise<string> {
  try {
    // Convertir le fichier en base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64String}`;

    // Upload vers Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'blog-psychoz',
      resource_type: 'auto',
      transformation: [
        { width: 1200, height: 630, crop: 'fill', quality: 'auto' },
        { fetch_format: 'auto' }
      ]
    });

    return result.secure_url;
  } catch (error) {
    console.error('Erreur lors de l\'upload vers Cloudinary:', error);
    throw new Error('Erreur lors de l\'upload de l\'image');
  }
}

export async function deleteImage(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image:', error);
    throw new Error('Erreur lors de la suppression de l\'image');
  }
}

// Fonction pour extraire les URLs des images du contenu Markdown
export function extractImageUrlsFromMarkdown(content: string): string[] {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const urls: string[] = [];
  let match;

  while ((match = imageRegex.exec(content)) !== null) {
    urls.push(match[2]);
  }

  return urls;
}

// Fonction pour extraire le public ID Cloudinary d'une URL
export function extractCloudinaryPublicId(url: string): string | null {
  try {
    // Format: https://res.cloudinary.com/cloud_name/image/upload/v1234567890/folder/filename.jpg
    const urlObj = new URL(url);
    
    // Vérifier si c'est une URL Cloudinary
    if (!urlObj.hostname.includes('cloudinary.com')) {
      return null;
    }

    // Extraire le chemin après /upload/
    const uploadIndex = urlObj.pathname.indexOf('/upload/');
    if (uploadIndex === -1) {
      return null;
    }

    // Prendre tout ce qui suit /upload/ (sans la version et le format)
    let publicId = urlObj.pathname.substring(uploadIndex + 8);
    
    // Supprimer la version si présente (v1234567890/)
    publicId = publicId.replace(/^v\d+\//, '');
    
    // Supprimer l'extension du fichier
    publicId = publicId.replace(/\.[^/.]+$/, '');
    
    return publicId;
  } catch (error) {
    console.error('Erreur lors de l\'extraction du public ID:', error);
    return null;
  }
}

// Fonction pour supprimer toutes les images d'un article
export async function deleteArticleImages(imageUrl: string | null, content: string): Promise<void> {
  try {
    const imagesToDelete: string[] = [];

    // Ajouter l'image de couverture si elle existe
    if (imageUrl) {
      imagesToDelete.push(imageUrl);
    }

    // Extraire les URLs des images du contenu Markdown
    const contentImageUrls = extractImageUrlsFromMarkdown(content);
    imagesToDelete.push(...contentImageUrls);

    // Supprimer chaque image Cloudinary
    for (const imageUrl of imagesToDelete) {
      const publicId = extractCloudinaryPublicId(imageUrl);
      if (publicId) {
        try {
          await deleteImage(publicId);
          console.log(`Image Cloudinary supprimée: ${publicId}`);
        } catch (error) {
          console.error(`Erreur lors de la suppression de l'image ${publicId}:`, error);
          // Continuer avec les autres images même si une échoue
        }
      }
    }
  } catch (error) {
    console.error('Erreur lors de la suppression des images de l\'article:', error);
    throw new Error('Erreur lors de la suppression des images de l\'article');
  }
} 