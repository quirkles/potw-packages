const {defineConfig} = await import("vitest/config");

export default defineConfig({
    "root": __dirname,
    "cacheDir": "../../node_modules/.vite/packages/permissions",
    "plugins": [],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    "test": {
        "watch": false,
        "globals": true,
        "environment": "node",
        "include": ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        "reporters": ["default"],
        "coverage": {
            "reportsDirectory": "./test-output/vitest/coverage",
            "provider": "v8"
        }
    }
});
