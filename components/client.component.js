class ClientComponent {
    get firstName() {return $('[qa-id="firstName"]')}
    get lastName() {return $('[qa-id="lastName"]')}
    get companyName() {return $('[qa-id="company"]')}
    get cod() {return $('div[id="phoneNumber1_code"]>div>div>[class="ant-select-selection-item"]')}
    get phoneNumber() {return $('[qa-id="phoneNumber1"]')}
    get ext() {return $('div[id="phoneNumber1_ext"]>input[class="ant-input"]')}
    get email() {return $('[qa-id="email"]')}
    get address() {return $('[qa-id="addressLine1"]')}
    get unit() {return $('[qa-id="addressLine2"]')}
    get zip() {return $('[qa-id="zipCode"]')}
    get city() {return $('[qa-id="city"]')}
    get chooseState() {return $('div[class="ant-select d-block ant-select-single ant-select-show-arrow ant-select-show-search"]>div[class="ant-select-selector"]>span[class="ant-select-selection-item"]')}
    get cancel() {return $('button[class="ant-btn me-2"]')}
    get buttonSave() {return $('//button[span[.="Save"]]')}
}

export default new ClientComponent();