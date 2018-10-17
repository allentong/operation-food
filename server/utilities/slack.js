module.exports = { createSlackWrapper };

function createSlackWrapper(attachment) {
  return {
    response_type: "in_channel",
    text: "Eat here:",
    attachment: [
      {
        text: attachment.name
      },
      {
        text: attachment.address
      },
      {
        text: attachment.yelp
      }
    ]
  };
}
