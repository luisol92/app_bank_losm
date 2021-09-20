export interface Menu {
    nombre: string, //Nombre de la opción del menú
    path: string, //Path el cual va a redireccionar
    pathConfigu : string, //Path de la configuración de acuerdo al routing
    indMenu: boolean, //True indica que se debe de mostrar la opción del menú , false indica que no la debe de mostrar sino la fecha de atras
    indOption : boolean, //True indica si se debe de mostrar la opción en el menú
    icon? : string //Ruta del icono correspondiente
}
