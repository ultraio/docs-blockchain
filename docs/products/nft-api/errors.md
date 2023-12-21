---
title: 'Errors'
deploy: ['staging', 'mainnet']
order: 3
---

# Errors

This section aims to inform our users how errors are handled.

## GraphQL errors

These are errors related to the server-side execution of a GraphQL operation. They include:

-   Syntax errors (e.g., a query was malformed)
-   Validation errors (e.g., a query included a schema field that doesn't exist)
-   Resolver errors (e.g., an error occurred while attempting to populate a query field)

If a syntax error or validation error occurs, your server doesn't execute the operation at all because it's invalid. If resolver errors occur, your server can still return partial data.

Here an error sample returned after a validation failure :

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

These are errors encountered while attempting to communicate with your GraphQL server, usually resulting in a 4xx or 5xx response status code (and no data).
