// components/theme/colors.js - Configuração centralizada de cores e tema

export const colors = {
  // Paleta de cores Lucélio Construções
  primary: {
    light: '#00ff37ff',    // #8184C2 - Azul claro
    main: '#0006c2ff',     // #3A3D82 - Azul escuro
    dark: '#2A2D5F',
    red: '#CF171D'     // Versão mais escura do azul principal
  },
  
  accent: {
    main: '#D65C3E',     // #D65C3E - Laranja avermelhado
    dark: '#BA3934'      // #BA3934 - Vermelho escuro
  },
  
  warning: '#ECDE2D',    // #ECDE2D - Amarelo
  
  neutral: {
    lightest: '#E1E0EB', // #E1E0EB - Cinza muito claro
    light: '#A7A8B6',    // #A7A8B6 - Cinza médio
    gray: '#C9CDCF',    // #A7A8B6 - Cinza médio
    dark: '#6B7280',     // Cinza escuro
    darkest: '#374151'   // Cinza muito escuro
  },
  
  // Cores do sistema
  success: '#10B981',
  error: '#EF4444',
  whatsapp: '#25D366',
  white: '#FFFFFF',
  black: '#000000'
};

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
  accent: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
  hero: `linear-gradient(135deg, ${colors.neutral.lightest} 0%, ${colors.neutral.light} 100%)`,
  footer: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.dark} 100%)`
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
};

export const animations = {
  fadeIn: 'fadeIn 0.5s ease-in-out',
  slideUp: 'slideUp 0.6s ease-out',
  bounce: 'bounce 2s infinite'
};

// Classes utilitárias para usar nos componentes
export const themeClasses = {
  // Botões
  button: {
    primary: `bg-[${colors.primary.main}] hover:bg-[${colors.primary.light}] text-white`,
    accent: `bg-[${colors.accent.main}] hover:bg-[${colors.accent.dark}] text-white`,
    whatsapp: `bg-[${colors.whatsapp}] hover:bg-[#20B85A] text-white`,
    outline: `border-2 border-[${colors.primary.main}] text-[${colors.primary.main}] hover:bg-[${colors.primary.main}] hover:text-white`
  },
  
  // Cards
  card: {
    default: `bg-white shadow-lg hover:shadow-xl`,
    gradient: `bg-gradient-to-br from-gray-50 to-[${colors.neutral.lightest}]`
  },
  
  // Textos
  text: {
    primary: `text-[${colors.primary.main}]`,
    accent: `text-[${colors.accent.main}]`,
    muted: `text-[${colors.neutral.light}]`,
    dark: `text-[${colors.neutral.darkest}]`
  }
};

export default {
  colors,
  gradients,
  shadows,
  animations,
  themeClasses
};