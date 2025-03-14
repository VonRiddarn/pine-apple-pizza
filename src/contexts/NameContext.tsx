import React, { useState } from "react";

const NameContext = React.createContext<string | null>(null);

export const useNameContext = () => {
	const context = React.useContext(NameContext);
	// Reason for undefined check: I want to be able to have the state be empty during its lifecycle.
	if (context === undefined) throw new Error("Namecontext must be used within the provider!");
	return context;
};
/*
	In my heart I want to use this, but in my mind I know it's not as readable.
	The cool thing is that this doesn't allocate memory for a constant.
	React.useContext(NameContext) ??
	(() => {
		throw new Error("Namecontext must be used within the provider!");
	})();
*/

type NameProviderProps = {
	children: React.ReactNode;
};

export function NameProvider({ children }: NameProviderProps) {
	const [name, setName] = useState("Tompa Tjompa");

	return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
}
