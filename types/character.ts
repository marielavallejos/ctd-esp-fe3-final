import { Characters, Series, Stories, Thumbnail } from "./marvelAPI";

export type Character = {
    id: number
    name: string
    description: null | string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics :  Characters
    series: Series;
    stories: Stories;
    events: Characters;
    urls: URL[];
}

