### Express ###

### Helmet ###
```shell
Maheshs-MacBook-Pro:express mahesh$ curl localhost:3000/ --include
HTTP/1.1 200 OK
Content-Security-Policy: default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
X-DNS-Prefetch-Control: off
Expect-CT: max-age=0
X-Frame-Options: SAMEORIGIN
Strict-Transport-Security: max-age=15552000; includeSubDomains
X-Download-Options: noopen
X-Content-Type-Options: nosniff
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: no-referrer
X-XSS-Protection: 0
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-xYYmirIKdj11pTSPQCTvCH47dMk"
Date: Mon, 28 Jun 2021 06:46:17 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Maheshs-MacBook-Pro:express mahesh$ 

```