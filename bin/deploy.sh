#/bin/bash
set -e

git config user.email akameco.t@gmail.com
git config user.name akameco

touch out/.nojekyll

npm run gh-pages -- -r https://$GH_TOKEN@github.com/PixivDeck/PixivDeck.github.git --dotfiles -b master
