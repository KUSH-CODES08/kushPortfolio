const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-blue-600 dark:border-purple-600 text-blue-600 dark:text-purple-400 hover:bg-blue-600 dark:hover:bg-purple-600 hover:text-white hover:border-transparent',
    outline: 'border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-purple-600 hover:text-blue-600 dark:hover:text-purple-400',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
