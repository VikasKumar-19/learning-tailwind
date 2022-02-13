module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing:{
        18: "4.5rem"
      }
    },
  },
  plugins: [],
}
// If we want to add the class which tailwind is missing like m-13 for margin: 13, we can add it using extend option in theme in this config file
// We just have to tell the which section we need to change like here we need change in spacing section so we can mention like above.