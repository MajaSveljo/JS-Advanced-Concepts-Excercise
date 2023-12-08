const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JobFinderAPI {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${Api.token}`,
      "content-type": "application/json",
    };

    url.search = method === "GET" ? new URLSearchParams(data).toString() : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = method !== "GET" ? JSON.stringify(data) : undefined;

    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get companies (filtered by name if not undefined) */

  static async getCompanies(nameLike) {
    let res = await this.request("companies", { nameLike });
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of jobs (filtered by title if not undefined) */

  static async getJobs(title) {
    let res = await this.request("jobs", { title });
    return res.jobs;
  }

  /** Apply to a job */

  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, "POST");
  }

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "POST");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "POST");
    return res.token;
  }

  /** Save user profile page. */

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "PATCH");
    return res.user;
  }
}
