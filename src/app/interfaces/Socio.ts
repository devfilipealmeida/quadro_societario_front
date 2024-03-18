import { Empresa } from "./Empresa";

export interface Socio {
    name: string,
	cpf: string,
	qualification: string,
	entry: Date | string,
	corporation_id?: number,
	corporations?: Empresa[]
}