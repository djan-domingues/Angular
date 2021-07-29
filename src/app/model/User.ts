import { Postagem } from "./Postagem";

export class User {
    public id: number;
    public nome: string;
    public dataNascimento: Date;
    public foto: string;
    public usuario: string;
    public tipo: string;
    public senha: string;
    public postagem: Postagem[];

    
}