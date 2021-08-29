# Authentication


## What is OAuth

1. What is OAuth?
  - OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization.
2. Give an example of what using OAuth would look like.
  - The simplest example of OAuth is when you go to log onto a website and it offers one or more opportunities to log on using another website’s/service’s logon. You then click on the button linked to the other website, the other website authenticates you, and the website you were originally connecting to logs you on itself afterward using permission gained from the second website.
3. How does OAuth work? What are the steps that it takes to authenticate the user?
  - user signed into website. User initiates a feature that need access to another site. following happens
    1. The first website connects to the second website on behalf of the user, using OAuth, providing the user’s verified identity.
    2. The second site generates a one-time token and a one-time secret unique to the transaction and parties involved.
    3. The first site gives this token and secret to the initiating user’s client software.
    4. The client’s software presents the request token and secret to their authorization provider (which may or may not be the second site).
    5. If not already authenticated to the authorization provider, the client may be asked to authenticate. After authentication, the client is asked to approve the authorization transaction to the second website.
    6. The user approves (or their software silently approves) a particular transaction type at the first website.
    7. The user is given an approved access token (notice it’s no longer a request token).
    8. The user gives the approved access token to the first website.
    9. The first website gives the access token to the second website as proof of authentication on behalf of the user.
    10. The second website lets the first website access their site on behalf of the user.
    11. The user sees a successfully completed transaction occurring.
    12. The user sees a successfully completed transaction occurring.
4. What is OpenID?
  - A single sign in. Friendly sign in

  ### cited below


## Authorization and Authentication flows

1. What is the difference between authorization and authentication?
  - authentication is checking user, authorization is access to protected resources
2. What is Authorization Code Flow?
  - login, goes to authorization server
  - autho0 server goes to login
  - logins, consent page
  - redirect to app with authorization good for one use
  - send authorization to server with client id
  - auth0 verifies
  - server responds with id token and acess token
  - app uses token to call for info on user
  - api responds with API data
3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?
  - The user clicks Login within the application.

  - Auth0's SDK creates a cryptographically-random code_verifier and from this generates a code_challenge.

  - Auth0's SDK redirects the user to the Auth0 Authorization Server (/authorize endpoint) along with the code_challenge.

  - Your Auth0 Authorization Server redirects the user to the login and authorization prompt.

  - The user authenticates using one of the configured login options and may see a consent page listing the permissions Auth0 will give to the application.

  - Your Auth0 Authorization Server stores the code_challenge and redirects the user back to the application with an authorization code, which is good for one use.

  - Auth0's SDK sends this code and the code_verifier (created in step 2) to the Auth0 Authorization Server (/oauth/token endpoint).

  - Your Auth0 Authorization Server verifies the code_challenge and code_verifier.

  - Your Auth0 Authorization Server responds with an ID Token and Access Token (and optionally, a Refresh Token).

  - Your application can use the Access Token to call an API to access information about the user.

  - 
  - The API responds with requested data.


4. What is Implicit Flow with Form Post?
  - The user clicks Login in the app.

  - Auth0's SDK redirects the user to the Auth0 Authorization Server (/authorize endpoint) passing along a response_type parameter of id_token that indicates the type of requested credential. It also passes along a response_mode parameter of form_post to ensure security.

  - Your Auth0 Authorization Server redirects the user to the login and authorization prompt.

  - The user authenticates using one of the configured login options and may see a consent page listing the permissions Auth0 will give to the app.

  - Your Auth0 Authorization Server redirects the user back to the app with an ID Token.

5. What is Client Credentials Flow?
  - Your app authenticates with the Auth0 Authorization Server using its Client ID and Client Secret (/oauth/token endpoint).

  - Your Auth0 Authorization Server validates the Client ID and Client Secret.

  - Your Auth0 Authorization Server responds with an Access Token.

  - Your application can use the Access Token to call an API on behalf of itself.

  - The API responds with requested data.

6. What is Device Authorization Flow?
  - The user starts the app on the device.

  - The device app requests authorization from the Auth0 Authorization Server using its Client ID (/oauth/device/code endpoint).

  - The Auth0 Authorization Server responds with a device_code, user_code, verification_uri, verification_uri_complete expires_in (lifetime in seconds for device_code and user_code), and polling interval.

  - The device app asks the user to activate using their computer or smartphone. The app may accomplish this by:

asking the user to visit the verification_uri and enter the user_code after displaying these values on-screen

asking the user to interact with either a QR Code or shortened URL with embedded user code generated from the verification_uri_complete

directly navigating to the verification page with embedded user code using verification_uri_complete, if running natively on a browser-based device

  - The device app begins polling your Auth0 Authorization Server for an Access Token (/oauth/token endpoint) using the time period specified by interval and counting from receipt of the last polling request's response. The device app continues polling until either the user completes the browser flow path or the user code expires.

  - When the user successfully completes the browser flow path, your Auth0 Authorization Server responds with an Access Token (and optionally, a Refresh Token). The device app should now forget its device_code because it will expire.

  - Your device app can use the Access Token to call an API to access information about the user.

  - The API responds with requested data.

7. What is Resource Owner Password Flow?
  - The user clicks Login within the application and enters their credentials.

  - Your application forwards the user's credentials to your Auth0 Authorization Server (/oauth/token endpoint).

  - Your Auth0 Authorization Server validates the credentials.

  - Your Auth0 Authorization Server responds with an Access Token (and optionally, a Refresh Token).

  - Your application can use the Access Token to call an API to access information about the user.

  - The API responds with requested data. 

  ### cite
    - What is OAuth? HOw the open authorization framework works (https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)
    - Authentication adn authorization flows (https://auth0.com/docs/flows)