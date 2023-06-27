import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://dev.omni-dispatch.com',
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    watchForFileChanges: false,
    specPattern: '**/*.cy.ts',
    videoCompression: false,
    chromeWebSecurity: false,
    videoUploadOnPasses: true,
    viewportWidth: 1536,
    viewportHeight: 960,
    video: true,
    retries: {
      runMode: 1,
      openMode: 0,
    },
  },
});

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  on('task', {
    setEmail: (email: string) => {
      global.email = email;
      return null;
    },
    getEmail: () => {
      return global.email;
    },
    setPassword: (password: string) => {
      global.password = password;
      return null;
    },
    getPassword: () => {
      return global.password;
    },
  });
  return config;
}
