module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Name for your project"
    },
    description: {
      type: "string",
      required: false,
      message: "Description for your project",
      default: "My website with nuxt-edge and TypeScript"
    },
    author: {
      type: "string",
      message: "Author",
      default: "Typed Nuxt <nuxt-typescript-edge-template@example.com>"
    },
    color: {
      type: "string",
      message: "Color for loading bar",
      default: "#3B8070"
    }
  },
  completeMessage:
    "{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}"
}
