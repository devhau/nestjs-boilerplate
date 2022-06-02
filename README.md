[![Contributors][contributors-shield]][contributors]
[![Forks][forks-shield]][forks]
[![Stargazers][stars-shield]][stars]
[![Issues][issues-shield]][issues]
[![MIT License][license-shield]][license]

[![NestJs][nestjs-shield]][ref-nestjs]
[![NodeJs][nodejs-shield]][ref-nodejs]
[![Typescript][typescript-shield]][ref-typescript]
[![MongoDB][mongodb-shield]][ref-mongodb]
[![JWT][jwt-shield]][ref-jwt]
[![Jest][jest-shield]][ref-jest]
[![Yarn][yarn-shield]][ref-yarn]
[![Docker][docker-shield]][ref-docker]

# nestjs-boilerplate  🔥 🚀

> Best uses for Restful API, Microservice, or SaaS Project

nestjs-boilerplate is a [NestJs](http://nestjs.com) Boilerplate with [Mongoose](https://mongoosejs.com) and [MongoDB](https://docs.mongodb.com) as Database.

Made with following
- [nodejs-best-practice](https://github.com/goldbergyoni/nodebestpractices) 
- [The Twelve-Factor App](https://12factor.net)
- [Microservice Architecture](https://microservices.io)
- NestJs Habit.

*You can [Request Feature][issues] or [Report Bug][issues] with following this link*

## Important

If you change env value of `APP_MODE` to `secure` that will trigger more `Middleware` and `Guard`.

1. `TimestampMiddleware`, tolerant 5 minutes of request.
2. `UserAgentMiddleware`, whitelist of user agent.
3. `ApiKeyGuard`, check api key based on database.
4. `CorsMiddleware`, check cors

You can see our `e2e testing file` or read the documentation on [section environment][doc-env].

## Build with

Describes which version of the main packages and main tools.

| Name       | Version  |
| ---------- | -------- |
| NestJs     | v8.x     |
| NodeJs     | v17.x    |
| Typescript | v4.x     |
| Mongoose   | v6.x     |
| MongoDB    | v5.x     |
| Yarn       | v1.x     |
| NPM        | v8.x     |
| Docker     | v20.x    |
| Docker Compose | v2.x |

## Objective

nestjs-boilerplatehave some objective.

- Simple, scalable and secure
- Avoid spaghetti code
- Component based
- Reusable component
- Easy to maintenance
- Support for all microservice patterns

## Features

- NestJs v8.x 🥳
- Production Ready 🔥
- Typescript 🚀
- Authentication and Authorization (OAuth2, API Key, Basic Auth) 💪
- Mongodb integrate by using Mongoose Package 🎉
- Database Migration
- Integrate with AWS
- Server Side Pagination
- Url Versioning
- Request Validation Pipe
- Custom error status code 🤫
- Logger and Debugger 📝
- Centralize Configuration 🤖
- Centralize Exception Filter
- Multi-language (i18n)
- Dynamic Setting from Database 🗿
- Maintenance Mode on / off
- Advance Example 🥶
- Support Docker Installation
- Support CI/CD with Github Action or Jenkins
- Husky GitHook For Check Source Code, and Run Test Before Commit 🐶
- Linter with EsLint for Typescript

## Prerequisites

We assume that everyone who comes here is _**`programmer with intermediate knowledge`**_ and we also need to understand more before we begin in order to reduce the knowledge gap.

1. Understand [NestJs Fundamental](http://nestjs.com), Main Framework. NodeJs Framework with support fully TypeScript.
2. Understand[Typescript Fundamental](https://www.typescriptlang.org), Programming Language. It will help us to write and read the code.
3. Understand [ExpressJs Fundamental](https://nodejs.org), NodeJs Base Framework. It will help us in understanding how the NestJs Framework works.
4. Understand what NoSql is and how it works as a database, especially [MongoDB.](https://docs.mongodb.com)

## Todo

Next development

- [ ] Docker Compose File Mongodb Replication Set
- [ ] Swagger

## Documentation

Let's go into deep ! 🚀

- [Documentation][docs]
- [Example][docs-example]
- [Tips][docs-tips]

## Endpoints

See our [e2e testing][e2e]

## Microservice

Nestjs microservice or Kafka integration will put in separate repo [microservice-nestjs-boilerplate-mongoose][microservice-repo].

## License

Distributed under [MIT licensed][license].

## Contributors

Thanks goes to these wonderful people
<table><tr><td align="center"><a href="https://github.com/tiaamoo"><img src="https://avatars.githubusercontent.com/u/97380402?v=4" width="80px;" alt="Tiaamoo"/><br /><sub><b>Tiaamoo</b></sub></a><br /></td></tr></table>

## Contact

[Andre Christi kan][author-email]

[![Github][github-shield]][author-github]
[![LinkedIn][linkedin-shield]][author-linkedin]
[![Instagram][instagram-shield]][author-instagram]

<!-- BADGE LINKS -->
[contributors-shield]: https://img.shields.io/github/contributors/Nguyen Van Hau/nestjs-boilerplate-mongoose?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/Nguyen Van Hau/nestjs-boilerplate-mongoose?style=for-the-badge
[stars-shield]: https://img.shields.io/github/stars/Nguyen Van Hau/nestjs-boilerplate-mongoose?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/Nguyen Van Hau/nestjs-boilerplate-mongoose?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/Nguyen Van Hau/nestjs-boilerplate-mongoose?style=for-the-badge

[nestjs-shield]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[typescript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[mongodb-shield]: https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B
[jwt-shield]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white
[jest-shield]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[yarn-shield]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[docker-shield]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white

[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white

<!-- CONTACTS -->
[author-linkedin]: https://linkedin.com/in/Nguyen Van Hau
[author-instagram]: https://www.instagram.com/___ac.k
[author-email]: mailto:nguyenvanhaudev@gmail.com
[author-github]: https://github.com/Nguyen Van Hau

<!-- Repo LINKS -->
[repo]: https://github.com/devhau/nestjs-boilerplate
[e2e]: /e2e
[issues]: https://github.com/devhau/nestjs-boilerplate/issues
[stars]: https://github.com/devhau/nestjs-boilerplate/stargazers
[forks]: https://github.com/devhau/nestjs-boilerplate/network/members
[contributors]: https://github.com/devhau/nestjs-boilerplate/graphs/contributors
[history]: https://github.com/devhau/nestjs-boilerplate/commits/main


<!-- license -->
[license]: LICENSE.md
[endpoints]: endpoints.json

<!-- Documents -->
[docs]: https://hau.xyz
[docs-features]: https://hau.xyz#/features/readme
[docs-example]: https://hau.xyz#/example
[docs-tips]: https://hau.xyz#/tips/readme
[doc-env]: https://hau.xyz#/features/readme

<!-- Reference -->
[ref-nestjs]: http://nestjs.com
[ref-mongoose]: https://mongoosejs.com/
[ref-mongodb]: https://docs.mongodb.com/
[ref-nodejs-best-practice]: https://github.com/goldbergyoni/nodebestpractices
[ref-nodejs]: https://nodejs.org/
[ref-typescript]: https://www.typescriptlang.org/
[ref-jwt]: https://jwt.io
[ref-jest]: https://jestjs.io/docs/getting-started
[ref-docker]: https://docs.docker.com
[ref-yarn]: https://yarnpkg.com
[ref-postman-import-export]: https://learning.postman.com/docs/getting-started/importing-and-exporting-data/
