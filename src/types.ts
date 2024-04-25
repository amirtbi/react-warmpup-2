export interface IITems {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
  info: {
    price: number;
    existed: boolean;
  };
}
