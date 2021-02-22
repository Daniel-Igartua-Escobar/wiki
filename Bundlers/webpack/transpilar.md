
## Transpilar a es5 para que sea compatible con navegadores antiguos
```bash
    # Puente entre Babel y Webpack
    npm i -D babel-loader

    # Instalar Babel
    npm install --save-dev @babel/core

    # Configurar el tipo de transpilado
    npm i -D @babel/preset-env
```

```js
    //Añadimos el loader babel en webpack.config.js
    module.exports = {
        module: {
            rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
            ]
        }
    }
```
