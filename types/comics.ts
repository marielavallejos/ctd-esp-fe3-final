import { Result } from "./marvelAPI";

export interface Comics {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
}