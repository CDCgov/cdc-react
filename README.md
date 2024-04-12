# CDC React Design System

This is a monorepo for the official CDC Design System catered for ReactJS applications. The overall goal of this project is to create open source, reusable components and libraries to be used across all ReactJS-based web applications built for the CDC.

**General disclaimer** This repository was created for use by CDC programs to collaborate on public health related projects in support of the [CDC mission](https://www.cdc.gov/about/organization/mission.htm). GitHub is not hosted by the CDC, but is a third party website used by CDC and its partners to share information and collaborate on software. CDC use of GitHub does not imply an endorsement of any one particular service, product, or enterprise.

## Packages

This table maps the souce code for each package within this monorepo to the location where it is published to:

| Package         | Description                                                                   | Source code location     | NPM Page                                                                                 |
| --------------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| CDC React       | Library for CDC-styled ReactJS components.                                    | packages/cdc-react       | [@us-gov-cdc/cdc-react](https://www.npmjs.com/package/@us-gov-cdc/cdc-react)             |
| CDC React Icons | Icon library for CDC-styled icons, packaged as individual ReactJS components. | packages/cdc-react-icons | [@us-gov-cdc/cdc-react-icons](https://www.npmjs.com/package/@us-gov-cdc/cdc-react-icons) |

## Development Environment Setup

Download and install the following software in order to develop and build packages from source:

1. NodeJS latest LTS
2. Yarn is the main package manager for this monorepo. After installing NodeJS and NPM, install Yarn globally with `npm install -g yarn`.
3. Install all package dependencies by running `yarn install` at the root level.

**Note: Because this project uses Yarn Workspaces, each package and the root will get a `node_modules` directory. Common dependencies will be placed in the root level `node_modules` directory, and package specific dependencies will get installed in the `node_modules` directory under the package specific's directory.**

## Running Storybook

This project uses Storybook to create a sandbox environment for its components. You can run the Storybook instance with the command `yarn storybook`.

## Linting and Code Style

All packages use ESLint and Prettier to enforce lint and code formatting rules. You can run `yarn lint` at the root level to run ESLint on all source code files across all packages, or at the package level to scan files for a specific package. This also applies to code style checks, which can be run with `yarn format:check`.

## Building a Package

Each package will have a build script that will be defined in their espected `package.json` file. This script will typically envolve running the TypeScript compiler against the typescript code, and performing any JS minifying and bundling steps. Vite is used here to take care of this process.

To build a package, you can run `yarn build:<package name>` at the root level, or `yarn build` at the package level.

## Publishing a Package

Releases are automated with a combination of GitHub Actions, [release-please](https://github.com/googleapis/release-please), and [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/). Every package within this monorepo is published to a separate package on NPM.

How releases work:

- When a PR is merged with a conventional commit title (ex. `feat: added new Pill component`) an automated "release" PR will be created. The automation will determine which packages had changes and will generate a release for each package(ie. if both `cdc-react` and `cdc-react-icons` had changes, then two PRs would be created).
- The automated "release" PR can be merged once the build passes. This PR will automatically update the related `package.json` files and create updates to CHANGELOG. Be sure to keep the title of the merge commit the same as the initial PR commit title. An example of `cdc-react` automated release PR- https://github.com/CDCgov/cdc-react/pull/145
- Once the "release" PR has been merged, [a release will be created in GitHub](https://github.com/CDCgov/cdc-react/releases) and the new version will be published to NPM.

Note: `cdc-react` currently depends on `cdc-react-icons` so it's best to modify the "release" PR to manually update this if `cdc-react-icons` has had a new update.

Release notes and the CHANGELOG are automatically generated based on commit messages that are following [conventional commits](https://github.com/googleapis/release-please?tab=readme-ov-file#how-should-i-write-my-commits).

Manual publishing with `npm publish` should be avoided. When doing a manual release though be sure to update all related `package.json` versions, the changelog, and GitHub releases.

## Contributing

If you are external to the CDC and would like to contribute, please fork this repo and propose changes via a Pull Request against the main branch of the upstream repo.

## Issue Reporting

Please report issues and bugs to the Issues tab for this repo in GitHub.

## Access Request, Repo Creation Request

- [CDC GitHub Open Project Request Form](https://forms.office.com/Pages/ResponsePage.aspx?id=aQjnnNtg_USr6NJ2cHf8j44WSiOI6uNOvdWse4I-C2NUNk43NzMwODJTRzA4NFpCUk1RRU83RTFNVi4u) _[Requires a CDC Office365 login, if you do not have a CDC Office365 please ask a friend who does to submit the request on your behalf. If you're looking for access to the CDCEnt private organization, please use the [GitHub Enterprise Cloud Access Request form](https://forms.office.com/Pages/ResponsePage.aspx?id=aQjnnNtg_USr6NJ2cHf8j44WSiOI6uNOvdWse4I-C2NUQjVJVDlKS1c0SlhQSUxLNVBaOEZCNUczVS4u).]_

## Related documents

- [Open Practices](open_practices.md)
- [Rules of Behavior](rules_of_behavior.md)
- [Thanks and Acknowledgements](thanks.md)
- [Disclaimer](DISCLAIMER.md)
- [Contribution Notice](CONTRIBUTING.md)
- [Code of Conduct](code-of-conduct.md)

## Overview

Describe the purpose of your project. Add additional sections as necessary to help collaborators and potential collaborators understand and use your project.

## Public Domain Standard Notice

This repository constitutes a work of the United States Government and is not
subject to domestic copyright protection under 17 USC § 105. This repository is in
the public domain within the United States, and copyright and related rights in
the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
All contributions to this repository will be released under the CC0 dedication. By
submitting a pull request you are agreeing to comply with this waiver of
copyright interest.

## License Standard Notice

The repository utilizes code licensed under the terms of the Apache Software
License and therefore is licensed under ASL v2 or later.

This source code in this repository is free: you can redistribute it and/or modify it under
the terms of the Apache Software License version 2, or (at your option) any
later version.

This source code in this repository is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the Apache Software License for more details.

You should have received a copy of the Apache Software License along with this
program. If not, see http://www.apache.org/licenses/LICENSE-2.0.html

The source code forked from other open source projects will inherit its license.

## Privacy Standard Notice

This repository contains only non-sensitive, publicly available data and
information. All material and community participation is covered by the
[Disclaimer](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md)
and [Code of Conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md).
For more information about CDC's privacy policy, please visit [http://www.cdc.gov/other/privacy.html](https://www.cdc.gov/other/privacy.html).

## Contributing Standard Notice

Anyone is encouraged to contribute to the repository by [forking](https://help.github.com/articles/fork-a-repo)
and submitting a pull request. (If you are new to GitHub, you might start with a
[basic tutorial](https://help.github.com/articles/set-up-git).) By contributing
to this project, you grant a world-wide, royalty-free, perpetual, irrevocable,
non-exclusive, transferable license to all users under the terms of the
[Apache Software License v2](http://www.apache.org/licenses/LICENSE-2.0.html) or
later.

All comments, messages, pull requests, and other submissions received through
CDC including this GitHub page may be subject to applicable federal law, including but not limited to the Federal Records Act, and may be archived. Learn more at [http://www.cdc.gov/other/privacy.html](http://www.cdc.gov/other/privacy.html).

## Records Management Standard Notice

This repository is not a source of government records, but is a copy to increase
collaboration and collaborative potential. All government records will be
published through the [CDC web site](http://www.cdc.gov).

## Additional Standard Notices

Please refer to [CDC's Template Repository](https://github.com/CDCgov/template)
for more information about [contributing to this repository](https://github.com/CDCgov/template/blob/master/CONTRIBUTING.md),
[public domain notices and disclaimers](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md),
and [code of conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md).
