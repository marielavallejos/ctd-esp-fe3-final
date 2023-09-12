export type ComicResponse = {
    code: number | string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: Comic[];
    };
}

export type Comic = {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string | null;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObjects[] | [];
    resourceURI: string;
    urls: Link[];
    series: Item;
    variants: Item[];
    collections: Item[] | [];
    collectedIssues: Item[] | [];
    dates: Date[];
    prices: Price[];
    price: number;
    oldPrice: number;
    stock: number;
    thumbnail: Thumbnail;
    images: Link[] | [];
    creators: List;
    characters: List;
    stories: List;
    events: List;
}

export type CharacterResponse = {
    code: number | string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: Character[];
    };
}

export type Character = {
    id: number;
    name: string;
    description: string | null;
    modified: Date | string;
    resourceURI: string;
    urls: Link[];
    thumbnail: Thumbnail;
    comics: List;
    series: List;
    stories: List;
    events: List;
}

export type TextObjects = {
    type: string;
    language: string;
    text: string;
}

export type Link = {
    type: string;
    url: string;
}

export type List = {
    available: number;
    returned: number;
    collectionURI: string;
    items: Item[] | [];

}

export type Item = {
    resourceURI: string;
    name: string;
    type?: string;
    role?: string;
}

export type Date = {
    type: string;
    date: string;
}

export type Price = {
    type: string;
    price: number;
}

export type Thumbnail  = {
    path: string;
    extension: string;
}