// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const login = require("facebook-chat-api");
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

function getDateFromTimestamp(timestamp) {
    var formattedTime = new Date(timestamp / 1).toLocaleString("pl-PL")
    return formattedTime;
}

app.get("/", (request, response) => {
    response.send("Nieprawidłowe zapytanie!");
})
app.get("/createCredentials", (request, response) => {
        var credentials = JSON.parse(request.get('JSON-Credentials'));
        // response.send(credentials.email)
        if (credentials === undefined) {
            response.send("Nie można odczytać danych");
        } else {
            login({ email: credentials.email, password: credentials.password }, (err, api) => {
                if (err) return console.error(err);
                response.json(api.getAppState());
            });
        }
    })
    // https://expressjs.com/en/starter/basic-routing.html
app.get("/threadList", (request, response) => {
    var pre_credentials = request.get('JSON-Credentials');
    // response.json(credentials)
    if (pre_credentials === undefined) {
        response.send("Nie można odczytać danych!")
    } else {
        var credentials = JSON.parse(pre_credentials)
            // var credentials = [{ "key": "datr", "value": "5IiQXkEbkAne00pKn_CBj1DV", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2020-04-10T14:55:33.099Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "fr", "value": "1onJo8ezsPzlPOBJ4.AWXll299FwYpBacHAs9A0LnVjzo.BekIjk.8X.AAA.0.0.BekIjl.AWXwcq5W", "expires": "2020-07-09T14:55:29.000Z", "maxAge": 7775996, "domain": "facebook.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:33.128Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "sb", "value": "5IiQXir6ev4oAWWxZTnji4kp", "expires": "2022-04-10T14:55:33.000Z", "maxAge": 63072000, "domain": "facebook.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:33.131Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "c_user", "value": "100049996898966", "expires": "2021-04-10T14:55:31.000Z", "maxAge": 31535998, "domain": "facebook.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.716Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "xs", "value": "32%3A3feyOm4uDTvDWg%3A2%3A1586530533%3A-1%3A-1", "expires": "2021-04-10T14:55:31.000Z", "maxAge": 31535998, "domain": "facebook.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.718Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "spin", "value": "r.1001973156_b.trunk_t.1586530535_s.1_v.2_", "expires": "2020-04-11T15:55:35.000Z", "maxAge": 90000, "domain": "facebook.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.888Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "presence", "value": "EDvF3EtimeF1586530538EuserFA21B49996898966A2EstateFDutF0Et2F_5b_5dElm2FnullEuct2F1586530538966EtrFnullEtwF1874024300EatF1586530538966CEchFDp_5f1B49996898966F0CC", "domain": "facebook.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:38.968Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "locale", "value": "en_US", "domain": "facebook.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:38.972Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "a11y", "value": "%7B%22sr%22%3A0%2C%22sr-ts%22%3A1586530538976%2C%22jk%22%3A0%2C%22jk-ts%22%3A1586530538976%2C%22kb%22%3A0%2C%22kb-ts%22%3A1586530538976%2C%22hcm%22%3A0%2C%22hcm-ts%22%3A1586530538976%7D", "domain": "facebook.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:38.977Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "datr", "value": "5IiQXkEbkAne00pKn_CBj1DV", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2020-04-10T14:55:33.099Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "fr", "value": "1onJo8ezsPzlPOBJ4.AWXll299FwYpBacHAs9A0LnVjzo.BekIjk.8X.AAA.0.0.BekIjl.AWXwcq5W", "expires": "2020-07-09T14:55:29.000Z", "maxAge": 7775996, "domain": "facebook.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:33.128Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "sb", "value": "5IiQXir6ev4oAWWxZTnji4kp", "expires": "2022-04-10T14:55:33.000Z", "maxAge": 63072000, "domain": "facebook.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:33.131Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "c_user", "value": "100049996898966", "expires": "2021-04-10T14:55:31.000Z", "maxAge": 31535998, "domain": "facebook.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.716Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "xs", "value": "32%3A3feyOm4uDTvDWg%3A2%3A1586530533%3A-1%3A-1", "expires": "2021-04-10T14:55:31.000Z", "maxAge": 31535998, "domain": "facebook.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.718Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "spin", "value": "r.1001973156_b.trunk_t.1586530535_s.1_v.2_", "expires": "2020-04-11T15:55:35.000Z", "maxAge": 90000, "domain": "facebook.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.888Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "presence", "value": "EDvF3EtimeF1586530538EuserFA21B49996898966A2EstateFDutF0Et2F_5b_5dElm2FnullEuct2F1586530538966EtrFnullEtwF1874024300EatF1586530538966CEchFDp_5f1B49996898966F0CC", "domain": "facebook.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:38.968Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "locale", "value": "en_US", "domain": "facebook.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:38.972Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "a11y", "value": "%7B%22sr%22%3A0%2C%22sr-ts%22%3A1586530538976%2C%22jk%22%3A0%2C%22jk-ts%22%3A1586530538976%2C%22kb%22%3A0%2C%22kb-ts%22%3A1586530538976%2C%22hcm%22%3A0%2C%22hcm-ts%22%3A1586530538976%7D", "domain": "facebook.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:38.977Z", "lastAccessed": "2020-04-10T14:55:38.985Z" }, { "key": "sb", "value": "5IiQXir6ev4oAWWxZTnji4kp", "expires": "2022-04-10T14:55:33.000Z", "maxAge": 63072000, "domain": "messenger.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.726Z", "lastAccessed": "2020-04-10T14:55:38.988Z" }, { "key": "c_user", "value": "100049996898966", "expires": "2021-04-10T14:55:31.000Z", "maxAge": 31535998, "domain": "messenger.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.730Z", "lastAccessed": "2020-04-10T14:55:38.988Z" }, { "key": "xs", "value": "32%3A3feyOm4uDTvDWg%3A2%3A1586530533%3A-1%3A-1", "expires": "2021-04-10T14:55:31.000Z", "maxAge": 31535998, "domain": "messenger.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.734Z", "lastAccessed": "2020-04-10T14:55:38.988Z" }, { "key": "fr", "value": "1onJo8ezsPzlPOBJ4.AWXll299FwYpBacHAs9A0LnVjzo.BekIjk.8X.AAA.0.0.BekIjl.AWXwcq5W", "expires": "2020-07-09T14:55:29.000Z", "maxAge": 7775996, "domain": "messenger.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:35.737Z", "lastAccessed": "2020-04-10T14:55:38.988Z" }, { "key": "spin", "value": "r.1001973156_b.trunk_t.1586530535_s.1_v.2_", "expires": "2020-04-11T15:55:35.000Z", "maxAge": 90000, "domain": "messenger.com", "path": "/", "secure": true, "httpOnly": true, "hostOnly": false, "creation": "2020-04-10T14:55:37.421Z", "lastAccessed": "2020-04-10T14:55:38.988Z" }, { "key": "presence", "value": "EDvF3EtimeF1586530538EuserFA21B49996898966A2EstateFDutF0Et2F_5b_5dElm2FnullEuct2F1586530538966EtrFnullEtwF1874024300EatF1586530538966CEchFDp_5f1B49996898966F0CC", "domain": "messenger.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:38.970Z", "lastAccessed": "2020-04-10T14:55:38.988Z" }, { "key": "locale", "value": "en_US", "domain": "messenger.com", "path": "/", "secure": true, "hostOnly": false, "creation": "2020-04-10T14:55:38.974Z", "lastAccessed": "2020-04-10T14:55:38.988Z" }]
        login({ appState: JSON.parse(JSON.stringify(credentials)) }, (err, api) => {
            if (err) return console.error(err);
            api.getThreadList(20, null, [], (err, list) => {
                if (err) return console.error(err)
                var history_json = {};
                var k = "";
                let requests = list.map((item) => {
                    return new Promise((resolve) => {
                        // console.log(item.name)
                        // console.log(getDateFromTimestamp(item.timestamp))
                        k = item.threadID;
                        api.getThreadHistory(item.threadID, 1, undefined, (err, history) => {
                            if (err) return console.error(err)
                            var isRead;
                            // console.log(history[0])
                            if (item.unreadCount === 0) {
                                isRead = true;
                            } else {
                                isRead = false;
                            }
                            var whose
                            if (history[0].senderID === api.getCurrentUserID()) {
                                whose = "Ty";
                            } else {
                                // api.getUserInfo(history[0].senderID, (err, info) => {
                                //     whose = info.name;
                                // })
                                whose = "Nie Ty";
                            }
                            history_json[k] = {
                                name: item.name,
                                threadID: item.threadID,
                                last_message: history[0].body,
                                isRead: isRead,
                                imageSrc: item.imageSrc,
                                who: whose,
                                when: getDateFromTimestamp(item.timestamp),
                            }

                            resolve()
                        })

                    });
                });
                Promise.all(requests).then(() => response.json(JSON.parse(JSON.stringify(history_json)))).catch((err) => console.error(err))
            })
        })
    }
});




// listen for requests :)
const listener = app.listen(55400, () => {
    console.log("Your app is listening on port " + listener.address().port);
});