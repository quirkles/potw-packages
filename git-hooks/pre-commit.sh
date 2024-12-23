#!/bin/sh
RED="\033[1;31m"
GREEN="\033[1;32m"
NC="\033[0m"

# Get affected projects with the lint command

AFFECTED=$(nx show projects --affected -t lint -p "packages/*")

for project in $AFFECTED
do
  echo "Linting affected project: $project"
  nx lint "$project" --fix
  linter_exit_code=$?
  if [ $linter_exit_code -ne 0 ]
  then
    echo "${RED} ❌ Error linting project $project ${NC}"
    exit 1
  else
    echo "${GREEN} ✔ Linted project $project ${NC}"
    echo "Adding linted files to git"
    git add "packages/$project"
  fi
done
