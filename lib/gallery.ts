// Gallery utility functions for managing mixed media (images + videos)

export interface GalleryItem {
  src: string;            // /public path to file
  type: 'image' | 'video'; // media type
  alt?: string;           // optional alt text
}

/**
 * Helper function to create a gallery item
 */
export function createGalleryItem(src: string, type: 'image' | 'video', alt?: string): GalleryItem {
  return { src, type, alt }
}

/**
 * Helper function to create multiple image gallery items
 */
export function createImageGalleryItems(paths: string[], altPrefix?: string): GalleryItem[] {
  return paths.map((path, index) => ({
    src: path,
    type: 'image' as const,
    alt: altPrefix ? `${altPrefix} - ${index + 1}` : undefined
  }))
}

/**
 * Helper function to create multiple video gallery items
 */
export function createVideoGalleryItems(paths: string[], altPrefix?: string): GalleryItem[] {
  return paths.map((path, index) => ({
    src: path,
    type: 'video' as const,
    alt: altPrefix ? `${altPrefix} - ${index + 1}` : undefined
  }))
}

/**
 * Helper function to combine images and videos into a single gallery
 */
export function combineGalleryItems(
  images: string[] = [], 
  videos: string[] = [], 
  altPrefix?: string
): GalleryItem[] {
  const imageItems = createImageGalleryItems(images, altPrefix)
  const videoItems = createVideoGalleryItems(videos, altPrefix)
  return [...imageItems, ...videoItems]
}

/**
 * Example usage for SynerMuscle project:
 * 
 * const synermuscleGallery = combineGalleryItems(
 *   [
 *     "/work/synermuscle-3d-identity/shot-01.jpeg",
 *     "/work/synermuscle-3d-identity/shot-02.jpeg",
 *     "/work/synermuscle-3d-identity/shot-03.jpeg",
 *     "/work/synermuscle-3d-identity/shot-04.jpeg"
 *   ],
 *   [
 *     "/work/synermuscle-3d-identity/hero.mp4",
 *     "/work/synermuscle-3d-identity/behind-scenes.mp4"
 *   ],
 *   "SynerMuscle 3D Animation"
 * )
 */
