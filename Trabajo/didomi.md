## Para hacer pruebas
- En el navegador, pestaña de sources, Overrides, cmp+p buscar archivo policy7mu.js o policy_v3.js y sustituir por el generado en la build en la carpeta dist del proyecto al hacer npm run build

## Repo
[cookies-policy](http://gitlab.internet.int/UnidadEditorial/cookies-policy)
feature/change-configuration-from-didomi-to-console

## ueCookiesPolicy
- ueCookiesPolicy.isAccepted({vendors: 'google'})

- ueCookiesPolicy.getUserConsentStatusForVendor('google')

- ueCookiesPolicy.getUserConsentStatusForVendors('google')
- ueCookiesPolicy.getUserConsentStatusForVendors(['808', '255', 'GOOGLE'])

- ueCookiesPolicy.getConsentData()
"CO6IlAYO6IlAYAHABBENA4CsAP_AAH_AAAAAGrNf_X_fb2vj-_5999t0eY1f9_63v-wzjgeNs-8Nyd_X_L8Xq2MyvB36pq4KuR4Eu3LBAQdlHOHcTQmQ4IkVqTLsbk2Mq7NKJ7LEilMbM2dYGH9vn9XTuZCY70_s___z_3-_-___77f_L-390DUyCTDUvgIEhLGAkmzSqFECEK4kKgHABRQjC0aWEBK4KdlcBHqCBAAgNQEYEQIMQUYsggAAAACSiIASA8EAiAIgEAAIAVoCEABEgCCwAkDAIABQDQsAIoglAkIMjgqOUQICpFooJ5IwJILnYwAA.f_gAD_gAAAAA"

## Didomi
[Didomi](https://developers.didomi.io/cmp/web-sdk/reference/events)
- Didomi.getUserConsentStatusForAll().vendors

## Cargar publi después de obtener el cmd, cuidate plus

- En el navegador, pestaña de sources, Overrides, cmp+p buscar archivo gdpr y sustituir por el generado en la build en la carpeta dist del proyecto al hacer npm run build

````
!function () {
  "use strict"; 
  window.didomiOnReady = window.didomiOnReady || [];
  window.didomiOnReady.push(function () {
    console.log('Didomi listo');
  });
}();

!function () {
  "use strict"; 
window.didomiEventListeners = window.didomiEventListeners || [];
window.didomiEventListeners.push({
  event: 'consent.changed',
  listener: function (context) {
    console.log('SUERTE');
    alert('dsds');
    window.googletag.pubads().refresh();
  }
});
}();

window.addEventListener(
  "message",
  function (event) {
    try {
      var data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      
      if (data && data.__cmpReturn) {
        // data.__cmpReturn contains the response from the CMP
        console.log('cmp cargado');
        alert('cmp cargado');
        if (data.__cmpReturn.callId === "get-user-consent-status-for-google") {
          // This is the response to our call for getting the consent status for Google
          // The status is in data.__cmpReturn.returnValue
          // Do something
          console.log('cmp google');
          alert('cmp google');
        }
      }
    } catch(e) {
      // An error happened when decoding the message data
      // Most likely, the message wasn't related to the CMP so do nothing
      console.log('no cmp');
      alert('no cmp');
    }
  },
  false
);

window.parent.postMessage({
  __cmpCall: 
    {
      command: "getUserConsentStatusForVendor", 
      parameter: ["google"], 
      callId: "get-user-consent-status-for-google"
    }
}, "*");


__cmp('getConsentData', null, function (result) {
  // The IAB consent string is available in the `consentData` property of the object
  console.log(result.consentData);
  alert(result.consentData);
});
````



