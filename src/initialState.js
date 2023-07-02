
const user = JSON.parse(localStorage.getItem('profile'))

export const initialState = {
    items: [
        {truckNumber: '', ticketNumber:'',hauledFrom:'',hauledTo:'', unitPrice: '', quantity: '', discount: ''},
    ],
    total: 0,
    notes: user?.userProfile?.paymentDetails,
    rates: '',
    vat: 0,
    currency: '',
    invoiceNumber: 20,
    status: '',
    type: 'Invoice',
    creator: '',
}
