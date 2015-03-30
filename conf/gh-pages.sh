#!/usr/bin/env bash

OLD_PWD="$(pwd)"

if [[ -d "/tmp/arts-pages" ]]; then
    rm -rf "/tmp/arts-pages"
fi

if [[ ! -d "/tmp/arts-pages" ]]; then
    mkdir -p "/tmp/arts-pages"
fi

npm run-script build-release

cd "/tmp/arts-pages"
git clone git@github.com:gregoranders/arts.git
cd arts
git checkout -b gh-pages origin/gh-pages
rm -rf *

cp -dpR ${OLD_PWD}/build/release/* ./
git add .
git commit -m "gh-pages" -sS
git push origin gh-pages

cd ${OLD_PWD}
