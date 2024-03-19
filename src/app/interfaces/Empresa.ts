import { Socio } from "./Socio";

export interface Company {
	id?:number,
	responsible_company: string,
	cpf: string,
	birth_date: Date | string,
	fantasy_name: string,
	cnpj: string,
	address: string,
	neighborhood: string,
	complement: string,
	city: string,
	state: string,
	partners?: Socio[]
}

export interface Data {
	data: Company[]
}