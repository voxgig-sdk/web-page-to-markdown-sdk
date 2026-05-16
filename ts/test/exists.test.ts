
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WebPageToMarkdownSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WebPageToMarkdownSDK.test()
    equal(null !== testsdk, true)
  })

})
