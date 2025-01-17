class ApiSportEnergy {
  // Definition of a constant with the base URL of the API
  static BASE_URL = "https://your-energy.b.goit.study/api";

  // Error handling for asynchronous methods. Takes a method and logs the error message to the console in case of failure.
  static handleErrors(method) {
    return async () => {
      try {
        return await method();
      } catch (error) {
        console.error("Error during request: ", error.message); // Logs the error to the console
      }
    };
  }

  // A universal method for making requests and parsing JSON responses
  static async fetchJson(url, options) {
    const response = await fetch(url, options); // Sends the request
    return response.json(); // Parses the response as JSON
  }

  // Method for fetching motivational quotes from the `/quote` endpoint
  async getQuotes() {
    // Error handling for fetching data
    const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
      return await ApiSportEnergy.fetchJson(`${ApiSportEnergy.BASE_URL}/quote`);
    });
    return await wrappedMethod(); // Executes the method with error handling
  }

  // Method for fetching data based on specific filters (e.g., name)
  async getByFilterName(data) {
    const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
      const params = new URLSearchParams({ ...data }); // Creates URL parameters from input data
      return await ApiSportEnergy.fetchJson(
        `${ApiSportEnergy.BASE_URL}/filters?${params}`
      );
    });
    return await wrappedMethod();
  }

  // Method for fetching data based on category filters
  async getByFilterCategory(data) {
    const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
      const params = new URLSearchParams({ ...data }); // Creates URL parameters
      return await ApiSportEnergy.fetchJson(
        `${ApiSportEnergy.BASE_URL}/exercises?${params}`
      );
    });
    return await wrappedMethod();
  }

  // Method for fetching details of a single exercise by its ID
  async getOneExercises(id) {
    const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
      return await ApiSportEnergy.fetchJson(
        `${ApiSportEnergy.BASE_URL}/exercises/${id}`
      );
    });
    return await wrappedMethod();
  }

  // Method for adding a rating to a specific exercise by its ID
  async addExercisesRate(id, body) {
    const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
      const requestOptions = {
        method: "PATCH", // HTTP method for partially updating data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Converts data to JSON format
      };
      return await ApiSportEnergy.fetchJson(
        `${ApiSportEnergy.BASE_URL}/exercises/${id}/rating`,
        requestOptions
      );
    });
    return await wrappedMethod();
  }

  // Method for adding a subscription using an email address
  async addSubscription(email) {
    const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
      const requestOptions = {
        method: "POST", // HTTP method for creating new resources
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email), // Sends the email address as JSON
      };
      return await ApiSportEnergy.fetchJson(
        `${ApiSportEnergy.BASE_URL}/subscription`,
        requestOptions
      );
    });
    return await wrappedMethod();
  }
}

// Creates an instance of the ApiSportEnergy class, enabling the use of API methods
const fetchSportEnergy = new ApiSportEnergy();

// Exports the instance as the default module to be used in other files
export default fetchSportEnergy;
