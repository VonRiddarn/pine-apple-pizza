import { useNameContext } from "../contexts/NameContext";

const NameDisplay = () => {
	const name = useNameContext();

	return <p>{name || "Name is empty!"}</p>;
};

export default NameDisplay;
