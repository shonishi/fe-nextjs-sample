export default interface Response {
  id: number;
  name: string;
  price: string;
  href: string;
  breadcrumbs: { id: number; name: string; href: string }[];
  images: {
    src: string;
    alt: string;
  }[];
  colors: {
    name: string;
    class: string;
    selectedClass: string;
  }[];
  sizes: { name: string; inStock: boolean }[];
  description: string;
  highlights: string[];
  details: string;
  reviews: { href: string; average: number; totalCount: number };
}
