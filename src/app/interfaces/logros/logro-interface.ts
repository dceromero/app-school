export interface LogroInterface {
    codLogro: string;
    textoLg: string;
    cantNotas: number;
    pc1: number;
    pc2: number;
    pc3: number;
    pc4: number;
    cantLogros: number;
}

export interface LogroNTInterface {
    idPlanilla: number;
    codLogro: string;
    textoLg: string;
    cantNotas: number;
    pc1: number;
    pc2: number;
    pc3: number;
    pc4: number;
    cantLogros: number;
}


export interface FindLogroInterface {
    codAsignatura: string;
    codGrado: string;
    periodo: string;
    usuario: string;
}


export interface FindLogroCalInterface {
    codAsignatura: string;
    codGrado: string;
    grupo: string;
    periodo: string;
}

export interface OtherNotesInterface {
    idPlanilla:  number;
    idMatricula: number;
    apellidos:   string;
    nombres:     string;
    ausencias:   number;
    nIcfes:      number;
    notaRp:      number;
    notaRF:      number;
    notaNiv:     number;
    notaEU:      number;
}

export interface NotaOtherSaveInterface {
    idPlanilla:  number;
    idMatricula: number;
    apellidos:   string;
    nIcfes:      number;
    notaRp:      number;
    notaRF:      number;
    notaNiv:     number;
    notaEU:      number;
}