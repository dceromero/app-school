export interface LogroInterface {
    codLogro: string;
    textoLg: string;
    cantNotas: number;
    pc1: number;
    pc2: number;
    pc3: number;
    pc4: number;
    cantLogros: number;
    id:number;
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

export interface FindEvaluacionInterface {
    id: number;
    descLogro: string;
    cantNotas: number;
    evaluations: EvaluacionInterface[] | [];
}

export interface FindContenidoInterface {
    id: number;
    descLogro: string;
    contenidos: ContenidoInterface[] | [];
}

export interface ContenidoInterface {
    id: number;
    item: string;
    contenido: string | null;
    comentario: string | null;
    fecRegistro: Date | null;
    usuario: string | null;
}

export interface EvaluacionInterface {
    id: number;
    item: string;
    idEvaluacion: string | null;
    evaluacion: string | null;
    detalle: string | null;
    fecha: Date | null;
}

export interface TypeEvaluacionInterface {
    valor: string;
    descripcion: string;
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

export interface FindCommentInterface{
    periodo:number;
    grado:string;
    grupo:string;
}

export interface SaveComment{
    periodo:number;
    grado:string;
    grupo:string;
    idmatricula:number;
    comentario:string;
}
export interface RespComment{
    periodo:number;
    grado:string;
    grupo:string;
    idmatricula:number;
    apellidos:string;
    nombres:string;
    comentario:string;
    fecregistro: Date | null;
}