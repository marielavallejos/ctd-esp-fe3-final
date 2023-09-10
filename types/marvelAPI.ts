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
    creators: Summary;
    characters: Summary;
    stories: Summary;
    events: Summary;
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
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Summary;
    series: Summary;
    stories: Summary;
    events: Summary;
    urls: Link[];
}

export type Summary = {
    available: number;
    collectionURI: string;
    items: Item[] | [];
    returned: number;
}

export type Item = {
    resourceURI: string;
    name: string;
    type?: "cover" | "interiorStory" | "promo" | string;
    role?:
    | "editor"
    | "writer"
    | "penciller"
    | "penciller (cover)"
    | "colorist"
    | "inker"
    | "penciller (cover) "
    | "letterer"
    | string;
}

export type Link = {
    type: "detail" | "comiclink" | "purchase" | string;
    url: string;
}

export type Date = {
    type: "onsaleDate" | "focDate" | string;
    date: string;
}

export type Price = {
    type: "printPrice" | string;
    price: number;
}

export type Thumbnail  = {
    path: string;
    extension: "jpg" | string;
}

export type TextObjects = {
    type: "issue_solicit_text" | string;
    language: "en-us" | string;
    text: string;
}

export type ICheckout = {
    customer: Customer;
    card: Card;
    order: Order;
};

export type Card = {
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
}

export type Order = {
    name: string;
    image: string;
    price: number;
}

export type Address = {
    address1: string;
    address2: string | null;
    city: string;
    state: string;
    zipCode: string;
}

export type Customer = {
    name: string;
    lastname: string;
    email: string;
    address: Address;
}