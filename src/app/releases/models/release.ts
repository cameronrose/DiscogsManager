import {Tracklist, Label, Artist} from './index';
export interface Release{
    id: number;
    title: string;
    artists: Artist[];
    country: string;
    genres: string[];
    labels: Label[];
    tracklist: Tracklist[];
    year: number;
    released: number;
}