import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypesEN} from './schemas/en'
import {schemaTypesFIN} from './schemas/fin'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: '98nly2pf',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypesEN,
  },
})
