import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Container from '@components/Container';
import { Product } from 'lib/types';

import products from '@data/products.json';
import Button from '@components/Button';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com"></link>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
      </Head>
      <Header />
      <main className="">
        <Container className="min-h-screen">
          <h1>Hyper Bros. Trading Cards</h1>
          <h2>Available Cards</h2>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
            {products.map((product: Product) => {
              return (
                <li className="p-3" key={product.id}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={864}
                    height={1200}
                  />
                  <h3 className="text-xl font-bold mt-1.5">{product.title}</h3>
                  <p className="mt-1.5">${product.price}</p>
                  <p>
                    <Button
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-url="/"
                      data-item-description=""
                      data-item-image={product.image}
                      data-item-name={product.title}
                      data-item-custom1-name="Gift"
                      data-item-custom1-type="checkbox"
                      className="snipcart-add-item text-base bg-emerald-500 font-bold pointer px-2.5 py-4 uppercase text-white"
                    >
                      Add to cart
                    </Button>
                  </p>
                </li>
              );
            })}
          </ul>
        </Container>
      </main>
      <Footer />

      <Script src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js" />
      <div
        hidden
        id="snipcart"
        data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
        data-config-modal-style="side"
      />
    </>
  );
}
