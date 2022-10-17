# csv-file-upload-download

##### Command list: 
Use `npm i` to install all packages

# APIs
### Upload files
`url`: `POST /api/csv/upload`

#### Request
upload file will be in multipart/form-data and key name is `file`
##### Response
```json
{
    "message": "Uploaded the file successfully: test.csv"
}
```

### Get files information from dabtabase
`url`: `GET /api/csv/files`
##### Response
```json
[
    {
        "id": 1,
        "name": "fazle",
        "email": "fazlerabby07@gmail.com",
        "createdAt": "2022-10-17T12:58:06.000Z",
        "updatedAt": "2022-10-17T12:58:06.000Z"
    },
    {
        "id": 2,
        "name": "rabby",
        "email": "rabbt@gmail.com",
        "createdAt": "2022-10-17T12:58:06.000Z",
        "updatedAt": "2022-10-17T12:58:06.000Z"
    },
    {
        "id": 3,
        "name": "fazle",
        "email": "fazle@gmail.com",
        "createdAt": "2022-10-17T12:58:06.000Z",
        "updatedAt": "2022-10-17T12:58:06.000Z"
    }
]
```

### Download file 
`url`: `GET /api/csv/download`
##### Response
It will download a csv file

