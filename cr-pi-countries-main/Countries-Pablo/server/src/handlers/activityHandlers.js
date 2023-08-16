  // Importing activity controllers
  const { getActivity } = require("../controllers/Activity/getActivity");
  const { postActivity } = require("../controllers/Activity/postActivity");

  // Function to handle responses from the server
  const handleResponse = async (req, res, action, ...args) => {
    try {
      // Execute the action and get the result
      const result = await action(...args);
      // Send the result with a 200 status code
      res.status(200).json(result);
    } catch (error) {
      // If an error occurs, send the error message with a 500 status code
      res.status(500).json({ error: error.message });
    }
  };
  
  // Handler for POST activity requests
  const postActivityHandler = (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    // Handle the response of the postActivity action
    handleResponse(req, res, postActivity, name, difficulty, duration, season, countries);
  };
  
  // Handler for GET activity requests
  const getActivityHandler = (req, res) => {
    // Handle the response of the getActivity action
    handleResponse(req, res, getActivity);
  };
  
  // Export the handlers
  module.exports = {
    postActivityHandler,
    getActivityHandler,
  };
