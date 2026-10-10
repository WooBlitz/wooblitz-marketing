import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Rendered height of the mark in pixels. The wordmark scales around it. */
  height?: number;
  /** Render the mark on its own, without the "Wooblitz" wordmark. */
  markOnly?: boolean;
};

/**
 * Wooblitz lockup: the brand mark (public/wooblitz-mark.png, cropped from the
 * supplied 800x800 source) plus the wordmark.
 *
 * The mark ships as solid black, so it is inverted in dark mode rather than
 * shipping a second asset that can drift out of sync.
 */
const Logo = ({ className = "", height = 28, markOnly = false }: LogoProps) => {
  // intrinsic mark is 746x396
  const width = Math.round(height * (746 / 396));

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/wooblitz-mark.png"
        alt=""
        width={width}
        height={height}
        className="w-auto shrink-0 dark:invert"
      />
      {!markOnly && (
        <span className="text-[1.05rem] leading-none font-semibold tracking-[-0.02em] text-foreground">
          Wooblitz
        </span>
      )}
    </span>
  );
};

export default Logo;