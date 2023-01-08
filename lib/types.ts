export interface Children {
  children: React.ReactNode;
  className?: string;
  [rest: string]: any;
}

export interface Cards {
  cards: [
    {
      content: string;
      productId: string;
      slug: string;
      title: string;
      uri: string;
      productPrice: string;
      featuredImage: {
        altText: string;
        sourceUrl: string;
        mediaDetails: {
          height: number;
          width: number;
        };
      };
    }
  ];
}
