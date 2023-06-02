import * as server from '../entries/pages/(pages)/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/(pages)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(pages)/+page.server.js";
export const imports = ["_app/immutable/nodes/3.dae0c9d1.js","_app/immutable/chunks/index.7d062888.js"];
export const stylesheets = [];
export const fonts = [];
