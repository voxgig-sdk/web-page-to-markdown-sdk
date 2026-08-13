# WebPageToMarkdown SDK feature factory

from webpagetomarkdown_sdk.feature.base_feature import WebPageToMarkdownBaseFeature
from webpagetomarkdown_sdk.feature.test_feature import WebPageToMarkdownTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WebPageToMarkdownBaseFeature(),
        "test": lambda: WebPageToMarkdownTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
