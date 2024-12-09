# Important things

Follow the instructions in the backend README to get the backend running before following these steps to get the front end running.

Then when you're ready to run these commands make sure to run them in a window under the same terminal profile that you have the backend running in. In iTerm2 you can just choose split Horizontally (or Vertically) with current profile under 'Shell' in the menu bar. The reason here is that the frontend needs to run in a poetry shell just like the backend.

# Deal Sourcing Demo Frontend

This is our SvelteKit frontend we're building as part of lyrics thing

## Development

Install dependencies:

```bash
npm install
```

Install dotenv:
`pip install python-dotenv`

Start the dev server:
This needs to run in a poetry shell!

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Currently the first screen is the `uuid/screens/new` page
e.g.: `http://localhost:5173/c65a7dc7-a785-4db4-a534-9830cbfaa7e8/screens/new`

## Building for production

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
