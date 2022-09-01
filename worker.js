export default {
  fetch: async (req, env) => {
    
    const { user } = await env.CTX.fetch(req).then(res => res.json())
    const { origin, pathname, search } = new URL(req.url)
 
    return new Response(JSON.stringify({
      api: {
        icon: '⚡️',
        name: 'crud.do',
        description: 'Hypermedia-Driven CRUD',
        url: 'https://crud.do',
        endpoints: {
          types: origin,
          list: origin + '/:type',
          create: origin + '/:type/new',
          read: origin + '/:type/:id',
          update: origin + '/:type/:id/set?title=Amazing+Title',
          delete: origin + ':type/:id/delete'
        },
        memberOf: 'https://primitives.do',
      },
      types: {
        authors: origin + '/authors',
        blogs: origin + '/blogs',
        comments: origin + '/comments',
        posts: origin + '/posts',
        subscriptions: origin + '/subscriptions',
        tags: origin + '/tags',
        users: origin + '/users',
      },
      user,
    }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}

export class CRUD {
  constructor(state, env) {
    this.state = state
  }
  async fetch(req) {
    const { origin, pathname, search, searchParams } = new URL(req.url)
    const [ _, type, id, action ] = pathname.split('/')
    const { limit = 10 } = Object.fromEntries(searchParams)
    const data = await this.state.storage.list({limit}).then(list => Object.fromEntries(list))
    return new Response(JSON.stringify({data}))
  }
}
