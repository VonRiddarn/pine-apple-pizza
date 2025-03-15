import React, { useState } from "react";
import { NameContext } from "../../hooks/useNameContext";

type NameProviderProps = {
	children: React.ReactNode;
};

export function NameProvider({ children }: NameProviderProps) {
	const [name] = useState("Tompa Tjompa");

	return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
}
