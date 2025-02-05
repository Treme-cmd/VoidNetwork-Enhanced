/**
 * XOR Encoder/Decoder
 * (unchanged from your original code)
 */
const xor = {
  encode(str) {
    if (!str) return str;
    let result = "";
    for (let i = 0; i < str.length; i++) {
      // XOR every character except at indexes multiple of 4
      result += i % 4 ? String.fromCharCode(str.charCodeAt(i) ^ 2) : str[i];
    }
    return encodeURIComponent(result);
  },
  decode(str) {
    if (!str) return str;
    const [input, ...search] = str.split("?");
    let result = "";
    const decoded = decodeURIComponent(input);
    for (let i = 0; i < decoded.length; i++) {
      // XOR every character except at indexes multiple of 4
      result += i % 4 ? String.fromCharCode(decoded.charCodeAt(i) ^ 2) : decoded[i];
    }
    return result + (search.length ? "?" + search.join("?") : "");
  },
};

/* global Ultraviolet */

self.__uv$config = {

  prefix: "/uv/service/",


  bare: "/bare/",


  encodeUrl: Ultraviolet.codec.base64.encode,
  decodeUrl: Ultraviolet.codec.base64.decode,


  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",


  removeCSP: true,
  removeXFrame: true,

 
  forceWebSocket: true,


  domainRewrites: [
    "taming.io",
    "www.taming.io",
    "server.taming.io",
    "ws.taming.io",
    "cdn.taming.io",
    "api.taming.io",
  ],


};
