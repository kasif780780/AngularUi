import { Photo } from './photo';

export interface Users {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
   city: string;
    country: string;
    interestes?: string;
    lookingFor?: string;
    photo?: Photo[];

}
