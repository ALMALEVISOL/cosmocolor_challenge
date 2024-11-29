# ¡Hola, Bienvenidos!

## Prueba técnica Cosmocolor - Alejandro Del Moral 📱

![React Native](https://img.shields.io/badge/React%20Native-v0.72.0-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Platform](https://img.shields.io/badge/Platform-Android-lightgrey)

## 🚀 **Sobre el proyecto**

- **¿Que hace?**
  - Esta pequeña app consulta información a una API externa que regresa un arreglo de publicaciones; las cuales se muestran en una vista "scrolleable" cada publicación contiene detalles como título y descripción

- **¿Porque se desarrollo esta prueba?**
  - Se trata de demostrar mi conocimiento avanzado sobre React y React Native

---

## 📹 **Ve la app en funcionamiento**
[Video](https://1drv.ms/v/c/2da5ed739defbc76/EaScG3HLvFBKp_Lq7kkIx4QBDkiB14jfAVi4N6vh4dpPMA?e=FGbT2o)

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
- Se utilizó componente FlatList en lugar de un simple Scrollview
- Se utilizó React.memo para evitar que cada tarjeta causara otro "render"
- Se utilizó hook useCallback para evitar, en lo posible, un render adicional en cada publicación
---
---

## 🛠️ **APK - Solo Android**

**Proactividad:** He compilado una apk por si gustan instalarla en su dispositivo android, de cualquier forma pueden ver un video en la parte superior de este README

- Google: https://storage.googleapis.com/cosmocolor_challenge/cosmocolor_challenge.apk
- Onedrive: https://1drv.ms/u/c/2da5ed739defbc76/EbZUTm-rHTlBt3_0uaDBz5IB75etXEBz2PlVgRBlkkfSHQ?e=vMmc9K

---