import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import { writeFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  base: `${process.env.NODE_ENV === 'production' ? 'http://my-site.com' : ''}/appChild/`,
  plugins: [react(),
    (function () {
      let basePath = ''
      return {
        name: "app-child",
        apply: "build",
        configResolved(config) {
          // 获取资源地址前缀
          basePath = `${basePath}${config.base}${config.build.assetsDir}/`;
        },
        renderChunk(code, chunk) {
          // build后，import会通过相对地址引入模块，需要将其补全
          if (chunk.fileName.endsWith(".js") && /(from|import)(\s*['"])(\.\.?\/)/g.test(code)) {
            code = code.replace(/(from|import)(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
              return all.replace($3, new URL($3, basePath).href);
            });
          }
          return code;
        },
      };
    })(),]
})
