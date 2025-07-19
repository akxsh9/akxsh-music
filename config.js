

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "3d61ac3c2bd54256b3077223af9defd8",
  spotifyClientSecret : "c6881ddaf3ca4278b89cb5a7fa9cc413",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Anakin",
      password: "anakin",
      host: "us.apsara.lol",
      port:  25575,
      secure: false
    }
  ]
}
