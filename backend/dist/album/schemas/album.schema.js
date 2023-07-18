"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AlbumSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    cancionPopular: { type: mongoose_1.Schema.Types.ObjectId, ref: "Cancion" },
    idArtista: { type: mongoose_1.Schema.Types.ObjectId, ref: "Autor" },
    urlPortada: String,
    urlAlbum: String,
    fechaLanzamiento: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=album.schema.js.map