const COL_DELIMITER: string = ', ';
const NO_OF_TRAIL_CHARACTERS: number = 2;

class ObjectFormatter {
    static format(object: any): string {
        let formattedMessage = '';

        if (object) {
            for (let property in object) {
                let propertyValue = object[property];

                if (propertyValue && typeof propertyValue !== 'function') {
                    formattedMessage += `${propertyValue}${COL_DELIMITER}`;
                }
            }

            formattedMessage = formattedMessage.substr(
                0, formattedMessage.length - NO_OF_TRAIL_CHARACTERS);
        }

        return formattedMessage;
    }
}

export default ObjectFormatter;
