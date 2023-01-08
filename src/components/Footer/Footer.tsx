import Container from '@components/Container';
import { FaShoppingCart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="h-24 w-full flex center items-center">
      <Container className="flex justify-center items-center">
        <>&copy; Hyper Bros. Trading Cards, {new Date().getFullYear()}</>
      </Container>
    </footer>
  );
};

export default Footer;
