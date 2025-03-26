const Button = ({className='',text}) => {
  return (
    <button className={`px-3 py-2 bg-[#008AFF] inline-flex items-center justify-center text-white rounded-sm ${className}`}>
        {text}
    </button>
  );
};

export default Button;
