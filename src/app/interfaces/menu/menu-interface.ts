export interface MenuInterface {
    Opcion:      string;
    Descripcion: string;
    subMenu:     SubMenu[];
}

export interface SubMenu {
    Opcion:      string;
    Descripcion: string;
}
