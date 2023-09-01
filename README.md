# Backend Assessment 

## flutterwaveBackend

### Brief Section

this is the repo for the flutterwave backend assessment given which was to have three endpoints one for creating account, the second for viewing an account and the third for viewing all accounts.

### Pre-requisite

To clone this repository, you can head over to [GitHub Repository](https://github.com/smartbizlord/flutterBackendAssessment). the major requirements for this API is shown below

- NodeJS (npm)
- MySQL | PostgreSQL | SQLite
- .env (Environment Variables)

| Variable | Data Type | Allowed Values  |
| ----------- | ----------- | ----------- |
| PORT | Number | Default: 3001 |
| BASE_URL | String | the url for hosting the API |
| NODE_ENV | String | production&nbsp;\|&nbsp; development |
| DB_URL | String | database url |
| JWT_SECRET | String | any |
| JWT_ACCESS_EXPIRATION_MINUTES | Number | any |
| JWT_REFRESH_EXPIRATION_DAYS | Number | any |
| JWT_RESET_PASSWORD_EXPIRATION_MINUTES | Number | any |
| JWT_VERIFY_EMAIL_EXPIRATION_MINUTES | Number | any |
| SMTP_HOST | String | eg: smtp.gmail.com |
| SMTP_PORT | Number | 465 |
| SMTP_USERNAME | String | any |
| SMTP_PASSWORD | String | any |

> These variables are required and the API cannot work well  without them! :joy:

### Starting the API
first run `npm install` to install the necessary dependencies

after the dependencies are installed, type `npm start` and visit the api from `http://localhost:{port}/`. default port is `3001`

### Current Available Endpoints

> All endpoints accept JSON objects and returns JSON objects
> All admin endpoints can only be accesed by admin level users, so in order to test that create an extra user and set the useRole to admin
> All resources are initialized with is ACtive set to false so you have to update resources that you feel are ready for the viewers

| endpoint | method | request payload |
| --- | --- | --- |
| Auth | Auth | Auth |
| /v1.0/auth/register | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"email", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"password", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"firstName", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"lastName", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"gender", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/login | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"email", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"password", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/logout | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"refreshToken", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/refresh-tokens | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"refreshToken", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/forgot-password | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"email", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/reset-password | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"password", </span><span> :</span><span style="color: red;">required</span><br>}<br><br>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"token", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/send-verification-email | POST | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"token", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/verify-email | POST | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"token", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| Movies | Movies | Movies |
| /accounts/new | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"movieTitle</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDescription", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieThumbNail</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"releaseYear</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieCast</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieCountry</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDirector</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDuration</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"isActive</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"special</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"genreId</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieLocation</span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /accounts/single | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"movieTitle</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDescription", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieThumbNail</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"releaseYear</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieCast</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieCountry</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDirector</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDuration</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"isActive</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"special</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"genreId</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieLocation</span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /accounts/all | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"movieTitle</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDescription", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieThumbNail</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"releaseYear</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieCast</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieCountry</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDirector</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDuration</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"isActive</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"special</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"genreId</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieLocation</span><span> :</span><span style="color: red;">required</span><br>}</pre> |


### Author

![smartbizlord](https://avatars.githubusercontent.com/u/103539335?v=4) 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Oladimeji Amusa](https://github.com/smartbizlord)

### Enquiries

[Send A Mail](mailto:smartbizlord@gmail.com)[^1]

[^1]: Happy coding :wave:






