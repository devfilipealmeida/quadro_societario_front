export function adjustDateFormat(birthDate: string): string {
        const year = birthDate.substr(4, 4);
        const month = birthDate.substr(2, 2);
        const day = birthDate.substr(0, 2);
        return `${day}/${month}/${year}`;
  }

  export function dateToString(birthDate: Date | string) {
    const stringDate = new Date(birthDate);
    const dia = stringDate.getDate().toString().padStart(2, '0');
    const mes = (stringDate.getMonth() + 1).toString().padStart(2, '0');
    const ano = stringDate.getFullYear().toString();
    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }