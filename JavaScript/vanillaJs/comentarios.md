# JavaScript

## Comentarios

```javaScript
  /**
   * Private function to set LocalStorage
   * @param {string} key
   * @param {string} value
   */
  function setLocalStorage(key, value) {
    if (typeof value === 'undefined') {
      value = ''
    }
    if (window.localStorage) {
      window.localStorage.setItem(key, value);
    } else {
      console.warn('window.localStorage is undefinded')
    }
  }

  /**
   * Private function to set Cookie Value
   * @param {Object} cookie
     * name: {String} Required,
     * value: {String},
     * path: {String}, default  is '/' (use null to unset path)
     * expires: {Date},
     * maxAge:
     * domain: {String}
   * return a decode value
   */
  function setCookie(cookie) {
    var _cookie = cookie.name + "=" + (cookie.value === undefined ? '' : cookie.value )
    _cookie += cookie.expires ?  "; expires=" + cookie.expires : ''
    _cookie += cookie.maxAge ?  "; max-age=" + cookie.maxAge : ''
    _cookie += cookie.path === null ? '' : "; path=" + (cookie.path === undefined ? '/' : cookie.path)
    _cookie += "; domain=" + (cookie.domain || Utils.getRootDomain()) + ";"
    window.document.cookie = _cookie
    return _cookie
  }
  ```
