import { Group } from "./Group";
import { Task } from "./Task";

export class List {
    private _name: string
    private _color: string
    private _tasks: Task[]
    private _icon: string
    private _selected: boolean

    constructor(
        name: string = "Untitled list", 
        color: string = "blue", 
        tasks: Task[] = [], 
        icon: string = "list", 
        selected: boolean = false
    ) {
        this._name = name;
        this._color = color;
        this._tasks = tasks;
        this._icon = icon;
        this._selected = selected;
    }

    public get name() { return this._name }
    public set name(name: string) { this._name = name }

    public get color() { return this._color }
    public set color(color: string) { this._color = color }
    
    public get tasks() { return this._tasks }
    public set tasks(tasks: Task[]) { this._tasks = tasks }

    public get icon() { return this._icon }
    public set icon(icon: string) { this._icon = icon }

    public get selected() { return this._selected }
    public set selected(selected: boolean) { this._selected = selected }
}