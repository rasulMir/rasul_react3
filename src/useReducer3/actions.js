import { ALIVE_ALL, SWITCHER } from "./boilerTemplate";

export const switcher = (id, isAlive) => ({
	type : SWITCHER,
	id,
	isAlive,
});

export const aliveAll = () => ({ type : ALIVE_ALL });