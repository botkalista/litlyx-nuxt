import { useRuntimeConfig } from "nuxt/app";

async function event(name: string, metadata?: Record<string, any>) {

    const config = useRuntimeConfig().public.litlyx;

    const protocol = config.server.secure ? 'https' : 'http';
    const url = `${protocol}://${config.server.host}:${config.server.port}`

    await fetch(`${url}/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            pid: config.workspace_id,
            website: location.host ?? 'SERVER_SIDE',
            userAgent: navigator.userAgent ?? '',
            metadata: JSON.stringify(metadata)
        })
    })

}

export function useLitlyx() {
    return { event }
}