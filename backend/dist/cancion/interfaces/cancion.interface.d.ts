import { Document } from 'mongoose';
export interface Cancion extends Document {
    readonly nombre: string;
    readonly duracion: string;
    readonly idArtista: string;
    readonly urlPortada: string;
    readonly urlYouTube: string;
    readonly fechaLanzamiento: Date;
}
