import type { DataViewPassThroughOptions } from "primevue/dataview";

export default {
  content: {
    class: [
      // Spacing
      "p-0",

      // Shape
      "border-0",

      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
    ],
  },
  header: {
    class: [
      "font-bold",

      // Spacing
      "p-4",

      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-50 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700 border-y",
    ],
  },
} satisfies DataViewPassThroughOptions;
