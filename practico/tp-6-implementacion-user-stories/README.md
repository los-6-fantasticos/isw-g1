# Tp 6 
Implements "Pedido de lo que sea"

Code style rules: https://gist.github.com/antonrogov/1216380/21800f463af3d3a98e98083c4bc109e44f981ef4
## How To
To use this project you must have a google maps api key. To get it go to [the google apis console dashboard](https://console.cloud.google.com/apis/dashboard)  and in libraries activate Google Maps api and Geocoding api.
You will obtain an api key and then place it as a file as shown below:
js/config.js
```javascript
const CONFIG = {
    KEY: 'HERE_YOUR_API_KEY'
}
```
## Run
To run this project it is recommended to use an http server such as apache, node http-server, python2 SimpleHTTPServer, python3 http.server, etc.
We use the last one.
```bash
python -m http.server
```
## Test
We have a [Tests spreadsheer](https://docs.google.com/spreadsheets/d/1no4ANY1REcSfFKO_EdQrfe8zKXPm_wHnrtxN26ZfbWM/edit?usp=sharing) for traking the test cases.
