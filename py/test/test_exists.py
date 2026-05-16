# ProjectName SDK exists test

import pytest
from webpagetomarkdown_sdk import WebPageToMarkdownSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WebPageToMarkdownSDK.test(None, None)
        assert testsdk is not None
