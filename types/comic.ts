export type Comic = {
    id: number;
    title: string;
    description: string | null;
    price: number;
    oldPrice: number;
    stock: number;
    characters: string[];
    images:string[];
}
