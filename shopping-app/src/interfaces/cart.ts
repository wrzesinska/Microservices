export interface CartItem {
    itemId: string;
    desc: string;
    qty: number;
}

/* API */
export interface CartPayload {
    id: number;
    items: CartItem[];
}

export interface CartPayload_V2 {
    id: number;
    items: CartItem[];
}

/* Service */
export interface Cart {
    id: number;
    user_id: string;
    items: CartItem[];
}