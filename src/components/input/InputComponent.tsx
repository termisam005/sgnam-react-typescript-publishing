interface Props {
	type?: string;
	className?: string;
	placeholder?: string;
	value?: string | number;
	disabled?: boolean;
	id?: string;
	hidden?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: () => void;
}

const InputComponent = ({ 
		type, className, placeholder, value, disabled, id, hidden, onChange, onClick 
	}: Props) => {
	return (
		<input
			id={id}
			type={type}
			className={className}
			placeholder={placeholder}
			value={value}
			disabled={disabled}
			hidden={hidden}
			onChange={onChange}
			onClick={onClick}
		/>
	);
};

export default InputComponent;