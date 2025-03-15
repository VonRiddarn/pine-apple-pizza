import { useNameContext } from "../hooks/useNameContext";

const NameDisplay = () => {
	const name = useNameContext();

	return <p>{name || "Name is empty!"}</p>;
};

export default NameDisplay;
