export const userrolecolum =[
    {
        id: 1,
        name:"Title",
        size: "",
        className:"sub-text"
    },
    {
        id: 2,
        name:"Type",
        size: "md",
        className:"sub-text"

    },
    {
        id: 3,
        name:"Active",
        size: "sm",
        className:"sub-text"
    },
    {
        id: 4,
        name:"IsActive",
        size: "md",
        className:"sub-text"

    },
    {
        id:5,
        name:"IsDelete",
        size:"md",
        className:"sub-text"

    }
]

export const formfield=[
    {
        id:1,
        label_class:"form-label",
        label_name:"Title",
        input_class:"form-control",
        type:"text",
        name:"title",
        placeholder:"Enter Title"
    },
    {
        id:2,
        label_class:"form-label",
        label_name:"Slug",
        input_class:"form-control",
        type:"text",
        name:"slug",
        placeholder:"Enter slug"
    },
    {
        id:3,
        label_class:"form-label",
        label_name:"Description",
        input_class:"form-control",
        type:"text",
        name:"description",
        placeholder:"Enter Description"
    },
    {
        id:3,
        label_class:"form-label",
        label_name:"Content",
        input_class:"form-control",
        type:"text",
        name:"content",
        placeholder:"Enter Content"
    },
    {
        id:4,
        label_class:"form-label",
        label_name:"Type",
        input_class:"form-control",
        type:"text",
        name:"type",
        placeholder:"Enter Type"
    },
    {
        id:5,
        label_class:"form-label",
        label_name:"Status",
        input_class:"form-control",
        type:"select",
        name:"type",
        option:[
            { value: "Active", label: "Active" },
            { value: "Pending", label: "Pending" },
            { value: "Suspend", label: "Suspend" },

        ]
    },
    {
        id:6,
        label_class:"form-label",
        label_name:"IsActive",
        input_class:"form-control",
        type:"select",
        name:"type",
        option:[
            {value:"Active", label:"Active"},
            {value:"InActive", label:"InActive"},
        ]
    },
    {
        id:7,
        label_class:"form-label",
        label_name:"IsDelete",
        input_class:"form-control",
        type:"select",
        name:"type",
        option:[
            {value:"IsDeleted", label:"IsDeleted"},
            {value:"IsNotDeleted", label:"IsNotDeleted"},
        ]
    }

]