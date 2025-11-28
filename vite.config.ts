import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import eslint from "vite-plugin-eslint";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    svgrPlugin(),
    eslint()
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@auth": path.resolve(__dirname, "./src/auth"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@store": path.resolve(__dirname, "./src/redux"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@aut-labs/connector": path.resolve(__dirname, "./src/lib/connector"),
      "@aut-labs/d-aut": path.resolve(__dirname, "./src/lib/d-aut"),
      "@aut-labs/sdk": path.resolve(__dirname, "./src/lib/sdk/src/index.ts"),
      "@sdk-utils": path.resolve(__dirname, "./src/lib/sdk/src/utils"),
      "@sdk-models": path.resolve(__dirname, "./src/lib/sdk/src/models"),
      "@sdk-services": path.resolve(__dirname, "./src/lib/sdk/src/services"),
      "@sdk-contracts": path.resolve(__dirname, "./src/lib/sdk/src/contracts"),
      "@aut-labs/abi-types": path.resolve(
        __dirname,
        "../contracts/types/ethers-contracts"
      ),
      ethers: path.resolve(__dirname, "./node_modules/ethers"),
      "vite-plugin-node-polyfills/shims/global": path.resolve(
        __dirname,
        "node_modules/vite-plugin-node-polyfills/shims/global/dist/index.js"
      )
    }
  },
  build: {
    outDir: "build"
  },
  server: {
    port: 3000
  }
});
