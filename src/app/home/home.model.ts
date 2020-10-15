export interface Home {
    id: string;
    type: string;
    url: string;
    brand: string;
    model: string;
    price: number;
    stock: number;
    base_clock?: number;
    boost_clock?: number;
    core?: number;
    thread?: number;
    speed?: number;
    size?: number;
    chipset?: string;
    processor?: string;
}
