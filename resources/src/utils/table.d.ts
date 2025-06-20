import type { TableColumns, ColumnFilterResult } from "@/utils/interfaces";
import type { DataTableSortEvent } from 'primevue/datatable';
export declare const updateFilterParams: (params: DataTableSortEvent) => DataTableSortEvent;
export declare const getColumnFilterData: (columns?: TableColumns | {}) => ColumnFilterResult;
