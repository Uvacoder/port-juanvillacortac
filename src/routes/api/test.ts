import type { RequestHandler,  } from '@sveltejs/kit'

export const get: RequestHandler = async () => {
  return {
    body: {
      quote: 'This is a GET'
    }
  }
}

export const post: RequestHandler = async () => {
  return {
    body: {
      quote: 'This is a POST'
    }
  }
}
