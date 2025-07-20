# Portfolio Example

This project is a simple portfolio site that demonstrates continuous integration and deployment to **GitHub Pages**.
The included photo is a simple mock SVG used only for testing purposes.

## Development

The site uses basic HTML and JavaScript. All data is stored in [`src/data.js`](src/data.js) and rendered from [`src/app.js`](src/app.js).
This version defines small rendering functions in `src/app.js` for personal info, skills, and projects so the DOM updates can be reused.

Unit tests are implemented with Node's built-in test runner (`node:test`), a lightweight alternative compatible with Jest's assertions. They verify:

- A photo file exists (using a simple mock SVG so no binary files are needed)
- Phone number, first and last names are defined
- The skills list contains at least five entries
- The projects list contains at least three entries

Run tests locally with:

```bash
npm test
```

## Continuous Integration / Deployment

The workflow [`ci.yml`](.github/workflows/ci.yml) installs dependencies, runs tests, and builds the site using `npm run build`. The resulting `dist` folder is deployed to GitHub Pages automatically.

You can also build locally with:

```bash
npm run build
```

## AI Assistance

AI suggestions were used to outline the testing strategy and to set up the GitHub Actions workflow. The approach was adapted to use Node's built-in test runner instead of Jest because installing external packages was not possible in the execution environment.

## GitHub Pages URL

The live site is automatically deployed from the `main` branch. You can view it here:
<https://fermm2024.github.io/TEST2/>

## Possible Improvements

- Convert the site to React or another component-based framework for easier maintenance.
- Use a data model (e.g., JSON) to load skills and projects dynamically from an external file.
- Extend unit tests to cover DOM rendering or use a headless browser library.
- Break the UI into reusable components to simplify updates and testing.
