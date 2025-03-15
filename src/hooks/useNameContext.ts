import React from "react";

export const NameContext = React.createContext<string | null>(null);

export const useNameContext = () =>
	React.useContext(NameContext) ??
	(() => {
		throw new Error("Namecontext must be used within the provider!");
	})();
