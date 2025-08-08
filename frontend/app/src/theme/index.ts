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
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    md: "1rem",       // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
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