import {Dice} from './Dice';

// mes classes metiers: ici un configuration de dé permettant de garder un ensemble de dé
// pour ne pas toujours avoir à les refaires

export class ConfigDe {
    config: Dice[];

    public add(de: Dice) {
        this.config.push(de);
    }
    public remove(de: Dice) {
        this.config = this.config.filter(localDe => localDe !== de);
    }
}


