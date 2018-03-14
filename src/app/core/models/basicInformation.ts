import {Label, Artist} from './index';

export interface BasicInformation{
    id: number;
    title: string;
    year: number;
    thumb: string;
    cover_image: string;
    labels: Label[];
    artists: Artist[];
}