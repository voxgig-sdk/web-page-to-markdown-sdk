package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WebPageToMarkdown",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://urltomarkdown.herokuapp.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"convert_url_to_markdown_get": map[string]any{},
				"convert_url_to_markdown_post": map[string]any{},
			},
		},
		"entity": map[string]any{
			"convert_url_to_markdown_get": map[string]any{
				"fields": []any{},
				"name": "convert_url_to_markdown_get",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "clean",
											"orig": "clean",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "link",
											"orig": "link",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": false,
											"kind": "query",
											"name": "title",
											"orig": "title",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": "https://www.mozilla.org/en-GB/firefox/",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"method": "GET",
								"orig": "/",
								"parts": []any{},
								"select": map[string]any{
									"exist": []any{
										"clean",
										"link",
										"title",
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"convert_url_to_markdown_post": map[string]any{
				"fields": []any{},
				"name": "convert_url_to_markdown_post",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "clean",
											"orig": "clean",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "link",
											"orig": "link",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": false,
											"kind": "query",
											"name": "title",
											"orig": "title",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"method": "POST",
								"orig": "/",
								"parts": []any{},
								"select": map[string]any{
									"exist": []any{
										"clean",
										"link",
										"title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
