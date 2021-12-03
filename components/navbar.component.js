class NavbarComponent {
    get clients() {return $('//div[@id="top-menu"]//a[.="Clients"]')}
    get orders() {return $('//div[@id="top-menu"]//a[.="Orders"]')}
    get estimates() {return $('//div[@id="top-menu"]//a[.="Estimates"]')}
    get invoices() {return $('//div[@id="top-menu"]//a[.="Invoices"]')}
    get payments() {return $('//div[@id="top-menu"]//a[.="Payments"]')}
    get schedule() {return $('//div[@id="top-menu"]//a[.="Schedule"]')}
}

export default new NavbarComponent();