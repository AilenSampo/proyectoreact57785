// vite.config.js
import { defineConfig } from "file:///C:/Users/Usuario/Dropbox/Proyectos/Full%20stack/React/ecommerce-sampoailen/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Usuario/Dropbox/Proyectos/Full%20stack/React/ecommerce-sampoailen/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/Usuario/Dropbox/Proyectos/Full%20stack/React/ecommerce-sampoailen/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Mi App",
        short_name: "MiApp",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc3VhcmlvXFxcXERyb3Bib3hcXFxcUHJveWVjdG9zXFxcXEZ1bGwgc3RhY2tcXFxcUmVhY3RcXFxcZWNvbW1lcmNlLXNhbXBvYWlsZW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVzdWFyaW9cXFxcRHJvcGJveFxcXFxQcm95ZWN0b3NcXFxcRnVsbCBzdGFja1xcXFxSZWFjdFxcXFxlY29tbWVyY2Utc2FtcG9haWxlblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVXN1YXJpby9Ecm9wYm94L1Byb3llY3Rvcy9GdWxsJTIwc3RhY2svUmVhY3QvZWNvbW1lcmNlLXNhbXBvYWlsZW4vdml0ZS5jb25maWcuanNcIjsvLyBpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuLy8gaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyAvLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuLy8gZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbi8vICAgcGx1Z2luczogW3JlYWN0KCldLFxuLy8gfSlcblxuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnZmF2aWNvbi5pY28nLCAncm9ib3RzLnR4dCcsICdhcHBsZS10b3VjaC1pY29uLnBuZyddLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ01pIEFwcCcsXG4gICAgICAgIHNob3J0X25hbWU6ICdNaUFwcCcsXG4gICAgICAgIHN0YXJ0X3VybDogJy8nLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7IHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLCBzaXplczogJzE5MngxOTInLCB0eXBlOiAnaW1hZ2UvcG5nJyB9LFxuICAgICAgICAgIHsgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsIHNpemVzOiAnNTEyeDUxMicsIHR5cGU6ICdpbWFnZS9wbmcnIH0sXG4gICAgICAgICAgeyBzcmM6ICcvcHdhLTUxMng1MTIucG5nJywgc2l6ZXM6ICc1MTJ4NTEyJywgdHlwZTogJ2ltYWdlL3BuZycsIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pXG4gIF1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBU0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSxlQUFlLGNBQWMsc0JBQXNCO0FBQUEsTUFDbEYsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1Qsa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0wsRUFBRSxLQUFLLG9CQUFvQixPQUFPLFdBQVcsTUFBTSxZQUFZO0FBQUEsVUFDL0QsRUFBRSxLQUFLLG9CQUFvQixPQUFPLFdBQVcsTUFBTSxZQUFZO0FBQUEsVUFDL0QsRUFBRSxLQUFLLG9CQUFvQixPQUFPLFdBQVcsTUFBTSxhQUFhLFNBQVMsZUFBZTtBQUFBLFFBQzFGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
