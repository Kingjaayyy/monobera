export interface OrderType {
  assets?: any; //Token
  orderType: "long" | "short";
  optionType: "market" | "limit";
  amount: number | undefined;
  quantity: number | undefined;
  price?: number | undefined;
  leverage: number;
  tp: number | undefined;
  sl: number | undefined;
}
