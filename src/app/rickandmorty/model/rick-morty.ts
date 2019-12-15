export interface RickMorty {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: RickMortyDetails;
    location: RickMortyDetails;
    image: string;
    created: string;
}

export interface RickMortyDetails {
    name: string;
    url: string;
}
