export default {
  PORT: process.env.PORT || 8000,
  API_BASE_URL:
    process.env.API_BASE_URL || "https://taste-buddy-api.herokuapp.com/api",
  TOKEN_KEY: process.env.TOKEN_KEY || "taste-buddy-token",
};
