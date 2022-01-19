
class Caller { 
    constructor() {
        this.state = {
            id: ""
        }
    }
    async getId()  {
        let params = new URLSearchParams(document.location.search.substring(1));
		this.id = params.get("id");
        console.log(this.id)
    }
    async getUser() {
        try {
            const response = await fetch(`http://localhost:3001/user/${this.id}`);
            const parsed = await response.json();
            return this.userData = await parsed.data;
        }
        catch(err) {
            console.log(err)
        }
    }
    async getActivity() {
        try {
            const response = await fetch(`http://localhost:3001/user/${this.id}/activity`);
            const parsed = await response.json();
            return this.userActivity = await parsed.data;
        }
        catch(err) {
            console.log(err)
        }
    }
    async getAverageSessions() {
        try {
            const response = await fetch(`http://localhost:3001/user/${this.id}/average-sessions`);
            const parsed = await response.json();
            return this.userAverageSessions = await parsed.data;
        }
        catch(err) {
            console.log(err)
        }
    }
    async getPerformance() {
        try {
            const response = await fetch(`http://localhost:3001/user/${this.id}/performance`);
            const parsed = await response.json();
            return this.userPerformance = await parsed.data;
        }
        catch(err) {
            console.log(err)
        }
    }
}

// const caller = new Caller()
// caller.getId()

export default Caller


// - `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
// - `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
// - `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
// - `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

