export abstract class Entity {
	public static fromJSON(object: Record<string, unknown>): Entity {
		throw new Error('Method must be implemented in extended class...');
	}
}
