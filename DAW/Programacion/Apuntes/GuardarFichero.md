# Guardar fichero


## Texto
```java
    public static void guardarFicheroTexto(String texto)
    {
        String f = leerLinea("Nombre del fichero: ");
        BufferedWriter bw = null;
        try
        {
            bw = new BufferedWriter(new FileWriter(f));
            bw.write(texto);
        }
        catch (IOException e)
        {
            System.err.println("Error escribiendo el fichero de texto");
        }
        finally
        {
            try
            {
                if (bw!=null)
                    bw.close();
            }
            catch (IOException e)
            {
                System.err.println("Error cerrando el fichero de texto");
            }
        }
    }
```

```java
    public static void guardarDatos(String f, ArrayList<Sala> s)
    {
        ObjectOutputStream oos = null;
        try
        {
            oos = new ObjectOutputStream(new FileOutputStream(f));
            oos.writeInt(Sala.getContador());
            oos.writeObject(s);
            
        }
        catch (IOException e)
        {
            System.err.println("Error guardando datos");
        }
        finally
        {
            try
            {
                if (oos!=null)
                    oos.close();
            }
            catch (IOException e)
            {
                System.err.println("Error cerrando el fichero de datos");
            }
        }
    }
    
    public static ArrayList<Sala> recuperarDatos(String f)
    {
        ObjectInputStream ois = null;
        try
        {
            ois = new ObjectInputStream(new FileInputStream(f));
            Sala.setContador(ois.readInt());
            return (ArrayList<Sala>) ois.readObject();
        }
        catch (FileNotFoundException e)
        {}
        catch (IOException e)
        {
            System.err.println("Error leyendo el fichero");
        }
        catch (Exception e)
        {
            System.err.println("Error en los datos del fichero");
        }
        finally
        {
            try
            {
                if (ois!=null)
                    ois.close();
            }
            catch (IOException e)
            {
                System.err.println("Error cerrando el fichero de datos");
            }
            
        }
        return null;
    }
```

