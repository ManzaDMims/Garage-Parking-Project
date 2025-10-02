type Ticket = {
    paid: boolean;
};

class GarageParking {

    private tickets: number[];
    private parkingSpaces: number[];
    private currentTicket: Ticket;

    constructor(tickets: number[], parkingSpaces: number[]) {
        this.tickets = tickets;
        this.parkingSpaces = parkingSpaces;
        this.currentTicket = { paid: false };
    }

    takeTicket(): void {
        if (this.tickets.length > 0 && this.parkingSpaces.length > 0) {
            this.tickets.pop();
            this.parkingSpaces.pop();
            this.showMessage("Ticket taken. Please park your vehicle.");
        } else {
            this.showMessage("No tickets or parking spaces available.");
        }
    }

    payForParking(): void {
        
        let paymentAmount: string | null = prompt("Please enter payment amount:");
        if (paymentAmount !== null && paymentAmount.trim() !== "") {
            this.currentTicket.paid = true;
            this.showMessage("Your ticket has been paid. You have 15 minutes to leave.");
        }
    }

    leaveGarage(): void {
        if (this.currentTicket.paid) {
            this.showMessage("Thank you, have a nice day!");
            this.parkingSpaces.push(1);
            this.tickets.push(1);
            this.currentTicket = { paid: false };
        } else {
            this.payForParking();
        }
    }

    private showMessage(message: string): void {
        const messageDiv: HTMLElement | null = document.getElementById('message');
        if (messageDiv) {
            messageDiv.textContent = message;
            messageDiv.style.display = 'block';
            setTimeout(() => { messageDiv.style.display = 'none'; }, 5000);
        }
    }
}
