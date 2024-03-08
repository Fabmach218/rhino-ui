export const AccordionProps = [
    {
        name: "as",
        description: "The element type to be rendered.",
        required: false,
        types: ["string"],
        default: null,
    },
    {
        name: "alignItems",
        description: "How to align the contents along the cross axis.",
        required: false,
        types: ["CssAlignItemsValue | ResponsiveProp<CssAlignItemsValue>"],
        default: null,
    },
    {
        name: "alignContent",
        description: "How to align the contents when there is extra space in the cross axis. This property has no effect when there is only one line of flex items.",
        required: false,
        types: ["CssAlignContentValue | ResponsiveProp<CssAlignContentValue>"],
        default: null,
    }

]