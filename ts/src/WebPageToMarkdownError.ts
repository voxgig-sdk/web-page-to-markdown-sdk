
import { Context } from './Context'


class WebPageToMarkdownError extends Error {

  isWebPageToMarkdownError = true

  sdk = 'WebPageToMarkdown'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WebPageToMarkdownError
}

