
export class movie {
    oid: number;
    name: string;
    type: Type;
    releasedate: string;
    language: Language;
    rating: number;
    genre: Genere;
    imgUrl: string;
    videolinks: videoLinks[];
    desc: string;
    synopsis: string;
    duration: number;
    tags: string[];
    cast: Cast[];
}

export enum Type {
    Movie,
    TvShow
}

export enum Language {
    Telugu,
    Hindi,
    English
}

export enum Genere {
    Action, Crime, Drama, Thriller
}

export enum Source {
    Youtube = "Youtube", Enthusan = "Enthusan", NetFlix = "NetFlix", Amazon = "Amazon"
}

export enum ArtistType {
    hero, herione, producer, music, director
} 

export class Cast {
    type: ArtistType;
    name: string;
    cid: number;
}

export class videoLinks {
    source: string;
    url: string;
    price: number;
    verified: string;
}
