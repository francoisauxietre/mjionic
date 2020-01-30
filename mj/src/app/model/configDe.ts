import {De} from './De';

export class ConfigDe {
    config: De[];

    add(de: De) {
        this.config.push(de);
    }
    remove(de: De) {
        this.config = this.config.filter(localDe => localDe !== de);
    }
}


