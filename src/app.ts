import { envs } from './core';
import { Server } from './server';

(() => {
	const server = new Server({
		port: envs.PORT,
		apiPrefix: envs.API_PREFIX
	});
	server.start();
})();
