# Git Hooks

Git hooks are set(s) of scripts that will be executed each time a particular event (trigger i.e commit, push, receive) occurs.

This codebase utilizes [husky](https://typicode.github.io/husky/#/) to run such scripts during various stages of our git workflow, in combination with [lint-staged](https://github.com/okonet/lint-staged) that enables us to automate the tedious part of the workflow against the staged git files like formatting and linting.

In this codebase, we only enables 2 types of hooks:

- [precommit hook](#precommit-hook)
- [prepush hook](#prepush-hook)

## precommit hook

Pre-commit hook will be executed before commit (`git commit -m "commit message"`), the action configured during this stage is linting using eslint and formatting using prettier.

If there is a linting error found, the commit will be rejected and developers have to fix the particular linting error to follow the linting standard as defined in the `.eslintrc.js` file before being able to re-commit.

## prepush hook

Pre-push hook will be executed before the code is pushed to remote repository (`git push origin`). The action configured during this stage is test scripts that will be run against the code (`yarn test`).

This is necessary in order to catch test cases that fail due to new feature development or regression due to fixes way earlier before the code is available in the remote repository (which in turns will save us a lot of time and cost for running the pipeline).
