const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";

    const variants = {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
        outline: "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500",
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500",
    };

    const selectedVariant = variants[variant] || variants.primary;

    return (
        <button
            className={`${baseStyles} ${selectedVariant} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
