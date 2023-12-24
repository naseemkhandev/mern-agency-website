import { Link } from "react-router-dom";

const SocialIcons = ({ link, icon, className }) => {
	const Icon = icon;

	return (
		<div>
			<Link
				to={link}
				target="_blank"
				rel="noreferrer"
				className={`text-xl border p-2 rounded-full cursor-pointer hover:bg-neutral-50 hover:text-slate-900 hover:border-slate-900 block ${className}`}
			>
				<Icon />
			</Link>
		</div>
	);
};

export default SocialIcons;
