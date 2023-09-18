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

| Role    | Insert | Select | Update | Delete |
| ------- | ------ | ------ | ------ | ------ |
| manager |        |        |        |        |
| partner |        |        |        |        |
| student |        |        |        |        |

## Conditions

### Condition A

```json
{ "client_id": { "_eq": "X-Hasura-User-Id" } }
```

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
{ "display_status": { "_gte": 2 } }
```
