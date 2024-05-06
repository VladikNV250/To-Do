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


export const listOptionsMenu = 
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
]