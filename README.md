This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# ¡Hola, Bienvenidos!

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Project Name 📱

> A brief and compelling one-liner about your project.

![React Native](https://img.shields.io/badge/React%20Native-v0.72.0-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey)

## 🚀 **Sobre el proyecto**

- **Que hace?**
  - Esta pequeña app consulta información a una API externa que regresa un arreglo de publicaciones; las cuales se muestran en una vista "scrolleable" cada publicación contiene detalles como título y descripción

- **Porque se desarrollo esta prueba?**
  - Se trata de demostrar mi conocimiento avanzado sobre React y React Native

---

## 📹 **Ve la app en funcionamiento**


---

## 🛠️ **Stack Tecnológico**

- **Core:** React Native, TypeScript
- **UI:** React Native Paper
- **Navigation:** React Navigation
- **Backend API:** https://jsonplaceholder.typicode.com/posts

---

## ⚙️ **Funcionalidades**

- 📋 Consulta API externa
- 🌟 Renderiza publicaciones en una vista "Scrolleable" que consta de un título y una imagen
- 🚀 Cada publicación contiene detalles como Título y descripción
- 🔒 Se agregó "Loaders" cuando se carga los datos de la API

---

## 🚀 **Funcionalidades BONUS**

- 📋 Se agregó un gradiente como fondo de Home
- 🌟 Loaders en cada imagen que renderiza
- 🚀 Se agregaron animaciones de tipo "Lottie" 
- 🔒 Se agregó una bonita "Splash Screen" cuando recién carga la app por primera vez

---
## 🚀 **Desafios enfrentados y buenas prácticas de desarrollo**

- 📋 Performance de la vista principal de publicaciones:
      1.- Se utilizó componente FlatList en lugar de un simple Scrollview
      2.- Se uso React.memo para evitar que cada tarjeta causara otro "render"
      3.- Se urilizó useCallback para evitar en lo posible un render adicional en cada publicación

---

## 🛠️ **Ejecutar esta app**
## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
