#/bin/bash
set -e

git config user.email $GIT_EMAIL
git config user.name $GIT_NAME

touch out/.nojekyll

npm run gh-pages -- -r https://$GH_TOKEN@github.com/PixivDeck/PixivDeck.github.git --dotfiles -b master
