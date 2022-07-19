# Table of contents
- [Table of contents](#table-of-contents)
  - [Docs](#docs)
  - [Steps](#steps)
    - [Get my profile](#get-my-profile)
  - [How to get the new url, dynamic routing](#how-to-get-the-new-url-dynamic-routing)
    - [Extra packages](#extra-packages)
  - [???](#)


## Docs
- (Lens)[https://docs.lens.xyz/docs/api-links]
- (Get profile)[https://docs.lens.xyz/docs/get-profile]
- (Get user posts)[https://docs.lens.xyz/docs/publication-1]


## Steps
- Start a new Next project
- Get the basic boilerplate GraphQL `apollo-client.js`
- Wrap `_app.js` around the `ApolloProvider`
- Do & Modularize the request for *recommendProfiles* in `index.js`
- Install & add tawilind stuff (.config, npm & imports in `styles/globals.css`)
- Do a dynamic routing for every profile along whit another Query stuff (`queries/fetchEntireProfile.js`, `pages/profile/[id].js`)


### Get my profile
- get Dec id from (LensFrens)[https://www.lensfrens.xyz/hachikoi.lens]
- Parse to Hex and (wualah)[http://localhost:3000/profile/0xa9da]


## How to get the new url, dynamic routing
```js
import { useRouter } from "next/router";

// inside RFC
const router = useRouter();
const { id } = router.query;
// TODO: find a better way to do this
```


### Extra packages
**Connect whit Lens API**
- npm install @apollo/client graphql

**Tailwind**
- npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


## ???
- "𒐪"
  