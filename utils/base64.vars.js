const crypto = require('crypto');


const toB64 = (string) => {
    return new Promise((resolve, reject) => {
        resolve(btoa(string))
    })
    // .resolve(btoa(string))
}

const toB64SHA1 = (string) => {
    return new Promise((resolve, reject) => {
        sha = crypto.createHash('sha1');
        sha.update(string);
        resolve(sha.digest('base64'))
    })
    // .resolve(btoa(string))
}

const hash_hmac = async(algo, data, secret) => {
    const hash = await crypto.createHmac(algo, secret)
               .update(data)
               .digest('hex');
    if (hash) {
        return hash;
    }

}




let desiredText;

const testinggg = toB64("fgxfdjfjfgjfxjfxjfxjffxjfgxjf")
// .then((textuuuu) => {
//     desiredText = textuuuu
// })

const newString = `madddd ${testinggg} is real`
const newPromiseText = new Promise((resolve, reject) => {
    resolve("hello world")
})

console.log("Baes64string", testinggg, newString, "direct promise", newPromiseText. desiredText)

module.exports = {
    toB64,
    toB64SHA1,
    hash_hmac,
}