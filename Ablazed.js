var Ablazed = (function(exports) {
  exports.LoadStyle = function(url, async) {
    async = async || true;
    var link = document.createElement('link'),
      ref = document.getElementsByTagName('head')[0];
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    if (async) {
      link.media = 'none';
      link.onload = function() {
        if (link.media != 'all') {
          link.media = 'all';
        }
      };
    } else {
      link.media = 'all';
    }
    ref.appendChild(link);
  };
  exports.LoadScript = function(url, async) {
    async = async || true;
    var script = document.createElement('script'),
      ref = document.getElementByTagName('head')[0];
    script.type = 'text/javascript';
    script.async = async;
    script.src = url;
    ref.appendChild(script);
  };
  return exports;
})({});
