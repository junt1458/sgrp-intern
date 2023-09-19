# Rest API Settings for Hasura

## GetManagerIDFromUID

Query:

```GraphQL
query GetManagerIDFromUID($uid: String) {
  managers(where: {auth0_uid: {_eq: $uid}}) {
    manager_id
  }
}
```

Location: `getmanageridfromuid/:uid`

Method: GET

## GetPartnerIDFromUID

Query:

```GraphQL
query GetPartnerIDFromUID($uid: String) {
  partners(where: {auth0_uid: {_eq: $uid}}) {
    partner_id
  }
}
```

Location: `getpartneridfromuid/:uid`

Method: GET

## GetStudentIDFromUID

Query:

```GraphQL
query GetStudentIDFromUID($uid: String) {
  students(where: {auth0_uid: {_eq: $uid}}) {
    client_id
  }
}
```

Location: `getstudentidfromuid/:uid`

Method: GET

## GetContactsFromApplication

Query:

```GraphQL
query GetContactsFromApplication($application_id: uuid!) {
  applications_by_pk(application_id: $application_id) {
    display_status
    student {
      email
      name
    }
    partner {
      display_name
      contact_email
      contact_name
    }
    manager {
      email
      name
    }
    opportunity {
      field
    }
  }
}
```

Location: `getcontactsfromapplication/:application_id`

Method: GET

# Permission Settings for Hasura

## students

| Role    | Insert         | Select                 | Update                 | Delete |
| ------- | -------------- | ---------------------- | ---------------------- | ------ |
| manager |                | All / No Check         |                        |        |
| partner |                | All / No Check         |                        |        |
| student | All / No Check | All / With Condition A | All / With Condition A |        |

## partners

| Role    | Insert         | Select                      | Update                 | Delete |
| ------- | -------------- | --------------------------- | ---------------------- | ------ |
| manager |                | All / No Check              |                        |        |
| partner | All / No Check | All / With Condition A      | All / With Condition A |        |
| student |                | Without Contacts / No Check | All / With Condition A |        |

## managers

| Role    | Insert         | Select         | Update                 | Delete |
| ------- | -------------- | -------------- | ---------------------- | ------ |
| manager | All / No Check | All / No Check | All / With Condition A |        |
| partner |                | All / No Check |                        |        |
| student |                | All / No Check |                        |        |

## opportunities

| Role    | Insert         | Select                 | Update                                       | Delete                 |
| ------- | -------------- | ---------------------- | -------------------------------------------- | ---------------------- |
| manager |                | All / With Condition B | display_status,manager_id / With Condition B |                        |
| partner | All / No Check | All / With Condition C | All / With Condition C                       | All / With Condition E |
| student |                | All / With Condition D |                                              |                        |

## applications

| Role    | Insert                 | Select                 | Update                 | Delete |
| ------- | ---------------------- | ---------------------- | ---------------------- | ------ |
| manager |                        | All / No Check         | All / No Check         |        |
| partner |                        | All / With Condition F | All / With Condition F |        |
| student | All / With Condition G | All / With Condition G |                        |        |

## Conditions

### Condition A

```json
{ "client_id": { "_eq": "X-Hasura-User-Id" } }
```

### Condition B

(pre update)

```json
{ "display_status": { "_gte": 2 } }
```

(post update)

### Condition B

```json
{ "display_status": { "_gte": 1 } }
```

### Condition C

```json
{ "partner_id": { "_eq": "X-Hasura-User-Id" } }
```

### Condition D

```json
{ "display_status": { "_gte": 3 } }
```

### Condition E

```json
{
  "_and": [
    { "partner_id": { "_eq": "X-Hasura-User-Id" } },
    { "display_status": { "_lte": 2 } }
  ]
}
```

### Condition F

```json
{
  "_and": [
    { "partner_id": { "_eq": "X-Hasura-User-Id" } },
    { "display_status": { "_gte": 3 } }
  ]
}
```

### Condition G

```json
{ "student_id": { "_eq": "X-Hasura-User-Id" } }
```
