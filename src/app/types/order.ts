// app/types/order.ts

// 01-Estruturas e Tratamento -
// 03-Arrays -
// 04-Objetos -

export interface OrderItem {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
}

export type Order = {
  id: number;
  date: string;
  total: number;
  items: {
    product: {
      id: number;
      name: string;
      price: number;
    };
    quantity: number;
  }[];
};
