import {De} from './De';

export class ConfigDe {
    config: De[];

    public add(de: De) {
        this.config.push(de);
    }
    public remove(de: De) {
        this.config = this.config.filter(localDe => localDe !== de);
    }
}


