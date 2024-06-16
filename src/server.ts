import express from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

import { RATE_LIMIT_NUMBER, RATE_LIMIT_WINDOW } from './core/constants';

interface ServerOptions {
	port: number;
	apiPrefix: string;
}

export class Server {
	private readonly app = express();
	private readonly port: number;
	private readonly apiPrefix: string;

	constructor(options: ServerOptions) {
		this.port = options.port;
		this.apiPrefix = options.apiPrefix;
	}

	public async start(): Promise<void> {
		this.setMiddlewares();
		this.bindRouters();

		this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}...`);
		});
	}

	private setMiddlewares(): void {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(compression());

		this.app.use(
			rateLimit({
				max: RATE_LIMIT_NUMBER,
				windowMs: RATE_LIMIT_WINDOW,
				message: 'Too many requests from this IP, please try again in one hour'
			})
		);
	}

	private bindRouters(): void {
		// todo
	}
}
