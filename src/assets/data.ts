

export const ListsAndGroups = [
    {
        type: "list",
        title: "Everyday Things after School",
        color: "text-green-700",
        tasks: [

        ]
    },
    {
        type: "list",
        title: "Pet Projects",
        color: "text-gray-700",
        tasks: [

        ]
    },
    {
        type: "group",
        title: "NMT",
        color: "text-gray-700",
        lists: [
            {
                type: "list",
                title: "English | NMT",
                color: "text-blue-700",
                tasks: [
        
                ]
            },
            {
                type: "list",
                title: "Math | NMT",
                color: "text-blue-700",
                tasks: [
        
                ]
            },
        ]
    },
    {
        type: "group",
        title: "Second group",
        color: "text-gray-700",
        lists: undefined,
    },
];

export type MenuBtn = {
    type?: "button",
    name: string,
    icon: string,
    color: string,
    onclick: (() => void) | null,
}
  
export type NestedMenu = {
    type: "nested-menu",
    name: string,
    icon: string,
    options: MenuBtn[],
}

export type MenuThemes = {
    type: "themes",
    colors: string[],
}

export type Menu = (MenuBtn | NestedMenu | MenuThemes)[]

export const listMenu: Menu[] = // List's dropdown menu, which locate in <main>
[
    [
        {
            type: "button",
            name: "Rename list",
            icon: "input-cursor",
            color: "",
            onclick: null,
        },
        {
            type: "nested-menu",
            name: "Move list to ...",
            icon: "double arrow-left-group",
            options: 
            [
                { // nested options don't have prop "type", because they can have only "button" type
                    name: "Second group",
                    icon: "group",
                    color: "",
                    onclick: null,
                }
            ]
        },
        {
            type: "button",
            name: "Remove from group",
            icon: "double arrow-right-group",
            color: "",
            onclick: null,
        },
        {
            type: "nested-menu",
            name: "Sort by",
            icon: "arrow-down-up",
            options: 
            [
                {
                    name: "Importance",
                    icon: "star",
                    color: "",
                    onclick: null,
                },
                {
                    name: "Due date",
                    icon: "calendar-week",
                    color: "",
                    onclick: null,
                },
                {
                    name: "Added to My Day",
                    icon: "sun",
                    color: "",
                    onclick: null,
                },
                {
                    name: "Alphabetically",
                    icon: "arrow-down-up",
                    color: "",
                    onclick: null,
                },
                {
                    name: "Creation date",
                    icon: "calendar-plus",
                    color: "",
                    onclick: null,
                },
            ]
        },
        {
            type: "themes",
            colors: 
            [
                "blue", "purple", "red", "orange", "green",
                "cyan", "gray", "blue_inverted", "purple_inverted",
                "red_inverted", "orange_inverted", "green_inverted",
                "cyan_inverted", "gray_inverted",
            ]
        },
    ],
    [
        {
            type: "button",
            name: "Delete list",
            icon: "trash",
            color: "text-red-600",
            onclick: null,
        },
    ]
];

export const taskMenu: Menu[] = //dropdown menu of Task 
[
    [
        {
            type: "button",
            name: "Add to My Day",
            icon: "sun",
            color: "",
            onclick: null,
        },
        {
            type: "button",
            name: "Mark as important",
            icon: "star",
            color: "",
            onclick: null,
        },
        {
            type: "button",
            name: "Mark as completed",
            icon: "circle-checked",
            color: "",
            onclick: null,
        },
    ],
    [
        {
            type: "button",
            name: "Due today",
            icon: "calendar-today",
            color: "",
            onclick: null,
        },
        {
            type: "button",
            name: "Due tommorow",
            icon: "double calendar-arrow-right",
            color: "",
            onclick: null,
        },
        {
            type: "button",
            name: "Pick a date",
            icon: "calendar-week",
            color: "",
            onclick: null,
        },
    ],
    [
        {
            type: "nested-menu",
            name: "Move task to ...",
            icon: "arrow-right",
            options: 
            [
                { // nested options don't have prop "type", because they can have only "button" type
                    name: "Tasks",
                    icon: "house",
                    color: "",
                    onclick: null,
                },
                { 
                    name: "Everyday Things after School",
                    icon: "list",
                    color: "",
                    onclick: null,
                },
                { 
                    name: "Pet Projects",
                    icon: "list",
                    color: "",
                    onclick: null,
                },
                { 
                    name: "English | NMT",
                    icon: "list",
                    color: "",
                    onclick: null,
                },
                { 
                    name: "Math | NMT",
                    icon: "list",
                    color: "",
                    onclick: null,
                },
            ]
        },
    ],
    [
        {
            type: "button",
            name: "Delete list",
            icon: "trash",
            color: "text-red-600",
            onclick: null,
        },
    ],
];

export const asideListMenu: Menu[] = // data of List's dropdown menu, which locate in <aside> 
[
    [
        {
            type: "button",
            name: "Rename list",
            icon: "input-cursor",
            color: "",
            onclick: null,
        },
        {
            type: "nested-menu",
            name: "Move list to ...",
            icon: "double arrow-left-group",
            options: 
            [
                { // nested options don't have prop "type", because they can have only "button" type
                    name: "Second group",
                    icon: "group",
                    color: "",
                    onclick: null,
                },
                {
                    name: "NMT",
                    icon: "group",
                    color: "",
                    onclick: null,
                },
            ]
        },
        {
            type: "button",
            name: "Duplicate list",
            icon: "files",
            color: "",
            onclick: null,
        },
    ],
    [
        {
            type: "button",
            name: "Delete list",
            icon: "trash",
            color: "text-red-600",
            onclick: null,
        },
    ]
];

export const groupMenu: Menu[] = // Group's dropdown menu
[
    [
        {
            type: "button",
            name: "Rename group",
            icon: "input-cursor",
            color: "",
            onclick: null,
        },
        {
            type: "button",
            name: "New list",
            icon: "plus-lg",
            color: "",
            onclick: null,
        },
        {
            type: "button",
            name: "Ungroup lists",
            icon: "double arrow-up-group",
            color: "",
            onclick: null,
        },
    ]
]