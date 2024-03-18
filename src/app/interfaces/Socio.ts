import { Empresa } from "./Empresa";

export interface Socio {
    name: string,
	cpf: string,
	qualification: string,
	entry: Date,
	corporations?: Empresa[]
}