import type { InputTextPassThroughOptions } from "primevue/inputtext";

export default {
  root: ({ props, context, parent }) => ({
    class: [
      // Font
      "font-sans leading-none",

      // Spacing
      "m-0",
      {
        "px-4 py-4": props.size == "large",
        "px-2 py-2": props.size == "small",
        "p-3": props.size == null,
      },

      // Shape
      { "rounded-md": parent.instance.$name !== "InputGroup" },
      { "first:rounded-l-md rounded-none last:rounded-r-md": parent.instance.$name == "InputGroup" },
      { "border-0 border-y border-l last:border-r": parent.instance.$name == "InputGroup" },
      { "first:ml-0 ml-[-1px]": parent.instance.$name == "InputGroup" && !parent.props.showButtons },

      // Colors
      "text-surface-600 dark:text-surface-200",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-600",

      // States
      {
        "hover:border-primary-500 dark:hover:border-primary-400": !context.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50":
          !context.disabled,
        "opacity-60 select-none pointer-events-none cursor-default": context.disabled,
      },

      // Misc
      "appearance-none",
      "transition-colors duration-200",
    ],
  }),
} satisfies InputTextPassThroughOptions;
