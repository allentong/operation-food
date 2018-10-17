module.exports = { createSlackWrapper };

function createSlackWrapper(attachment) {
  return {
    response_type: "in_channel",
    text: "Eat here:",
    attachments: [
      {
        title: "Name",
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
