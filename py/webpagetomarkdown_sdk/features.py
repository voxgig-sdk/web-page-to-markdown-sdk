# WebPageToMarkdown SDK feature factory

from webpagetomarkdown_sdk.feature.base_feature import WebPageToMarkdownBaseFeature
from webpagetomarkdown_sdk.feature.ratelimit_feature import WebPageToMarkdownRatelimitFeature
from webpagetomarkdown_sdk.feature.retry_feature import WebPageToMarkdownRetryFeature
from webpagetomarkdown_sdk.feature.test_feature import WebPageToMarkdownTestFeature
from webpagetomarkdown_sdk.feature.timeout_feature import WebPageToMarkdownTimeoutFeature


_FEATURES = {
    "base": lambda: WebPageToMarkdownBaseFeature(),
    "ratelimit": lambda: WebPageToMarkdownRatelimitFeature(),
    "retry": lambda: WebPageToMarkdownRetryFeature(),
    "test": lambda: WebPageToMarkdownTestFeature(),
    "timeout": lambda: WebPageToMarkdownTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
