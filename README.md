# Proyecto i42

## Introduccón.

En este test puse mucha dedicación y a prueba tanto mi lógica como mis habilidades técnicas. A continuación, detallaré los comandos a realizar para inicializar el proyecto y los comandos para diferentes funcionalidades.

## Inicialización.

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/CarlosLagos29/Challenge-42.git
   cd Challenge-42
   ```

2. **Instalación de Dependencias**

   ```bash
   npm install
   ```

## Funcionalidades:

### Test unitarios:

Este proyecto cuenta con test unitarios los cuales fueron echos con `Jest`.

_Para el primer ejercicio el cual es `Non-Constructible Change` ejecuta el siguiente comando:_

```bash
npm run test01
```

_Para el segundo test `Two Number Sum` ejecuta:_

```bash
npm run test02
```

_O si prefieres ejecutar ambos al mismo tiempo:_

```bash
npm run test
```

### Experiencia web:

Este proyecto tambien cuenta con una experiencia web realizada con `React` y `TailwindCSS`, con un diseño minimalista y responsive, para esta puedes ejecutarla de manera local ejecutando:

```bash
npm run dev
```

**Y dirigiendote al puerto [http://localhost:5173/](http://localhost:5173/) o al puerto que indique la consola.**
<br/>
**O si prefieres puedes visitar el proyecto deployado en [https://challengei42.netlify.app/](https://challengei42.netlify.app/)**

## Formato y Correcciones:

Tambien se cuenta con las tecnologias `EsLint` y `Prettier` para darle formato y correcciones al codigo:

**Comando para Prettier:**
```bash
npm run format
```
**Comando para EsLint:**
```bash
npm run lint
```
