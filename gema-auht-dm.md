        singleAppWebHost: {
          type: String
        },


        /**
     * Function to prepare the call to the service if user is allowed on
     * dynamic config.
     *
     * @param {Object} data data to send in the request
     * @emits pre-user-data
     */
    async login(data) {
      console.log('-------------login-------------', data);
      const configVersion = this._getConfigVersion();

      if (configVersion && configVersion.active) {
        this._loginData = data;
        this._customDispatch('gema-auth-get-application-version');
      } else {
        this._login(data);
      }
    }

    /**
     * 
     */
    async loginSingleAppWeb(data) {
      console.log('-------------loginSingleAppWeb-------------', data);
      this._setAccessData(data);
      this.webPayload = this._createLoginSingleAppWebPayload(data);
      console.log('-------------loginSingleAppWeb-------------', this.webPayload);
      // this._createLoginWebPayload(data, '27');
      await this._preUserData();
      this.$.authDPSingleAppWeb.generateRequest();
    }

    _createLoginSingleAppWebPayload(data) {
      return {
        authentication: {
          userID: data.userId,
          consumerID: '12000069',
          authenticationType: '02',
          authenticationData: [
            {                 
              idAuthenticationData: "password",
              authenticationData: [data.password]
            }
          ]
        },
        backendUserRequest: {
          userId: '',
          accessCode: data.userId,
          dialogId: ''
        }
      };
    }

    _createLoginSingleAppPayload(tsec) {
      return {
        authentication: {
          userID: this.idAccessCard,
          consumerID: this.consumerID,
          authenticationType: '27',
          authenticationData: [
            {                 
              idAuthenticationData: 'tsec-actual',
              authenticationData: [tsec]
            }
          ]
        },
        backendUserRequest: {
          userId: '',
          accessCode: this.idAccessCard,
          dialogId: ''
        }
      };
    }

    _processSuccessAuthSingleAppWebResponse(ev, response) {
      const tsec = gema.path('headers.tsec', response, '');
      console.log('----------------_processSuccessAuthSingleAppWebResponse------------',ev, tsec);

      this.webPayload = this._createLoginSingleAppPayload(tsec);
      console.log('-------------loginSingleAppWeb-------------', this.webPayload);

      this.$.authDPSingleApp.generateRequest();
    }

    _processSuccessAuthSingleAppResponse(ev, response) {
      console.log('----------------_processSuccessAuthSingleAppResponse------------',ev, response);

    }




    _authRequestError(ev, err) {
      console.log('--------------------_authRequestError-------------',ev, err);
      this._customDispatch('token-close', { id: 'gema-auth-dm' });
      this._handleLoginErrors(err);
    }






