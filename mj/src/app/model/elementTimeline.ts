// mes classes metiers
// l'element de base de la time line
// un element comprend un id pour l'identifier et pouvoir le stocker plus tard dans une
// base de donnée (MYSQL firebase) et les trier, les ranger etc
// le header sera la titre, la description permet d'ajouter des informations
// le booléen permtttant si besoin d'afficher certaines valeurs ou non

export class ElementTimeLine {
    id: number;
    header: string;
    description: string;
    show: boolean;
}
