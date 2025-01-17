import { defineConfig } from 'vitest/config';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginJsx from '@vitejs/plugin-vue-jsx';
import { cpus, totalmem } from 'os';

const cpuNum = Math.max(cpus().length - 1, 1);
const memory = totalmem();

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.[jt]s?(x)'],
      exclude: [
        'src/lazyload/vue-lazyload/**',
        '**/demo/**',
        '**/test/**',
        '**/lang/**',
      ],
      reporter: ['lcov', 'text-summary'],
      reportsDirectory: './test/coverage',
    },
    pool: 'vmThreads',
    poolOptions: {
      vmThreads: {
        // limit the memory to avoid OOM
        memoryLimit:
          typeof memory === 'number'
            ? memory * Math.min(1 / (cpuNum * 2), 0.1)
            : undefined,
      },
    },
    environment: 'jsdom',
    include: ['src/**/*.spec.[jt]s?(x)'],
    restoreMocks: true,
  },
  plugins: [vitePluginVue(), vitePluginJsx()],
});
