---
title: How to enforce Conventional Commit messages using Git hooks with husky & commitlint
date: Aug 18, 2022
cover: https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
excerpt: In this guide I will be showing you how to enforce the use of Conventional Commit messages in Git.
---

In this guide I will be showing you how to enforce the use of [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) messages in Git. If you don't know what Conventional Commits are, [you can read my other post here](https://jouwdan.com/blog/an-introduction-to-conventional-commits). Let's get right into it.

Go ahead and open up your repo in Terminal. Let's install husky, commitlint cli & config-conventional as development dependencies:

```
npm install --save-dev husky @commitlint/cli @commitlint/config-conventional
```

Next, we will enable Git hooks using Husky and add the `commit-msg` by entering the following commands:

```
npx husky install
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

Create the following files in the root of your repo to configure commitlint

`.commitlintrc.json`

```
{
  "extends": ["@commitlint/config-conventional"]
}
```

`commitlint.config.js`

```
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

And we're done! A quick and painless method of enforcing conventional commit messages. Give it a go by trying to commit to Git with a non-conventional messages.

```
git commit -a -m "Set up Conventional Commits using Husky and commitlint"
```

You should get the below error

```
⧗   input: Set up Conventional Commits using Husky and commitlint
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```

Let's now change this to be a conventional commit:

```
git commit -m 'feat: enforce conventional commits using husky and commitlint'
```

Cover Photo by [Praveen Thirumurugan](https://unsplash.com/@praveentcom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/KPAQpJYzH0Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  