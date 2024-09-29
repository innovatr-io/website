import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const IconWrapper: React.FC<IconProps> = ({ children, className, ...props }) => (
  <div className={`w-12 h-12 flex items-center justify-center ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-cosmos-accent"
      {...props}
    >
      {children}
    </svg>
  </div>
);

export const LightningIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </IconWrapper>
);

export const ArtIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </IconWrapper>
);

export const MusicIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </IconWrapper>
);

export const RealEstateIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </IconWrapper>
);


export const ChainIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" />
  </IconWrapper>
);

export const CreatorIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3-4c.83 0 1.5-.67 1.5-1.5S10.83 4 10 4s-1.5.67-1.5 1.5S9.17 7 10 7zm5 0c.83 0 1.5-.67 1.5-1.5S15.83 4 15 4s-1.5.67-1.5 1.5S14.17 7 15 7zm3 4c.83 0 1.5-.67 1.5-1.5S18.83 8 18 8s-1.5.67-1.5 1.5S17.17 11 18 11z" />
  </IconWrapper>
);

export const InvestmentIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z" />
  </IconWrapper>
);

export const KeyIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </IconWrapper>
);

export const FeeIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
  </IconWrapper>
);

export const SecurityIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
  </IconWrapper>
);

export const AccessIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" />
  </IconWrapper>
);

export const RocketIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12 2.5s-4 3.5-4 7.5c0 2.486 2.014 4.5 4.5 4.5s4.5-2.014 4.5-4.5c0-4-5-7.5-5-7.5zm0 10c-1.381 0-2.5-1.119-2.5-2.5 0-1.38 1.119-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5zm-6.5 7.5c0 1.104.896 2 2 2h9c1.104 0 2-.896 2-2v-2h-13v2z" />
  </IconWrapper>
);

export const LightbulbIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
  </IconWrapper>
);

export const ShieldIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
  </IconWrapper>
);
