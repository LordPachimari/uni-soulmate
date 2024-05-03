import type { WriteTransaction } from "replicache";

import type { Server } from "..";
import { updateUser } from "./user";

export type GlobalMutatorsType = {
	[key in keyof Server.GlobalMutatorsType]: (
		tx: WriteTransaction,
		args: Parameters<Server.GlobalMutatorsType[key]>[0],
	) => Promise<void>;
};
export const GlobalMutators: GlobalMutatorsType = {
	updateUser,
};