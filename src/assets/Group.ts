import { List } from "./List";

export class Group {
    private _name: string;
    private _lists: List[] | null;

    constructor(
        name: string = "Untitled group", 
        lists: List[] | null = null
    ) {
        this._name = name;
        this._lists = lists;
    }

    public get name() { return this._name }
    public set name(name: string) { this._name = name }

    public get lists() { return this._lists }
    public set lists(lists: List[] | null) { this._lists = lists }
}