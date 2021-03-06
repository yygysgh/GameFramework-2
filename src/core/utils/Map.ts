export default class Map<K, T> {
    private readonly _values: T[];
    private readonly _keys: K[];

    public constructor() {
        this._keys = [];
        this._values = [];
    }

    public getIndexByKey(key: K): number {
        return this._keys.indexOf(key);
    }

    public getIndexByValue(value: T): number {
        return this._values.indexOf(value);
    }

    public set(key: K, value: T): void {
        let index = this.getIndexByKey(key);
        if (index < 0) {
            this._values.push(value);
            this._keys.push(key);
        } else {
            this._values[index] = value;
        }
    }

    public get(key: K): T {
        let index = this.getIndexByKey(key);
        if (index < 0) return;
        return this._values[index];
    }

    public remove(key: K): void {
        let index = this.getIndexByKey(key);
        if (index >= 0) {
            this._values.splice(index, 1);
            this._keys.splice(index, 1);
        }
    }

    public removeByValue(value: T): void {
        let index = this.getIndexByValue(value);
        if (index >= 0) {
            this._values.splice(index, 1);
            this._keys.splice(index, 1);
        }
    }


    public clear(): void {
        this._keys.length = 0;
        this._values.length = 0;
    }

    public values() {
        return this._values.concat();
    }

    public keys() {
        return this._keys.concat();
    }
}
