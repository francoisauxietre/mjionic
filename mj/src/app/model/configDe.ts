import {Dice} from './Dice';

export class ConfigDe {
    config: Dice[];

    public add(de: Dice) {
        this.config.push(de);
    }
    public remove(de: Dice) {
        this.config = this.config.filter(localDe => localDe !== de);
    }
}


