'use strict';
export const BLOCKINPUTEVENTS = {
    "__type__": "cc.BlockInputEvents",
    "_name": "",
    "_objFlags": 0,
    "node": null,
    "_enabled": true,
    "__prefab": null,
};

export class BlockInputEvents {

    static create() {
        return JSON.parse(JSON.stringify(BLOCKINPUTEVENTS));
    }

    static async migrate(json2D: any) {
        const source = JSON.parse(JSON.stringify(BLOCKINPUTEVENTS));
        for (const key in json2D) {
            const value = json2D[key];
            if (key === '__type__' || value === undefined || value === null) { continue; }
            source[key] = value;
        }
        return source;
    }

    static async apply(index: number, json2D: any, json3D: any) {
        const source = await BlockInputEvents.migrate(json2D[index]);
        json3D.splice(index, 1, source);
        return source;
    }
}
