import { useLocalUsersContext } from "../contexts/NameContext/LocalUsersContext";

type UserButtonProps = {
	name: string;
};

const UserButton = ({ name }: UserButtonProps) => {
	const userContext = useLocalUsersContext();

	return (
		<button
			onClick={() => {
				userContext.setCurrentUserId(userContext.allUsers.find((u) => u.name === name)!.id);
			}}
		>
			{name}
		</button>
	);
};

export default UserButton;
