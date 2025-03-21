import { useLocalUsersContext } from "../contexts/NameContext/LocalUsersContext";

const CurrentUserDisplay = () => {
	const { allUsers, currentUserId } = useLocalUsersContext();

	return <p>{allUsers.find((u) => u.id === currentUserId)?.name || "No user selected!"}</p>;
};

export default CurrentUserDisplay;
