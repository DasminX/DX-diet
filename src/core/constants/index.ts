enum HttpCode {
	OK = 200,
	CREATED = 201,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500
}

const RATE_LIMIT_NUMBER = 100;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

export { HttpCode, RATE_LIMIT_NUMBER, RATE_LIMIT_WINDOW };
