import Container from '@components/Container';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex w-full bg-blue-500 justify-between items-center h-14 max-h-14">
      <Container className="flex justify-between items-center ">
        {/* <Link href="/"> */}
        <a href="/">
          <p className="pointer">Hyper Bros. Trading Cards</p>
        </a>
        {/* </Link> */}
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
