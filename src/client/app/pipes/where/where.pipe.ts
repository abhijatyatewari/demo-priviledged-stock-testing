import { Pipe, PipeTransform } from '@angular/core';

const MIN_LENGTH: number = 2;
const PIPE_DECLARATION = {
    name: 'where'
};

@Pipe(PIPE_DECLARATION)
class WherePipe implements PipeTransform {
    transform(bindingValue: any[], ...args: any[]): any[] {
        let filteredValues: any[] = [];
        let validation = bindingValue && args && args.length >= MIN_LENGTH;

        if (validation) {
            let filterName = args[0];
            let filterValue = args[1];

            if (filterValue === '') {
                filteredValues = bindingValue;
            } else {
                for (let item of bindingValue) {
                    let fieldValue = item[filterName];

                    if (fieldValue && ((<string>fieldValue).indexOf(filterValue)) >= 0)
                        filteredValues.push(item);
                }
            }
        }

        return filteredValues;
    }
}

export default WherePipe;
