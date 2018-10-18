module.exports = { createSlackWrapper };

function createSlackWrapper(attachment) {
  return {
    response_type: "in_channel",
    text: "Can't figure out where to eat?  Eat here...",
    attachments: [
      {
        title: "Place",
        text: attachment.name
      },
      {
        title: "Address",
        text: attachment.address
      },
      {
        title: "Yelp",
        text: attachment.yelp
      }
    ]
  };
}
