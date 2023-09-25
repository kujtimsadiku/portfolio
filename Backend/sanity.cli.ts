import {defineCliConfig} from 'sanity/cli'
require("dotenv").config();

module.exports = defineCliConfig({
  api: {
    projectId: process.env.projectID,
    dataset: process.env.production
  }
})
