import type { CSSProperties } from 'react';

interface LogoProps {
  style?: CSSProperties;
  className?: string;
}

const SvgLogo = ({ style, className }: LogoProps) => (
  <img
    src="/hefes_icon.png"
    alt="Hefes"
    width={20}
    height={20}
    style={style}
    className={className}
  />
);
export default SvgLogo;
