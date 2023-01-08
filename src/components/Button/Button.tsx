import { Children } from 'lib/types';

interface Button extends Children {}

const Button = ({ children, className, ...rest }: Button): JSX.Element => {
  let buttonClassName = '';

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
