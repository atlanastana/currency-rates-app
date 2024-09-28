export interface Rate {
  time: Date;
  symbol: string;  // Название валютной пары, например EURUSD
  bid: number;     // Цена покупки
  ask: number;     // Цена продажи
}
