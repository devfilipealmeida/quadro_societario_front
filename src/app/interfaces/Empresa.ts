import { Socio } from "./Socio";

export interface Empresa {
    responsible_company: string,
	cpf: string,
	birth_date: Date,
	fantasy_name: string,
	cnpj: string,
	address: string,
	neighborhood: string,
	complement: string,
	city: string,
	state: string,
	partners: Socio[]
}