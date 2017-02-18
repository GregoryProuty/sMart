# sMart-web-server

## API Guide

#### GET /deliveries

Query Parameters
| Name        | Type            | Description| 
| ----------- | --------------- | ---------  | 
| CRUD OP     | CREATE          | READ       | 
| /dogs       | Create new dogs | List dogs  | 
| /dogs/1234  | Error           | Show Bo    | 

Response

Status-Code: 200 OK

    {
       "count":172,
       "next_page":"status=completed&limit=10&offset=10",
       "previous_page":"",
       "deliveries":[
          {
            // Delivery object 1 (omitted for clarity)
          },
          {
            // Delivery object 2 (omitted for clarity)
          },
          // ... More delivery objects
       ]
    }
    
#### POST /deliveries
| Name        | Type            | Description| 
| ----------- | --------------- | ---------  | 
| CRUD OP     | CREATE          | READ       | 
| /dogs       | Create new dogs | List dogs  | 
| /dogs/1234  | Error           | Show Bo    | 

#### POST /deliveries/quote

#### GET /deliveries/{delivery_id}

#### GET /deliveries/{delivery_id}/receipt

#### GET /deliveries/{delivery_id}/ratings

#### POST /deliveries/{delivery_id}/ratings

#### GET /deliveries/{delivery_id}/rating_tags

#### POST /deliveries/{delivery_id}/cancel

#### GET /deliveries/regions
