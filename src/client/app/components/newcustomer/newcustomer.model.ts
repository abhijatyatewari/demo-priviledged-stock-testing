import { FormControl, FormGroup, Validators } from '@angular/forms';

function generateCustomerId() {
    let MIN_ID = 11;
    let MAX_ID = 21;

    return Math.floor(
        Math.random() * (MAX_ID - MIN_ID) + MIN_ID);
}

const MIN_CREDIT: number = 1000;
const MAX_CREDIT: number = 50000;

function validateCreditLimitFunction(minCredit: number = MIN_CREDIT, maxCredit: number = MAX_CREDIT) {
    return function (formControl: FormControl): any {
        let status: any = null;
        let creditLimitValue = formControl.value;
        let validationStatus = creditLimitValue >= minCredit &&
            creditLimitValue <= maxCredit;

        if (!validationStatus)
            status = {
                validateCreditLimitFunction: true
            }

        return status;
    };
}

const PHONE_EXPRESSION = /^\d{5}-\d{5}$/;

let customerFormGroup: FormGroup = new FormGroup(
    {
        id: new FormControl(generateCustomerId()),
        name: new FormControl('', [Validators.required, Validators.minLength(10)]),
        address: new FormControl(''),
        credit: new FormControl(0, [Validators.required, validateCreditLimitFunction()]),
        status: new FormControl(false),
        phone: new FormControl('', [Validators.required, Validators.pattern(PHONE_EXPRESSION)]),
        remarks: new FormControl('')
    });

export default customerFormGroup;
