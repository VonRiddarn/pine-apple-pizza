import React from "react";

type LocalUser = {
	id: number;
	name: string;
};

export type LocalUsersType = {
	allUsers: LocalUser[];
	currentUserId: number;
};

export const LocalUsersContext = React.createContext<LocalUsersType | null>(null);

export const useLocalUsersContext = () =>
	React.useContext(LocalUsersContext) ??
	(() => {
		throw new Error("Namecontext must be used within the provider!");
	})();
