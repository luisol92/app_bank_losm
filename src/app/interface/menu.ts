export interface Menu {
    nombre: string, //Nombre de la opción del menú
    path: string, //Path el cual va a redireccionar
    pathConfigu : string, //Path de la configuración de acuerdo al routing
    indMenu: boolean, //True indica que se debe de mostrar la opción del menú , false indica que no la debe de mostrar sino la fecha de atras
    indOption : boolean, //True indica si se debe de mostrar la opción en el menú lateral
    indOptionHor : boolean,//True si se muestra en el meú horizontal y false si no lo debe de mostrar
    icon? : string, //Ruta del icono correspondiente
    icon_gray? :string //ruta gris
}
