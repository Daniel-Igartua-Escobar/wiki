# HOOKS

## Use state
Nos ayudan a controlar el estado de los componentes

Ej: 

```js
  import { useState } from 'react';

  //Creamos una constante con 2 valores, el 1º la variable a la que queremos controlar su estado
  //y el 2º será la función que llamaremos para actualizar su estado.
  const [numClics, setNumClics] = useState(0);

  setNumClics(8);
  console.log(numClics);
  // 8
```

