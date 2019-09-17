#!/bin/bash

if [ "$1" == "" ]; then
  echo "Missing require name !"
  exit 1
fi

mkdir -p src/"${1^}";

touch src/"${1^}"/App.js;
touch src/"${1^}"/README.md;
echo "# ${1^}" >> src/"${1^}"/README.md;

mkdir -p src/"${1^}"/views;
mkdir -p src/"${1^}"/components;

mkdir -p assets/"${1^}";


echo ">>> Create template done !!!!!"