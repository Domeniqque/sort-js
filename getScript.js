
const getScript = url => {
    let isHttps = (url.indexOf("https://") === 0);
    let isHttp = url.indexOf("http://") === 0;

    const client = isHttps 
        ? require("https") 
        : require("http");

    if (!isHttps && !isHttp) {
        url = `http://${url}`;
    }
    
    return new Promise((resolve, reject) => {
        client.get(url, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                resolve(data);
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
};

module.exports = getScript;