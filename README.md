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

# create .nojekyll file for GitHub Pages
touch docs/.nojekyll

# add CNAME for custom domain
echo "lucasvoron.com" > docs/CNAME

# commit and push to GitHub
git add docs/
git commit -m "Deploy: Update site"
git push origin lsv-portfolio-update
```
Go into github settings -> pages -> ensure DNS is on for custom domain.