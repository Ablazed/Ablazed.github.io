var Loop = (function() {
  return function(array, callback) {
    if (typeof callback === 'function') {
      for (var a = 0; a < array.length; a++) {
        try {
          callback(a, array[a]); } catch (error) {
        try {
          callback(a); } catch (error) {
        try {
          callback(); } catch (error) { }}
        }
      }
    } else {
alert('hi');
      throw('Usage: Loop(array, function(index, value) { ... });');
    }
  };
})();

var Iteratea = (function() {
  return function(obj, callback) {
    if (typeof callback === 'function') {
      for (prop in obj) {
        if (obj.hasOwnProperty(prop) && isNaN(prop)) {
          try {
            callback(prop, obj[prop]); } catch (error) {
          try {
            callback(prop); } catch (error) {
          try {
            callback(); } catch (error) { }}
          }
          Iterate(obj[prop], callback);
        }
      }
    } else {
      throw('Usage: Iterate(dictionary, function(key, value) { ... });');
    }
  };
})();

var AblazedExt = (function(exports) {
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
      ref = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.async = async;
    script.src = url;
    ref.appendChild(script);
  };
  exports.Paint = function() {
    var query = document.querySelectorAll('script[src*="Ablazed.js?"]');
    if (query.length > 0) {
      var regex = new RegExp(/([\w]+)$/gm),
        url = query[0].src,
        paint = url.match(regex)[0];
      exports.LoadStyle('https://ablazed.github.io/Paint/' + paint.toLowerCase() + '.css', true);
    } else {
      exports.LoadStyle('https://ablazed.github.io/Paint/default.css', true);
    }
  };
  exports.Lang = function() {
    var query = document.querySelectorAll('pre[data-lang], pre[data-language]'),
      check = [];
    Loop(query, function(index, canvas) {
      var lang = canvas.getAttribute('data-lang') || canvas.getAttribute('data-language'),
        code = canvas.innerHTML;
      canvas.innerHTML = code.replace(/\&/gm, '&amp;').replace(/\</gm, '&lt;').replace(/\>/gm, '&gt;');
      if (check.indexOf(lang) < 0) {
        check.push(lang);
        exports.LoadScript('https://ablazed.github.io/Lang/' + lang.toLowerCase() + '.js', true);
      }
    });
/*
    for (var a = 0; a < query.length; a++) {
      var canvas = query[a],
        lang = canvas.getAttribute('data-lang') || canvas.getAttribute('data-language'),
        code = canvas.innerHTML;
      canvas.innerHTML = code.replace(/\&/gm, '&amp;').replace(/\</gm, '&lt;').replace(/\>/gm, '&gt;');
      if (check.indexOf(lang) < 0) {
        check.push(lang);
        exports.LoadScript('https://ablazed.github.io/Lang/' + lang.toLowerCase() + '.js', true);
      }
    }
*/
  };
  return exports;
})({});

var Ablazed = (function() {
  var Each = function
  function Iterate(obj, query, code) {
alert(code);
    for (prop in obj) {
      if (obj.hasOwnProperty(prop) && isNaN(prop)) {
        alert(prop);
        Iterate(obj[prop], query, prop);
      }
    }
  }
  return function(obj) {
    var query = document.querySelectorAll('pre[data-lang="' + obj['lang'].toLowerCase() + '"], pre[data-language="' + obj['lang'].toLowerCase() + '"]');
    for (var a = 0; a < query.length; a++) {
      Iterate(obj, query, query[a].innerHTML);
    }
  };
})();

(function() {
  window.onload = function() {
    AblazedExt.Paint();
    AblazedExt.Lang();
  };
})();
