
class Caller { 
    async callApi() {
        try {
            const response = await fetch('http://localhost:3001/user/18');
            const parsed = await response.json();
            return this.response = await parsed.data;
        }
        catch(err) {
            console.log(err)
        }
    }
}

export default Caller

