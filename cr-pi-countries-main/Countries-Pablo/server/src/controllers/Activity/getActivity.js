// Importing Activity and Country models from the database
const { Activity, Country } = require('../../db');

// Asynchronous Function to get all activities
const getActivity = async () => {
  // Fetching all activities and including associated countries
  const allActivities = await Activity.findAll({ include: Country });
  // Mapping through all activities and converting activity names to lowercase
  const filterActivity = allActivities.map((activity) => activity.name.toLowerCase());

  // Removing duplicates from the list of activities
  const result = [...new Set(filterActivity)];
  // Returning the final list of unique activities
  return result;
};

// Exporting the getActivity function
module.exports = {
  getActivity,
};
