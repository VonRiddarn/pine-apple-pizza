import "./BoxMark.scss";

type BoxMarkProps = {
	children: React.ReactNode;
};
const BoxMark = ({ children }: BoxMarkProps) => {
	return <mark className="BoxMark">{children}</mark>;
};

export default BoxMark;
