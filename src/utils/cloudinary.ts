// Cloudinary serves the original upload unless the URL asks for a transform.
// f_auto/q_auto pick a modern format and quality; c_limit caps the width
// without upscaling smaller images.
export function cloudinaryImage(url: string, width: number): string {
  return url.replace('/upload/', `/upload/f_auto,q_auto,c_limit,w_${width}/`);
}
