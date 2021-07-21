
# API Design Best Pratices


1. What does REST stand for?
  - Representational state transfer
2. REST APIs are designed around a ____.
  - resources
3. What is an identifer of a resource? Give an example.
  - object, data, or service accessed by client
4. What are the most common HTTP verbs?
  - get, post, put, patch, delete
5. What should the URIs be based on?
  - 
6. Give an example of a good URI.
  - ``` {"orderId":1,"orderValue":99.90,"productId":1,"quantity":1} ```
7. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?
  - exposing a large number of small resources
8. What status code does a successful GET request return?
  - returns HTTP status code 200
9. What status code does an unsuccessful GET request return?
  - 404 error
10. What status code does a successful POST request return?
  - 201 code
11. What status code does a successful DELETE request return?
  - code 204

  ## cite
    - API design best pratices (https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)