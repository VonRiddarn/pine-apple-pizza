import React, { useState } from "react";
import { LocalUsersContext, LocalUsersType } from "../../hooks/useLocalUsersContext";

type LocalUsersProviderProps = {
	children: React.ReactNode;
};

const initialState: LocalUsersType = {
	allUsers: [
		{
			id: 0,
			name: "Tompa Tjompa",
		},
		{
			id: 1,
			name: "Silly Billy",
		},
		{
			id: 2,
			name: "Wacky Jackie",
		},
		{
			id: 3,
			name: "Goofy Lucy",
		},
	],
	currentUserId: -1,
};

export function LocalUserProvider({ children }: LocalUsersProviderProps) {
	const [name] = useState(initialState);

	return <LocalUsersContext.Provider value={name}>{children}</LocalUsersContext.Provider>;
}
