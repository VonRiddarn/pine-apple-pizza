import { useLocalUsersContext } from "../contexts/NameContext/LocalUsersContext";
import UserButton from "./UserButton";

const ListUsers = () => {
	const usersContext = useLocalUsersContext();

	return (
		<ul>
			{usersContext.allUsers.map((u) => (
				<li key={u.id}>
					<UserButton name={u.name} />
				</li>
			))}
		</ul>
	);
};

export default ListUsers;
