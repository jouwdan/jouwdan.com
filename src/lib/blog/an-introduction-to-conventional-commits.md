---
title: An introduction to Conventional Commits
date: Aug 7, 2022
cover: https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80
excerpt: Conventional Commits is a specification for adding human and machine-readable meaning to commit messages.
---

As a student, i've always wondered if there is a standard around commit messages. I thought it would make sense for them to be standardised, and when I started my new role I learned about [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - and it just makes sense! I see a lot of people don't follow any rules and, when it comes to working with a team, without standardisation the commit log can become quite chaotic and uninformative.

Conventional Commits is a specification for adding human and machine-readable meaning to commit messages. It is a lightweight convention on top of commit messages that provides an easy set of rules to help you create an explicit commit history, making it easier to write automated tools on top of. This convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

Conventional Commits have the following structure:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

With Conventional Commits, there are multiple types of commit you can make.

- `feat:` Add a new feature to the codebase (MINOR in semantic versioning).
- `fix:` Fix a bug (equivalent to a PATCH in Semantic Versioning).
- `docs:` Documentation changes.
- `style:` Code style change (semicolon, indentation...).
- `refactor:` Refactor code without changing public API.
- `perf:` Update code performances.
- `test:` Add test to an existing feature.
- `chore:` Update something without impacting the user (ex: bump a dependency in package.json).

## Examples

Some examples of the above would be

#### Commit with no body

```
feat: allow provided config object to extend other configs
```

```
docs: correct spelling of CHANGELOG
```

#### Commit with ! to draw attention to breaking change

```
feat!: send an email to the customer when a product is shipped
```

#### Commit with scope and ! to draw attention to breaking change

```
feat(api)!: send an email to the customer when a product is shipped
```

#### Commit with multi-paragraph body and footer

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Story-ref: #1234
```

## Benefits

#### Readability

Commits are more descriptive, making it easier for teammates and stakeholders to read and understand them. It also makes it easier to contribute.

#### Changelog

Allows you to automatically generate a changelog.

#### Version Control

Helps to automatically determine a semantic version bump based on the types of commits landed.

#### Revert changes

If only one action is made per commit, it makes it simpler to revert a change or git conflict
