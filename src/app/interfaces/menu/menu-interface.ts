export interface MenuInterface {
    Opcion:      string;
    Descripcion: string;
    Icon:        string;
    subMenu:     SubMenu[];
}

export interface SubMenu {
    Opcion:      string;
    Descripcion: string;
    Url:         string;
    Icon:        string;
}
