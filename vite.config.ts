
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';
  import path from 'path';
  import fs from 'fs';
  import { fileURLToPath } from 'url';

  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  // Custom plugin to resolve figma:asset imports for Rollup
  const figmaAssetPlugin = {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '');
        const assetPath = path.resolve(__dirname, `./src/assets/${filename}`);
        if (fs.existsSync(assetPath)) {
          return assetPath;
        }
      }
      return null;
    }
  };

  export default defineConfig({
    plugins: [
      figmaAssetPlugin,
      react({
        jsxImportSource: 'react',
      }),
      tailwindcss(),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: (() => {
        const aliases = {
          'vaul@1.1.2': 'vaul',
          'sonner@2.0.3': 'sonner',
          'recharts@2.15.2': 'recharts',
          'react-resizable-panels@2.1.7': 'react-resizable-panels',
          'react-hook-form@7.55.0': 'react-hook-form',
          'react-day-picker@8.10.1': 'react-day-picker',
          'lucide-react@0.487.0': 'lucide-react',
          'input-otp@1.4.2': 'input-otp',
          'embla-carousel-react@8.6.0': 'embla-carousel-react',
          'cmdk@1.1.1': 'cmdk',
          'class-variance-authority@0.7.1': 'class-variance-authority',
          '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
          '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
          '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
          '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
          '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
          '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
          '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
          '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
          '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
          '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
          '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
          '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
          '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
          '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
          '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
          '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
          '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
          '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
          '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
          '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
          '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
          '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
          '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
          '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
          '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
          '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
          '@': path.resolve(__dirname, './src'),
        };
        
        // Dynamically add all figma assets from the assets directory
        const assetsDir = path.resolve(__dirname, './src/assets');
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png'));
          files.forEach(file => {
            aliases[`figma:asset/${file}`] = path.resolve(__dirname, `./src/assets/${file}`);
          });
        }
        
        return aliases;
      })(),
    },
    build: {
      target: 'esnext',
      outDir: 'build',
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress unresolved figma:asset warnings
          if (warning.code === 'UNRESOLVED_IMPORT' && 
              (warning.source?.includes('figma:asset') || warning.message?.includes('figma:asset'))) {
            return;
          }
          // Also suppress if the id contains figma:asset
          if (warning.id?.includes('figma:asset')) {
            return;
          }
          warn(warning);
        }
      }
    },
    server: {
      port: 3000,
      open: true,
    },
  });