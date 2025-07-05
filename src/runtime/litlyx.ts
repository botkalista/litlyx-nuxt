import { defineNuxtPlugin, useRouter, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  const router = useRouter();

  const config = useRuntimeConfig().public.litlyx;

  const protocol = config.server.secure ? 'https' : 'http';
  const url = `${protocol}://${config.server.host}:${config.server.port}`

  if (!config.workspace_id || (typeof config.workspace_id !== 'string') || config.workspace_id.length == 0) {
    console.error('[LITLYX] workspace_id not set');
    return;
  }

  if (config.automaticMode) {
    router.afterEach((to, from) => {
      if (config.debug) console.log('[LITLYX] Visit');
      fetch(`${url}/visit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pid: config.workspace_id,
          website: location.host,
          page: location.pathname,
          referrer: document.referrer ?? 'self',
          userAgent: navigator.userAgent ?? ''
        })
      })
    })
  }


  if (config.debug) console.log('[LITLYX] Plugin injected');
})
