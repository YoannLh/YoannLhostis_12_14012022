
/**
 * @class
 * @classdesc Manage all calls to APi with theirs differentes routes. Then calls are made in context
 */

class Caller { 
    constructor() {
        this.state = {
            id: ""
        }
    }
    /**
     * Get param id in url then get id in API
     * @returns { Promise }
     * @return { Promise.resolve Number } id
     * @return { Promise.reject Number } error
     */
    async getId()  {
        let params = new URLSearchParams(document.location.search.substring(1));
		this.id = params.get("id");
        try {
            const response = await fetch(`http://localhost:3001/user/${this.id}`);
            const parsed = response
            return this.status = await parsed.status
        }
        catch(err) {
            console.log(err)
        }
    }
    /**
     * Get User in API
     * @returns { Promise }
     * @returns {Promise.resolve Object } id, score and nutriscore
     * @returns {Promise.reject<Error> } HTML error
     */
    async getUser() {
        try {
            const response = await fetch(`http://localhost:3001/user/${this.id}`);
            const parsed = await response.json();
            return this.parsed = await parsed.data
        }
        catch(err) {
            console.log(err)
            window.location.href = '*'
        }
    }
    /**
     * Get activity inAPI
     * @returns { Promise }
     * @returns {Promise.resolve Object } id, activities
     * @returns {Promise.reject<Error> } HTML error
     */
    async getActivity() {
        try {
            const response = await fetch(`http://localhost:3001/user/${this.id}/activity`);
            const parsed = await response.json();
            return this.userActivity = await parsed.data;
        }
        catch(err) {
            console.log(err)
        }
    }/**
     * Get sessions in APi
     * @returns { Promise }
     * @returns {Promise.resolve Object } id, sessions by day
     * @returns {Promise.reject<Error> } HTML error
     */
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
    /**
     * Get performance in API
     * @returns { Promise }
     * @returns {Promise.resolve Object } id, performances by day
     * @returns {Promise.reject<Error> } HTML error
     */
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

export default Caller


