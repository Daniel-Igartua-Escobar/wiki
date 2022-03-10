Instalar a nivel global cocoapoads
- sudo gem install cocoapods
  si da error de ruby, ejecutar:
      curl -L https://get.rvm.io | bash -s stable   
      rvm install ruby-2.7.2

Clonar repo de ios
- https://globaldevtools.bbva.com/bitbucket/projects/BBVA_GLOBAL_GEMA_APP/repos/gema-ios.apppack/browse

  En el repo ejecutar:
                                  
sh ./first-pod-cofiguration.sh

- Build IOS

  crear build para IOS, añadir ficheros en la carpeta www del proyecto y ejecutar: pod update
  abrir fichero GloMo.xcworkspace y darle al play en xcode.


- Desde glomo-ios en develop ejecutar
cp -rf ../../../../../../gema-pe/build/PE/test.ios/vulcanize/* ./www/www2/