import Container from '@components/Container';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex w-full bg-blue-500 justify-between items-center">
      <Container className="flex justify-between items-center ">
        <p>Arttu&apos;s Store</p>
        <p className="flex items-center content-center">
          <FaShoppingCart />
          $0.00
        </p>
      </Container>
    </header>
  );
};

export default Header;
