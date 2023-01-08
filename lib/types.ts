export interface Children {
  children: React.ReactNode;
  className?: string;
  [rest: string]: any;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}


