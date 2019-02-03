# Zeit Airtable Helper
## Install

`now`

## Setup and application secret
in terminal:
`now secrets add airtable-key "API_KEY_HERE"`

(These steps below are already done)

in now.json add a section:
`"env": {
  "AIRTABLE_KEY": "@airtable_key"
}`

in node code, get the value with:
`const key = process.env.AIRTABLE_KEY`