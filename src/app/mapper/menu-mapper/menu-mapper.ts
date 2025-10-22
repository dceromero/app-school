import { MenuItem } from "primeng/api";
import { MenuInterface, SubMenu } from "../../interfaces/menu/menu-interface";

export class MenuMapper {
    static mapToMenuItems(menuData: MenuInterface[] ): MenuItem[] {
        return menuData.map((item) => ({
            label: item.Descripcion,
            icon: 'fa-solid fa-gear',
            items: item.subMenu ? MenuMapper.mapToSubMenuItems(item.subMenu) : [],
        }));
    }

    private static mapToSubMenuItems(subMenuData: SubMenu[]): MenuItem[] {
        return subMenuData.map((subItem) => ({
            label: subItem.Descripcion,
            icon: 'fa-solid fa-plus',
        }));
    }
}