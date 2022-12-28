export interface ExternalProductDto {
  id: string;
  name: string;
  price: number;
  count: number;
  description: string;
  mainImage: string;
  images: Array<string>;
}
