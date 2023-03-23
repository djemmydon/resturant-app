export interface ProductType {
  _id: string;
  title: string;
  description: string;
  price: number;
  color: string;
  image: string;
}

export interface Diff {
  products: ProductType[];
}
export interface fetchType {
  fetch: Diff;
  isLoading: boolean;
  isError: boolean;
}

export interface fetchOneType {
  data: ProductType;
  isLoading: boolean;
  id: string;
}

export interface FetchType {
  data:Diff;
  isLoading: boolean;
  error: boolean;
}
