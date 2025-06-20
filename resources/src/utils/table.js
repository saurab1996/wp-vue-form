export const updateFilterParams = (params) => {
    // Check if params.filters exists
    if (params.filters) {
        // Iterate through each key-value pair in params.filters
        for (const key in params.filters) {
            // Get the filter object at the current key
            const filter = params.filters[key];
            // Check if filter exists and has constraints
            if (filter && filter.constraints) {
                // Extract constraints as an array or single constraint
                const constraints = Array.isArray(filter.constraints) ? filter.constraints : [filter.constraints];
                // Assign the first constraint to the filter object, or null if no constraints
                params.filters[key] = constraints.length > 0 ? constraints[0] : '';
            }
            else {
                // If filter doesn't exist or has no constraints, set it to null
                params.filters[key] = '';
            }
        }
    }
    // Return the updated params object
    return params;
};
export const getColumnFilterData = (columns = {}) => {
    const columnKeys = Object.keys(columns);
    if (columnKeys.length) {
        return columnKeys.reduce((accumulator, currentKey) => {
            const currentValue = columns[currentKey];
            if (currentValue?.filter) {
                const filterValue = {
                    value: '',
                    matchMode: currentValue.filter.mode,
                };
                accumulator.data[currentKey] = { operator: '', constraints: [filterValue] };
                if (currentValue.filter?.global) {
                    accumulator.data['global'] = { value: '', matchMode: 'contains' };
                    accumulator.globalField.push(currentKey);
                }
            }
            return accumulator;
        }, { globalField: [], data: {} });
    }
    return { globalField: [], data: {} };
};
