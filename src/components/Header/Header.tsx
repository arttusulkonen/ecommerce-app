import Container from '@components/Container';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex w-full bg-blue-500 justify-between items-center h-14 max-h-14">
      <Container className="flex justify-between items-center ">
        <p>Hyper Bros. Trading Cards</p>
        <p className="">
          <button className="snipcart-checkout flex items-center content-center bg-transparent border-none inherit pointer">
            <FaShoppingCart />
            <span className="snipcart-total-price">-</span>
          </button>
        </p>
      </Container>
    </header>
  );
};

export default Header;
