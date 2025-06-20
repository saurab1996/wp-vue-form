import type { DataTableFilterMeta } from 'primevue/datatable';
export interface TableColumns {
    [index: string]: TableColumn;
}
export interface TableColumn {
    header: string;
    sortable: boolean;
    dataType?: string;
    filter?: ColumnFilter | false;
    style: string;
    class?: string;
}
export interface ColumnFilter {
    type: string;
    placeholder: string;
    mode: string;
    global?: boolean;
    class?: string;
    options?: {
        label: string;
        value: string;
    }[];
}
export interface ColumnFilterResult {
    globalField: string[];
    data: DataTableFilterMeta;
}
export interface TableRow {
    date?: string | null | undefined;
    status?: string | null | undefined;
}
export declare type StatusSoverity<T extends string> = (string & {}) | T;
