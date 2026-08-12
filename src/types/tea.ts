export interface Promotion {
  id: string;
  title: string;
  description: string;
}

export interface Question {
  id: string;
  step: number;
  title: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image_url: string;
  buy_url: string;
  tags: string[];
  ingredients?: string[];
  benefits?: string[];
}

export interface TeaData {
  promotions: Promotion[];
  questions: Question[];
  products: Product[];
}
