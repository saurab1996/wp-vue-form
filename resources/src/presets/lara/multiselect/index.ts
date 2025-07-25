import type { MultiSelectPassThroughOptions } from "primevue/multiselect";

export default {
  root: ({ props, state }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",

      // Shape
      "w-full md:max-w-[20rem]",
      "rounded-md",

      // Color and Background
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-700",

      // Transitions
      "transition-all",
      "duration-200",

      // States
      "hover:border-primary-500 dark:hover:border-primary-300",
      { "outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50": state.focused },

      // Misc
      "cursor-pointer",
      "select-none",
      { "opacity-60": props.disabled, "pointer-events-none": props.disabled, "cursor-default": props.disabled },
    ],
  }),
  labelContainer: {
    class: "overflow-hidden flex flex-auto cursor-pointer ",
  },
  label: ({ props }) => ({
    class: [
      "leading-none",
      "block ",

      // Spacing
      {
        "p-3": props.display !== "chip",
        "py-3 px-3": props.display === "chip" && !props?.modelValue?.length,
        "py-1.5 px-3": props.display === "chip" && props?.modelValue?.length > 0,
      },

      // Color
      {
        "text-surface-800 dark:text-white/80": props.modelValue,
        "text-surface-400 dark:text-surface-500": !props.modelValue,
      },
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",

      // Transitions
      "transition duration-200",

      // Misc
      "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis",
    ],
  }),
  token: {
    class: [
      // Flex
      "inline-flex items-center",

      // Spacings
      "py-1.5 px-3 mr-2",

      // Shape
      "rounded-[1.14rem]",

      // Colors
      "bg-surface-200 dark:bg-surface-700",
      "text-surface-700 dark:text-white/70",

      // Misc
      "cursor-default",
    ],
  },
  removeTokenIcon: {
    class: [
      // Shape
      "rounded-md leading-6",

      // Spacing
      "ml-2",

      // Size
      "w-4 h-4",

      // Transition
      "transition duration-200 ease-in-out",

      // Misc
      "cursor-pointer",
    ],
  },
  trigger: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",

      // Color and Background
      "bg-transparent",
      "text-surface-500",

      // Size
      "w-12",

      // Shape
      "rounded-tr-md",
      "rounded-br-md",
    ],
  },
  panel: {
    class: [
      // Position
      "absolute top-0 left-0",

      // Shape
      "border-0 dark:border",
      "rounded-md",
      "shadow-md",

      // Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-800 dark:text-white/80",
      "dark:border-surface-700",
    ],
  },
  header: {
    class: [
      "flex items-center justify-between",
      // Spacing
      "py-3 px-5",
      "m-0",

      //Shape
      "border-b",
      "rounded-tl-md",
      "rounded-tr-md",

      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-100 dark:bg-surface-800",
      "border-surface-300 dark:border-surface-700",
    ],
  },
  headerCheckboxContainer: {
    class: [
      "relative",

      // Alignment
      "inline-flex",
      "align-bottom",

      // Size
      "w-6",
      "h-6",

      // Misc
      "cursor-pointer",
      "select-none",
    ],
  },
  headerCheckbox: ({ context, state }) => ({
    class: [
      // Alignment
      "flex",
      "items-center",
      "justify-center",

      // Size
      "w-6",
      "h-6",

      // Shape
      "rounded-lg",
      "border-2",

      // Colors
      "text-surface-600",
      {
        "border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900": !context?.selected,
        "border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400": context?.selected,
      },

      "hover:border-primary-500",
      { "outline-none outline-offset-0 ring-2 ring-primary-400/50 dark:ring-primary-300/50": state.focused },
    ],
  }),
  closeButton: {
    class: [
      "relative",

      // Flexbox and Alignment
      "flex items-center justify-center",

      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-8 h-8",

      // Shape
      "border-0",
      "rounded-full",

      // Colors
      "text-surface-500",
      "bg-transparent",

      // Transitions
      "transition duration-200 ease-in-out",

      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset",
      "focus:ring-primary-400/50 dark:focus:ring-primary-300/50",

      // Misc
      "overflow-hidden",
    ],
  },
  wrapper: {
    class: [
      // Sizing
      "max-h-[200px]",

      // Misc
      "overflow-auto",
    ],
  },
  list: {
    class: "py-3 list-none m-0",
  },
  item: ({ context }) => ({
    class: [
      // Font
      "font-normal",
      "leading-none",

      // Flexbox
      "flex items-center",

      // Position
      "relative",

      // Shape
      "border-0",
      "rounded-none",

      // Spacing
      "m-0",
      "py-3 px-5",

      // Color
      { "text-surface-700 dark:text-white/80": !context.focused && !context.selected },
      {
        "bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":
          context.focused && !context.selected,
      },
      {
        "bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":
          context.focused && context.selected,
      },
      {
        "bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":
          !context.focused && context.selected,
      },

      //States
      { "hover:bg-surface-100 dark:hover:bg-surface-600/80": !context.focused && !context.selected },
      {
        "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80":
          context.focused && !context.selected,
      },

      // Transitions
      "transition-shadow",
      "duration-200",

      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap",
    ],
  }),
  checkboxContainer: {
    class: [
      "relative",

      // Alignment
      "inline-flex",
      "align-bottom",

      // Space
      "mr-2",

      // Size
      "w-6",
      "h-6",

      // Misc
      "cursor-pointer",
      "select-none",
    ],
  },
  checkbox: ({ context }) => ({
    class: [
      // Alignment
      "flex",
      "items-center",
      "justify-center",

      // Size
      "w-6",
      "h-6",

      // Shape
      "rounded-lg",
      "border-2",

      // Colors
      "text-surface-600",
      {
        "border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900": !context?.selected,
        "border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400": context?.selected,
      },

      "hover:border-primary-500 focus:outline-none",
      "focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
    ],
  }),
  checkboxIcon: {
    class: [
      // Font
      "text-base leading-none",

      // Size
      "w-4",
      "h-4",

      // Colors
      "text-white dark:text-surface-900",

      // Transitions
      "transition-all",
      "duration-200",
    ],
  },
  itemGroup: {
    class: [
      //Font
      "font-bold",

      // Spacing
      "m-0",
      "p-3 px-5",

      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-600/80",

      // Misc
      "cursor-auto",
    ],
  },
  filterContainer: {
    class: "relative w-full mx-2",
  },
  filterInput: {
    class: [
      // Font
      "font-sans",
      "leading-none",

      // Sizing
      "pr-7 py-3 px-3",
      "-mr-7",
      "w-full",

      //Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",

      // Shape
      "border",
      "rounded-lg",
      "appearance-none",

      // Transitions
      "transition",
      "duration-200",

      // States
      "hover:border-primary-500 dark:hover:border-primary-300",
      "focus:ring focus:outline-none focus:outline-offset-0",
      "focus:ring-primary-400/50 dark:focus:ring-primary-300/50",

      // Misc
      "appearance-none",
    ],
  },
  filterIcon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"],
  },
  emptyMessage: {
    class: [
      // Font
      "leading-none",

      // Spacing
      "py-3 px-5",

      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent",
    ],
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
} satisfies MultiSelectPassThroughOptions;
