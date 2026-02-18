const Button = ({
    children,
    variant = 'outline',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none transition-all duration-200";

    const variants = {
        outline: "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500",
        primary: "bg-gradient-to-r from-[#FF6B00] to-[#FF9F6C] text-white hover:opacity-90 border-transparent",
        dark: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 border-transparent",
        custom: "",
    };

    const selectedVariant = variants[variant] !== undefined ? variants[variant] : variants.outline;

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
