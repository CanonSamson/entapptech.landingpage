import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'entapptech-website',
  title: 'Entapp Tech Website',

  projectId: "g5g7vown"|| 'your-project-id',
  dataset: "production"|| 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
