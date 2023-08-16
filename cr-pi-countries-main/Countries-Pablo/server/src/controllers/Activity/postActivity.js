const { Activity, Country } = require('../../db');

// Function to post a new activity
const postActivity = async (name, difficulty, duration, season, countries, res) => {
  // Creating a new activity with the provided details
  const post = await Activity.create({ name, difficulty, season, duration });
  // Setting the countries for the created activity
  await post.setCountries(countries);

  // Fetching the created activity along with its associated countries
  const activityAndCountry = await Activity.findOne({
    where: { name },
    attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
    include: {
      model: Country,
      through: { attributes: [] },
    },
  });

  // Checking if the activity was created successfully
  if (activityAndCountry) {
    // Sending the created activity as a response
    res.json(activityAndCountry);
  } else {
    // Sending an error response if the activity was not created
    res.status(404).json({ error: 'Activity not found' });
  }
};

module.exports = { postActivity };