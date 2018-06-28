

let guest = new Vue({
    el: '.container',
    data: {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        show: false,
        guests: []
    },
    methods: {
        addGuest() {
            this.guests.push(``);
        },
        removeGuest(index) {
            this.guests.splice(index, 1);
        },
        showTable() {
            this.show = true;
        }
    }
});
