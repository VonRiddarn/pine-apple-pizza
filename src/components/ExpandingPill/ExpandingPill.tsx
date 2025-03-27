import { ReactNode } from "react";
import "./ExpandingPill.scss";

type ExpandingPillProps = {
	title: string;
	children?: ReactNode;
};

const ExpandingPill = ({ title, children }: ExpandingPillProps) => {
	return (
		<span className="ExpandingPill">
			<p>{title}</p>
			{children && <p>{children}</p>}
		</span>
	);
};

export default ExpandingPill;
