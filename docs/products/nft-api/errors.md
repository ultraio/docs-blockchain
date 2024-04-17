---
title: 'Errors'
deploy: ['staging', 'mainnet']
order: 3
---

# Errors

This section is dedicated to providing our users with comprehensive insights into our error handling mechanisms.

## GraphQL errors

GraphQL errors encompass issues arising from server-side execution of GraphQL operations, including:

-   Syntax Errors: These occur when a query is not correctly formed.
-   Validation Errors: These happen when a query references a schema field that does not exist.
-   Resolver Errors: These are encountered when an error occurs as the server attempts to fetch data for a query field.

In cases of syntax or validation errors, the server will not execute the operation because it is deemed invalid. However, if resolver errors are encountered, the server may still return partial data alongside the errors.

Below is an example of an error message returned following a validation error:

```json
{
    "data": null,
    "errors": [
        {
            "message": {
                "statusCode": {
                    "value": 400
                },
                "message": "Cannot query field \"nonexistentField\" on type \"Query\"."
            },
            "path": ["exampleOfPath"],
            "locations": [
                {
                    "line": {
                        "value": 2
                    },
                    "column": {
                        "value": 3
                    }
                }
            ],
            "extensions": {
                "response": {
                    "statusCode": {
                        "value": 400
                    },
                    "message": "Cannot query field \"nonexistentField\" on type \"Query\"."
                },
                "exception": {
                    "response": {
                        "statusCode": {
                            "value": 400
                        },
                        "message": "Cannot query field \"nonexistentField\" on type \"Query\"."
                    },
                    "status": {
                        "value": 400
                    },
                    "options": {},
                    "message": "Cannot query field \"nonexistentField\" on type \"Query\".",
                    "name": "GraphQlValidationException",
                    "stacktrace": [
                        "GraphQLError: Cannot query field \"nonexistentField\" on type \"Query\".",
                        "...additional lines..."
                    ]
                },
                "code": "GRAPHQL_VALIDATION_FAILED",
                "statusCode": {
                    "value": 400
                }
            }
        }
    ]
}
```

### Network errors

Network errors refer to problems encountered during communication with the GraphQL server, typically leading to a response status code in the 4xx or 5xx range, indicating an unsuccessful attempt and resulting in no data being returned.
