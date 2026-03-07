export interface NotaStudientInterface {
    idmatricula: number;
    idPlanilla:  number;
    CodLogro:    string;
    apellidos:   string;
    nombres:     string;
    n1:          number;
    n2:          number;
    n3:          number;
    n4:          number;
    numSemana:   number;
}

export interface NotaSaveInterface {
    idmatricula: number;
    idPlanilla:  number;
    CodLogro:    string;
    n1:          number;
    n2:          number;
    n3:          number;
    n4:          number;
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
export interface ObservacionesInterface {
    idRegOb:      number;
    tipoObs:      string;
    observacion:  string;
    cumplido:     boolean;
    comentarioAd: string;
    estado:       string;
}

export interface SaveObservadorInterface {
    idmatricula: number;
    idPlanilla:  number;
    CodLogro:    string;
    usuario:     string;
    tipoObs:     string;
    obs:         string;
    comentario:  string;
    cumplido:    number;
    estado:      string;
    numSemana:   number;
}

export interface RespSaveObsInterface {
    valor:       string;
    descripcion: string;
}

export interface ObsStudientInterface {
    idmatricula: number;
    idPlanilla:  number;
    CodLogro:    string;
    estudiante:   string;
    numSemana:   number;
    observaciones: ObservacionesInterface[]
}