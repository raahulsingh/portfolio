/**
 * ResponsiveImage — provides CSS-based responsive sizing + lazy loading.
 * 
 * Note: True srcset with WebP variants requires a build pipeline (e.g. sharp, 
 * imagemin-webp) to generate multiple resolutions at build time. CRA doesn't 
 * support this out of the box. This component implements the best practices 
 * that ARE possible within CRA:
 * - loading="lazy" for below-the-fold images
 * - Explicit width/height for CLS prevention  
 * - sizes attribute for responsive image selection
 * - decoding="async" for non-blocking decode
 * - CSS: max-width: 100%, height: auto, object-fit: cover, aspect-ratio
 */
const ResponsiveImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  aspectRatio,
  objectFit = 'cover',
  objectPosition = 'center',
  loading = 'lazy',
  onClick,
  sizes = '(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw',
}) => {
  const style = {
    maxWidth: '100%',
    height: 'auto',
    objectFit,
    objectPosition,
    display: 'block',
    ...(aspectRatio ? { aspectRatio } : {}),
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      sizes={sizes}
      style={style}
      onClick={onClick}
    />
  );
};

export default ResponsiveImage;
