import {  } from "angular-in-memory-web-api";

import { OrderLineItem } from './orderlineitem';

export class Order {
  orderId: string;
  totalAmount: number;
  orderLineItems: OrderLineItem[];
}