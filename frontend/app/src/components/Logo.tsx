import React from "react";
import styled from "styled-components";

type LogoProps = {
  image?: string;     // Logo image src (optional)
  brand?: string;     // Brand name text (optional)
  width?: number;
  height?: number;
  alt?: string;
  style?: React.CSSProperties;
};

const LogoWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const LogoImage = styled.img<{ width: number; height: number }>`
  display: inline-block;
  margin-right: 8px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const BrandText = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: #232f3e;
`;

const Logo: React.FC<LogoProps> = ({
  image,
  brand,
  width = 32,
  height = 32,
  alt,
  style,
}) => {
  if (!image && !brand) {
    throw new Error("Logo component requires at least one of 'image' or 'brand' props.");
  }
  return (
    <LogoWrapper style={style}>
      {image && (
        <LogoImage src={image} alt={alt || brand || "Logo"} width={width} height={height} />
      )}
      {brand && <BrandText>{brand}</BrandText>}
    </LogoWrapper>
  );
};

export default Logo;