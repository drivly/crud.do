# crud.do
Simple CRUD APIs

<https://crud.do/api>

```json
{
  "api": {
    "icon": "⚡️",
    "name": "crud.do",
    "description": "Hypermedia-Driven CRUD",
    "url": "https://crud.do",
    "endpoints": {
      "types": "https://crud.do",
      "list": "https://crud.do/:type",
      "create": "https://crud.do/:type/new",
      "read": "https://crud.do/:type/:id",
      "update": "https://crud.do/:type/:id/set?title=Amazing+Title",
      "delete": "https://crud.do/:type/:id/delete"
    },
    "memberOf": "https://primitives.do"
  },
  "types": {
    "authors": "https://crud.do/authors",
    "blogs": "https://crud.do/blogs",
    "comments": "https://crud.do/comments",
    "posts": "https://crud.do/posts",
    "subscriptions": "https://crud.do/subscriptions",
    "tags": "https://crud.do/tags",
    "users": "https://crud.do/users"
  },
  "user": {
    "login": "https://crud.do/login",
    "signup": "https://crud.do/signup",
    "authenticated": false,
    "plan": "build",
    "ip": "76.43.4.126",
    "isp": "Comcast Cable",
    "flag": "🇺🇸",
    "city": "Bloomington",
    "metro": "Minneapolis-St. Paul",
    "region": "Minnesota",
    "country": "United States",
    "continent": "NA",
    "requestId": "743cdf34aa5e6174-ORD",
    "recentInteractions": 1
  }
}
```
