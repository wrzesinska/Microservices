export interface CartItem {
    itemId: number;
    desc: string;
    qty: number;
}

export interface CartPayload {
    id: number;
    item: CartItem[];
}