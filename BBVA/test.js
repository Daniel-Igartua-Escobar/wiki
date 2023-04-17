/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import sinon from 'sinon';
import gemaStorage from '@gema/bbva-gema-storage';
import '../bbva-gema-push-notification-manager.js';

suite('BbvaGemaPushNotificationManager', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<bbva-gema-push-notification-manager></bbva-gema-push-notification-manager>`);
    await el.updateComplete;
  });

  suite('setUserIsLogged method', () => {
    test('The _initRegister method should be called the first time it is executed.', () => {
      const initRegisterStub = sinon.stub(el, '_initRegister');

      el.setUserIsLogged();

      assert.isTrue(el._isLogged)
      assert.isTrue(initRegisterStub.called);
      initRegisterStub.restore();
    });

    test('The _initRegister method should not be called if the _initRegister method has already been executed.', () => {
      el._isLogged = true;
      const initRegisterStub = sinon.stub(el, '_initRegister');

      el.setUserIsLogged();

      assert.isTrue(initRegisterStub.notCalled);
      initRegisterStub.restore();
    });
  });

  suite('_getDeviceUID method', () => {
    test('Should return the device UID of the device.', async () => {
      const _callHybridPluginMethodAsPromiseStub = sinon.stub(el, '_callHybridPluginMethodAsPromise').resolves('78fytftyf675656757');

      const deviceId = await el._getDeviceUID();

      assert.isTrue(_callHybridPluginMethodAsPromiseStub.calledWith('DeviceUID', 'getuid', { shortened: false }));
      assert.equal(deviceId, '78fytftyf675656757');
      _callHybridPluginMethodAsPromiseStub.restore();
    });

    test('Error call plugin', async () => {
      const _callHybridPluginMethodAsPromiseStub = sinon.stub(el, '_callHybridPluginMethodAsPromise').rejects();

      await el._getDeviceUID();

      assert.isTrue(_callHybridPluginMethodAsPromiseStub.called);
      _callHybridPluginMethodAsPromiseStub.restore();
    });
  });

  suite('_getDeviceInfo method', () => {
    test('Should return device information.', async () => {
      const _callHybridPluginMethodAsPromiseStub = sinon.stub(el, '_callHybridPluginMethodAsPromise')
        .onFirstCall().resolves('Apple')
        .onSecondCall().resolves('iPhone14,2')
        .onThirdCall().resolves({ platformName: 'IOS', versionName: '15.2'});
      const expected = { manufacturer: 'Apple', model: 'iPhone14,2', platform: { platformName: 'IOS', versionName: '15.2'} };

      const deviceInfo = await el._getDeviceInfo();

      assert.isTrue(_callHybridPluginMethodAsPromiseStub.calledWith('DeviceInfo', 'getmanufacturer', {}));
      assert.isTrue(_callHybridPluginMethodAsPromiseStub.calledWith('DeviceInfo', 'getdevicemodel', {}));
      assert.isTrue(_callHybridPluginMethodAsPromiseStub.calledWith('DeviceInfo', 'getplatform', {}));
      assert.deepEqual(deviceInfo, expected);
      _callHybridPluginMethodAsPromiseStub.restore();
    });

    test('Error call plugin', async () => {
      const _callHybridPluginMethodAsPromiseStub = sinon.stub(el, '_callHybridPluginMethodAsPromise').rejects();

      await el._getDeviceInfo();

      assert.isTrue(_callHybridPluginMethodAsPromiseStub.called);
      _callHybridPluginMethodAsPromiseStub.restore();
    });
  });

  suite('_getDeviceInfoPayload method', () => {
    test('Should return a payload with the device information.', () => {
      const deviceInfo = { manufacturer: 'Apple', model: 'iPhone14,2', platform: { platformName: 'ios', versionName: '15.2'} };
      el._deviceId = '787daada7d76'
      const expected = {
        brand: 'Apple',
        model: 'iPhone14,2',
        os: 'IOS',
        osVersion: '15.2',
        alias: '787daada7d76',
      };

      const payload = el._getDeviceInfoPayload(deviceInfo);

      assert.deepEqual(payload, expected);
    });

    test('If no parameters are passed it returns the data without any information.', () => {
      const expected = {
        brand: undefined,
        model: undefined,
        os: '',
        osVersion: '',
        alias: '',
      };

      const payload = el._getDeviceInfoPayload();

      assert.deepEqual(payload, expected);
    });
  });

  suite('_registerDevice method', () => {
    test('Should call _setAppToDeviceAppList method on successful registration.', async () => {
      const _getDeviceInfoStub = sinon.stub(el, '_getDeviceInfo');
      const _getDeviceInfoPayloadStub = sinon.stub(el, '_getDeviceInfoPayload').returns({});
      const registerDeviceStub = sinon.stub(el._devicesManagementDevicesDevicePutService, 'registerDevice');
      const _setAppToDeviceAppListStub = sinon.stub(el, '_setAppToDeviceAppList');
      el._deviceId = '787daada7d76'

      await el._registerDevice();

      assert.isTrue(_getDeviceInfoStub.called);
      assert.isTrue(_getDeviceInfoPayloadStub.called);
      assert.isTrue(registerDeviceStub.calledWith({ deviceId: '787daada7d76', body: {} }));
      assert.isTrue(_setAppToDeviceAppListStub.called);
      _getDeviceInfoStub.restore();
      _getDeviceInfoPayloadStub.restore();
      registerDeviceStub.restore();
      _setAppToDeviceAppListStub.restore();
    });

    test('When registration fails you should call _setPushNotificationToggle method.', async () => {
      const _getDeviceInfoStub = sinon.stub(el, '_getDeviceInfo');
      const _getDeviceInfoPayloadStub = sinon.stub(el, '_getDeviceInfoPayload').returns({});
      const registerDeviceStub = sinon.stub(el._devicesManagementDevicesDevicePutService, 'registerDevice').rejects();
      const _setAppToDeviceAppListStub = sinon.stub(el, '_setAppToDeviceAppList');
      const setPushNotificationToggleStub = sinon.stub(el, '_setPushNotificationToggle');

      await el._registerDevice();

      assert.isTrue(_getDeviceInfoStub.called);
      assert.isTrue(_getDeviceInfoPayloadStub.called);
      assert.isTrue(registerDeviceStub.called);
      assert.isTrue(_setAppToDeviceAppListStub.notCalled);
      assert.isTrue(setPushNotificationToggleStub.calledWith(true));
      _getDeviceInfoStub.restore();
      _getDeviceInfoPayloadStub.restore();
      registerDeviceStub.restore();
      _setAppToDeviceAppListStub.restore();
      setPushNotificationToggleStub.restore();
    });
  });

  suite('_getAppInfoPayload method', () => {
    test('Should return a payload with the App information.', () => {
      el.pushNotificationConfig = {
        applicationId: 'com.bbva.GEMA.global',
        appName: 'BBVA_GEMA',
        language: 'SPA',
        userType: 'BUSINESS'
      };
      el.appVersion = '1.6.2';
      el._userId = '0026008200101541JUANCA02';
      el.country = 'CO';
      el._nativeToken = 'jhdada87daasdad3231';
      el._isEnabled = false;
      const expected = {
        appName: 'BBVA_GEMA',
        version: '1.6.2',
        language: 'SPA',
        userId: '0026008200101541JUANCA02',
        userType: 'BUSINESS',
        country: 'CO',
        pushNotification: {
          isEnabled: false,
          token: 'jhdada87daasdad3231',
          isValidToken: true,
        },
        simplePayment: {
          isEnabled: true,
        },
      };

      const payload = el._getAppInfoPayload();

      assert.deepEqual(payload, expected);
    });
  });


  suite('_setAppToDeviceAppList method', () => {
    test('Should register the app in the list of apps on the device and when successful update the user data.', async () => {
      const _getAppInfoPayloadStub = sinon.stub(el, '_getAppInfoPayload').returns({});
      const setAppToDeviceAppListStub = sinon.stub(el._devicesDeviceApplicationsApplicationPutService, 'setAppToDeviceAppList');
      const _setUserDataStub = sinon.stub(el, '_setUserData');
      const setPushNotificationToggleStub = sinon.stub(el, '_setPushNotificationToggle');
      el._deviceId = '787daada7d76';
      el.pushNotificationConfig = {
        applicationId: 'com.bbva.GEMA.global',
      };

      await el._setAppToDeviceAppList();

      assert.isTrue(_getAppInfoPayloadStub.called);
      assert.isTrue(setAppToDeviceAppListStub.calledWith({
        deviceId: '787daada7d76',
        applicationId: 'com.bbva.GEMA.global',
        body: {},
      }));
      assert.isTrue(_setUserDataStub.called);
      assert.isTrue(setPushNotificationToggleStub.calledWith(false));
      _getAppInfoPayloadStub.restore();
      setAppToDeviceAppListStub.restore();
      _setUserDataStub.restore();
      setPushNotificationToggleStub.restore();
    });

    test('When app registration fails it should not update user data', async () => {
      const _getAppInfoPayloadStub = sinon.stub(el, '_getAppInfoPayload');
      const setAppToDeviceAppListStub = sinon.stub(el._devicesDeviceApplicationsApplicationPutService, 'setAppToDeviceAppList').rejects();
      const _setUserDataStub = sinon.stub(el, '_setUserData');
      const setPushNotificationToggleStub = sinon.stub(el, '_setPushNotificationToggle');

      await el._setAppToDeviceAppList();

      assert.isTrue(_getAppInfoPayloadStub.called);
      assert.isTrue(setAppToDeviceAppListStub.called);
      assert.isTrue(_setUserDataStub.notCalled);
      assert.isTrue(setPushNotificationToggleStub.calledWith(true));
      _getAppInfoPayloadStub.restore();
      setAppToDeviceAppListStub.restore();
      _setUserDataStub.restore();
      setPushNotificationToggleStub.restore();
    });
  });

  suite('updateAppInfo method', () => {
    test('If the call to the service to update the app info is successful, it should update the user data.', async () => {
      const updateAppInfoStub = sinon.stub(el._devicesDeviceApplicationsApplicationPatchService, 'updateAppInfo');
      const _setUserDataStub = sinon.stub(el, '_setUserData');
      const _customDispatchStub = sinon.stub(el, '_customDispatch');
      const setPushNotificationToggleStub = sinon.stub(el, '_setPushNotificationToggle');

      await el.updateAppInfo({ checked: true });

      assert.isTrue(el._isEnabled);
      assert.isTrue(updateAppInfoStub.called);
      assert.isTrue(_setUserDataStub.called);
      assert.isTrue(_customDispatchStub.notCalled);
      assert.isTrue(setPushNotificationToggleStub.called);
      updateAppInfoStub.restore();
      _setUserDataStub.restore();
      _customDispatchStub.restore();
      setPushNotificationToggleStub.restore();
    });

    test('If the call to the service to update the app info fails, it should display an error modal.', async () => {
      const updateAppInfoStub = sinon.stub(el._devicesDeviceApplicationsApplicationPatchService, 'updateAppInfo').rejects();
      const _setUserDataStub = sinon.stub(el, '_setUserData');
      const _customDispatchStub = sinon.stub(el, '_customDispatch');
      const setPushNotificationToggleStub = sinon.stub(el, '_setPushNotificationToggle');

      await el.updateAppInfo({ checked: true });

      assert.isFalse(el._isEnabled);
      assert.isTrue(updateAppInfoStub.called);
      assert.isTrue(_setUserDataStub.notCalled);
      assert.isTrue(_customDispatchStub.calledWith('settings-show-notification-toast', {
        text: 'bbva-gema-push-notification-manager-notification-toast-text',
        show: true,
      }));
      assert.isTrue(setPushNotificationToggleStub.called);
      updateAppInfoStub.restore();
      _setUserDataStub.restore();
      _customDispatchStub.restore();
      setPushNotificationToggleStub.restore();
    });
  });

  suite('_getUserData method', () => {
    test('Should get user data', async () => {
      const getRememberedUserDataStub = sinon.stub(gemaStorage.secureLocalStorage, 'getRememberedUserData').returns({ userId: '01234', reference: 'prueba1' });
  
      const userData = await el._getUserData();

      assert.deepEqual(userData, { userId: '01234', reference: 'prueba1' });
      getRememberedUserDataStub.restore();
    });
  });

  suite('_setUserData method', async () => {
    test('Should set the user data and launch a channel to native.', async () => {
      const _getUserDataStub = sinon.stub(el, '_getUserData').resolves({ userId: '01234', reference: 'prueba1' });
      const setRememberedUserDataStub = sinon.stub(gemaStorage.secureLocalStorage, 'setRememberedUserData');
      const _customDispatchStub = sinon.stub(el, '_customDispatch');

      await el._setUserData({ pushNotification: { isEnabled: true } });

      assert.isTrue(_customDispatchStub.calledWith('native-user-data', {
        userId: '01234',
        reference: 'prueba1',
        pushNotification: { isEnabled: true }
      }));
      assert.isTrue(_getUserDataStub.called);
      assert.isTrue(setRememberedUserDataStub.called);
      _getUserDataStub.restore();
      _customDispatchStub.restore();
      setRememberedUserDataStub.restore();
    });

    test('If no parameters are passed it should not modify the user previous data.', async () => {
      const _getUserDataStub = sinon.stub(el, '_getUserData').resolves({ userId: '01234', reference: 'prueba1' });
      const setRememberedUserDataStub = sinon.stub(gemaStorage.secureLocalStorage, 'setRememberedUserData');
      const _customDispatchStub = sinon.stub(el, '_customDispatch');

      await el._setUserData();

      assert.isTrue(_customDispatchStub.calledWith('native-user-data', {
        userId: '01234',
        reference: 'prueba1'
      }));
      assert.isTrue(_getUserDataStub.called);
      assert.isTrue(setRememberedUserDataStub.called);
      _getUserDataStub.restore();
      _customDispatchStub.restore();
      setRememberedUserDataStub.restore();
    });
  });

  suite('setNativeToken method', () => {
    test('Should set the native token and start registration.', () => {
      const initRegisterStub = sinon.stub(el, '_initRegister');

      el.setNativeToken('e44tefr3445rsf');

      assert.equal(el._nativeToken , 'e44tefr3445rsf');
      assert.isTrue(initRegisterStub.called);
      initRegisterStub.restore();
    });

    test('If the token already has value it should not start registration.', () => {
      el._nativeToken = 'e44tefr3445rsf';
      const initRegisterStub = sinon.stub(el, '_initRegister');

      el.setNativeToken('e44tefr3445rsf');

      assert.isTrue(initRegisterStub.notCalled);
      initRegisterStub.restore();
    });
  });

  suite('_initRegister method', async () => {
    test('If you have the native token and the user is logged in it gets the user data and starts the registration.', async () => {
      el._nativeToken = 'e44tefr3445rsf';
      el._isLogged = true;
      el._isNative = true;
      el.userPrefix = '00260082';
      const _getUserDataStub = sinon.stub(el, '_getUserData').resolves({ idAccessCard: '00101541', userId: 'JUANCA02' });
      const _getDeviceUIDStub = sinon.stub(el, '_getDeviceUID');
      const _registerDeviceStub = sinon.stub(el, '_registerDevice');

      await el._initRegister();

      assert.isTrue(_getUserDataStub.called);
      assert.isTrue(_getDeviceUIDStub.called);
      assert.isTrue(_registerDeviceStub.called);
      assert.equal(el._userId, '0026008200101541JUANCA02');
      _getUserDataStub.restore();
      _getDeviceUIDStub.restore();
      _registerDeviceStub.restore();
    });

    test('If you do not have the native token or the user is not logged in you should not start the registration.', async () => {
      el._nativeToken = 'e44tefr3445rsf';
      el._isLogged = false;
      const _getUserDataStub = sinon.stub(el, '_getUserData');
      const _getDeviceUIDStub = sinon.stub(el, '_getDeviceUID');
      const _registerDeviceStub = sinon.stub(el, '_registerDevice');

      await el._initRegister();

      assert.isTrue(_getUserDataStub.notCalled);
      assert.isTrue(_getDeviceUIDStub.notCalled);
      assert.isTrue(_registerDeviceStub.notCalled);
      _getUserDataStub.restore();
      _getDeviceUIDStub.restore();
      _registerDeviceStub.restore();
    });
  });

  suite('_setPushNotificationToggle method', () => {
    test('If the user has saved the notification settings to true the toggle must be enabled.', () => {
      const _customDispatchStub = sinon.stub(el, '_customDispatch');
      el._isEnabled = true;

      el._setPushNotificationToggle(false);

      assert.isTrue(_customDispatchStub.calledWith('set-push-notification-toggle', {
        disabled: false,
        checked: true
      }));
      _customDispatchStub.restore();
    });

    test('If the user has not saved the notification configuration data, the toggle must be disabled.', () => {
      const _customDispatchStub = sinon.stub(el, '_customDispatch');
      el._isEnabled = false;

      el._setPushNotificationToggle(true);

      assert.isTrue(_customDispatchStub.calledWith('set-push-notification-toggle', {
        disabled: true,
        checked: false
      }));
      _customDispatchStub.restore();
    });
  });

  suite('_customDispatch method', () => {
    test('Should trigger an event with the name and the detail that is passed as parameters.', done => {
      el.addEventListener('bbva-gema-push-notification-manager-event', ev => {
        assert.deepEqual(ev.detail, {});
        done();
      });

      el._customDispatch('bbva-gema-push-notification-manager-event', {});
    });
  });

  suite('resetData method', () => {
    test('Should reset the data to initial values.', () => {
      el.resetData();

      assert.isFalse(el._isLogged);
      assert.equal(el._nativeToken, '');
    });
  });
});

// const mockUserAgent = device => window.navigator.__defineGetter__('userAgent', () => device);
// mockUserAgent('iPhone');
