import { Children } from 'lib/types';

const Container = ({ children, className, ...rest }: Children): JSX.Element => {
  let containerClassName = 'container';

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }
  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;
