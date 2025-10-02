document.addEventListener('DOMContentLoaded', () => {
    const garage = new ParkingGarage(Array(10).fill(1), Array(10).fill(1));

    document.getElementById('takeTicket').addEventListener('click', () => {
        garage.takeTicket();
    });

    document.getElementById('payForParking').addEventListener('click', () => {
        garage.payForParking();
    });

    document.getElementById('leaveGarage').addEventListener('click', () => {
        garage.leaveGarage();
    });
});

class ParkingGarage {
    constructor(tickets, parkingSpaces) {
        this.tickets = tickets;
        this.parkingSpaces = parkingSpaces;
        this.currentTicket = { paid: false };
    }

    takeTicket() {
        if (this.tickets.length > 0 && this.parkingSpaces.length > 0) {
            this.tickets.pop();
            this.parkingSpaces.pop();
            this.showMessage("Ticket taken. Please park your vehicle.");
        } else {
            this.showMessage("No tickets or parking spaces available.");
        }
    }

    payForParking() {
        
        const paymentAmount = prompt("Please enter payment amount:");
        if (paymentAmount !== null && paymentAmount.trim() !== "") {
            this.currentTicket.paid = true;
            this.showMessage("Your ticket has been paid. You have 15 minutes to leave.");
        }
    }

    leaveGarage() {
        if (this.currentTicket.paid) {
            this.showMessage("Thank you, have a nice day!");
            this.parkingSpaces.push(1)
            this.tickets.push(1);
            this.currentTicket = { paid: false };
        } else {
            this.payForParking();
        }
    }

    showMessage(message) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';
        setTimeout(() => { messageDiv.style.display = 'none'; }, 5000);
    }
}

