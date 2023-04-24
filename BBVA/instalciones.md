# Instalaciones

## Google Chrome
## VSCODE
## Android Studio
## Xcode
## Sourcetree

## Clipy

 Instalar [clipy](https://clipy-app.com/)

## Terminal

```bash
    # Homebrew
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        # $yourdevicename cambiar por nombre de usuario del mac
        echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/$yourdevicename/.zprofile
        eval $(/opt/homebrew/bin/brew shellenv)

    # iTerm2
    brew install iterm2

    # zsh
    brew install zsh

    # Oh My Zsh
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## NVM

```bash
    # nvm
    brew install nvm
    #curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

    # Añadir en fichero ~/.zshrc
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    # Ejecutar 
    touch .zshrc
```

## Node con nvm

```bash
    # Ver todas las versiones de node disponibles para descargar
    nvm ls-remote

    # Instalar node v14
    nvm install 14

    # Listar versiones de node
    nvm list

    # Usar una version por defecto
    nvm use default 14.19.3

    # Ver version de node
    npm -v 

    # Intalar node v8
    npm i -g npm@8

    export NODE_OPTIONS="--max-old-space-size=8192"
```

## Cells

 Instalar [cells](https://platform.bbva.com/codelabs/cells/Cells%20Codelabs#/cells/Prepare%20your%20Cells%20Environment/Installing%20Node.js/)

## Obtener datos del usuario y setearlos

```js
    async _getUserData() {
      const userData = await gemaStorage.secureLocalStorage.getRememberedUserData();
      return userData;
    }

    async _setUserData(attribute, value) {
      const userData = await gemaStorage.secureLocalStorage.getRememberedUserData();
      userData[attribute] = value;
      await gemaStorage.secureLocalStorage.setRememberedUserData(userData);
      this._customDispatch('native-user-data', userData);
    }

    await this._setUserData('postLoginEnrollment', postLoginEnrollment);

    test('_setUserData method', async() => {
        const getRememberedUserDataStub = sinon.stub(gemaStorage.secureLocalStorage, 'getRememberedUserData').returns({ userId: '01234', reference: 'prueba1' });
        const setRememberedUserDataStub = sinon.stub(gemaStorage.secureLocalStorage, 'setRememberedUserData');
        const _customDispatchStub = sinon.stub(el, '_customDispatch');

        await el._setUserData('postLoginEnrollment', { toastIter: 1 });

        assert.isTrue(getRememberedUserDataStub.called);
        assert.isTrue(setRememberedUserDataStub.called);
        assert.isTrue(_customDispatchStub.calledWith('native-user-data', {
            userId: '01234',
            reference: 'prueba1',
            postLoginEnrollment: { toastIter: 1 }
        }));

        _customDispatchStub.restore();
        getRememberedUserDataStub.restore();
        setRememberedUserDataStub.restore();
    });
```