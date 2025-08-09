export const theme = {
  colors: {
    primary: "#fe696a",         // Main accent (buttons, highlights)
    secondary: "#4b566b",       // Secondary text, icons
    background: "#fff",         // Main background
    backgroundAlt: "#f6f9fc",   // Light section backgrounds
    text: "#373f50",            // Main text
    textLight: "#7d879c",       // Muted/secondary text
    accent: "#fe696a",          // Accent (same as primary)
    success: "#42d697",         // Success (green)
    warning: "#fea569",         // Warning (orange)
    info: "#25bcff",            // Info (blue)
    dark: "#232f3e",            // Header/footer dark
    border: "#e3e9ef",          // Card/divider border
    muted: "#f3f5f9",           // Card backgrounds, subtle UI
  },
  font: {
    body: "'Inter', sans-serif",
    heading: "'Rubik', 'Montserrat', sans-serif",
  },
  fontSizes: {
    display1: "5rem",   // 80px
    display2: "4.5rem", // 72px
    display3: "4rem",   // 64px
    display4: "3.5rem", // 56px
    display5: "3rem",   // 48px
    display6: "2.625rem", // 42px
    h1: "2.5rem",       // 40px
    h2: "2rem",         // 32px
    h3: "1.75rem",      // 28px
    h4: "1.5rem",       // 24px
    h5: "1.25rem",      // 20px
    xl: "1.25rem",      // 20px (Extra Large)
    lg: "1.125rem",     // 18px (Large)
    h6: "1rem",         // 16px
    nav: "1rem",        // 16px (Navigation Link Regular)
    md: "1rem",         // 16px (Regular)
    sm: "0.875rem",     // 14px (Small)
    navSm: "0.875rem",  // 14px (Navigation Link Small)
    xs: "0.75rem",      // 12px (Extra Small)
    navXs: "0.75rem",   // 12px (Navigation Link Extra Small)
  },
  lineHeights: {
    display1: "96px",
    display2: "96px",
    display3: "78px",
    display4: "68px",
    display5: "62px",
    display6: "54px",
    h1: "48px",
    h2: "42px",
    h3: "36px",
    h4: "32px",
    h5: "28px",
    xl: "30px",
    lg: "27px",
    h6: "24px",
    nav: "24px",
    md: "24px",
    sm: "22px",
    navSm: "20px",
    xs: "18px",
    navXs: "16px",
  },
  fontWeights: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },
  shadows: {
    sm: "0 2px 8px 0 rgba(60,72,88,0.06)",
    md: "0 4px 24px 0 rgba(60,72,88,0.10)",
    lg: "0 8px 32px 0 rgba(60,72,88,0.14)",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
  }
};

export type ThemeType = typeof theme;