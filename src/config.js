function getPlayedService(protocol, hostname, port) {
  return protocol + '://' + hostname + ':' + port;
}

export function playedServiceUrl() {
  return getPlayedService('http', window.location.hostname, '3300');
}