const direct = "DIRECT";
const httpProxy = "PROXY 127.0.0.1:7890";
function FindProxyForURL(url, host) {
  // ...
  if (dnsDomainIs(host, ".v2ex.com")) {
    return httpProxy;
  }
  return direct;
}