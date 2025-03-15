import React, { useState } from "react";

type LocalUser = {
	id: number;
	name: string;
};

export type LocalUsersContextType = Readonly<{
	allUsers: LocalUser[];
	setAllUsers: React.Dispatch<React.SetStateAction<LocalUser[]>>;
	currentUserId: number;
	setCurrentUserId: (newId: number) => void;
}>;

const LocalUsersContext = React.createContext<LocalUsersContextType | null>(null);

export const useLocalUsersContext = () =>
	React.useContext(LocalUsersContext) ??
	(() => {
		throw new Error("Namecontext must be used within the provider!");
	})();

type LocalUsersProviderProps = {
	children: React.ReactNode;
};

export function LocalUserProvider({ children }: Readonly<LocalUsersProviderProps>) {
	const [allUsers, setAllUsers] = React.useState<LocalUser[]>([
		{ id: 0, name: "Tompa Tjompa" },
		{ id: 1, name: "Silly Billy" },
		{ id: 2, name: "Wacky Jackie" },
		{ id: 3, name: "Goofy Lucy" },
	]);

	const [currentUserId, setCurrentUserId] = useState(-1);

	const updateCurrentUserId = (newUserId: number) => setCurrentUserId(newUserId);

	const value: LocalUsersContextType = {
		allUsers,
		setAllUsers,
		currentUserId,
		setCurrentUserId: updateCurrentUserId,
	};

	return <LocalUsersContext.Provider value={value}>{children}</LocalUsersContext.Provider>;
}
