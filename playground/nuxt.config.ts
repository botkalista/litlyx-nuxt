export default defineNuxtConfig({
  modules: ['../src/module'],
  litlyx: {
    workspace_id: '685174df0b48be43c961253c',
    server: {
      secure: true,
      host: 'test-producer.litlyx.com',
      port: 443
    }
  },
  devtools: { enabled: true },
})
