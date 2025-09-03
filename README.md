This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

```bash
nvm use 20

# build
npm run build

# remove old docs and recreate
rm -rf docs
mkdir -p docs

# copy build artifacts (.next and public) into docs
cp -R out/. docs/

touch docs/.nojekyll
```
Go into github settings -> pages -> ensure DNS is on for custom domain.