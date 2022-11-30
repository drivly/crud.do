# crud.do
Simple CRUD APIs through Hypermedia: <https://crud.do/api>

```json
{
  "api": {
    "icon": "⚡️",
    "name": "crud.do",
    "description": "Hypermedia-Driven CRUD",
    "url": "https://crud.do",
    "api": "https://crud.do/api",
    "endpoints": {
      "types": "https://crud.do",
      "list": "https://crud.do/:type",
      "create": "https://crud.do/:type/new",
      "read": "https://crud.do/:type/:id",
      "update": "https://crud.do/:type/:id/set?title=Amazing+Title",
      "delete": "https://crud.do/:type/:id/delete"
    },
    "typeOf": "https://apis.do",
    "repo": "https://github.com/drivly/crud.do",
  },
  "types": {
    "authors": "https://crud.do/authors",
    "blogs": "https://crud.do/blogs",
    "comments": "https://crud.do/comments",
    "posts": "https://crud.do/posts",
    "subscriptions": "https://crud.do/subscriptions",
    "tags": "https://crud.do/tags",
    "users": "https://crud.do/users"
  }
}
```
