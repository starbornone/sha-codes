import type { ComponentProps } from 'react';
import imageData from '@/data/projectImages.generated.json';

type ScreenshotData = { width: number; height: number; srcSet: string };
const screenshots: Record<string, ScreenshotData> = imageData;

type Props = Omit<ComponentProps<'img'>, 'src' | 'alt' | 'width' | 'height' | 'sizes'> & {
  src: string;
  alt: string;
  sizes: string;
};

export default function ProjectScreenshot({
  src, alt, sizes, loading = 'lazy', ...props
}: Props) {
  const image = screenshots[src];
  if (!image) throw new Error(`Missing generated screenshot metadata for ${src}`);

  return (
    <picture className="contents">
      <source type="image/webp" srcSet={image.srcSet} sizes={sizes} />
      <img
        {...props}
        src={src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
