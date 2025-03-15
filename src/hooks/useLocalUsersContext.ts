import React from "react";

export const LocalUsersContext = React.createContext<string | null>(null);

export const useLocalUsersContext = () =>
	React.useContext(LocalUsersContext) ??
	(() => {
		throw new Error("Namecontext must be used within the provider!");
	})();
