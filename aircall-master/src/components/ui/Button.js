export default function Button({ addedClasses, children, ...props }) {
	return (
		<button
			className={`button ${addedClasses ? addedClasses : ''}`}
			{...props}
		>
			{children}
		</button>
	);
}
