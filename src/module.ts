import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'

export interface ModuleOptions {
  workspace_id: string,
  debug?: boolean,
  server?: {
    host?: string,
    port?: number,
    secure?: boolean
  },
  automaticMode?: boolean
}
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'litlyx-nuxt',
    configKey: 'litlyx',
  },
  defaults: {
    workspace_id: undefined,
    debug: false,
    server: {
      host: 'broker.litlyx.com',
      port: 443,
      secure: true
    },
    automaticMode: true
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.runtimeConfig.public.litlyx = _options as any;

    addPlugin({
      src: resolver.resolve('./runtime/litlyx'),
      mode: 'client',
    });

    addImportsDir(resolver.resolve('runtime/composables'))

  },
})
