export interface AuthInterface {
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    fullname:  string;
    userName:  string;
    userGroup: string;
}
