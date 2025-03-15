import React, { useState } from "react";
import { LocalUsersContext } from "../../hooks/useLocalUsersContext";

type LocalUsersProviderProps = {
	children: React.ReactNode;
};

export function LocalUserProvider({ children }: LocalUsersProviderProps) {
	const [name] = useState("Tompa Tjompa");

	return <LocalUsersContext.Provider value={name}>{children}</LocalUsersContext.Provider>;
}
