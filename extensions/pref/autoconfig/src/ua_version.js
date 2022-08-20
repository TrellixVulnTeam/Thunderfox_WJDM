//UA version
{
    const ua_versions = [
        {
            "version": 102,
            "start": "2022-06-28T14:00:00+0000"
        },
        {
            "version": 103,
            "start": "2022-07-26T14:00:00+0000"
        },
        {
            "version": 104,
            "start": "2022-08-23T14:00:00+0000"
        },
        {
            "version": 105,
            "start": "2022-09-20T14:00:00+0000"
        },
        {
            "version": 106,
            "start": "2022-10-18T14:00:00+0000"
        },
        {
            "version": 107,
            "start": "2022-11-15T14:00:00+0000"
        },
        {
            "version": 108,
            "start": "2022-12-13T14:00:00+0000"
        },
        {
            "version": 109,
            "start": "2023-01-17T14:00:00+0000"
        },
        {
            "version": 110,
            "start": "2023-02-14T14:00:00+0000"
        },
        {
            "version": 111,
            "start": "2023-03-14T14:00:00+0000"
        },
        {
            "version": 112,
            "start": "2023-04-11T14:00:00+0000"
        },
        {
            "version": 113,
            "start": "2023-05-09T14:00:00+0000"
        },
        {
            "version": 114,
            "start": "2023-06-06T14:00:00+0000"
        },
        {
            "version": 115,
            "start": "2023-07-04T14:00:00+0000"
        },
        {
            "version": 116,
            "start": "2023-08-01T14:00:00+0000"
        },
        {
            "version": 117,
            "start": "2023-08-29T14:00:00+0000"
        },
        {
            "version": 118,
            "start": "2023-09-26T14:00:00+0000"
        },
        {
            "version": 119,
            "start": "2023-10-24T14:00:00+0000"
        },
        {
            "version": 120,
            "start": "2023-11-21T14:00:00+0000"
        },
        {
            "version": 121,
            "start": "2023-12-19T14:00:00+0000"
        },
    ]

    let now = (new Date()).getTime();
    let match = ua_versions.filter(ua_version => {
        if (now >= (new Date(ua_version.start)).getTime()) {
            return true;
        }
        return false;
    })
    if (match && match.length > 0) {
        lockPref("network.http.useragent.version", match[match.length - 1].version);
    } else {
        lockPref("network.http.useragent.version", 102);
    }
}
