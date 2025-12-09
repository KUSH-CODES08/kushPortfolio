const Card = ({ children, className = '', hover = true }) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl transform hover:-translate-y-2' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
