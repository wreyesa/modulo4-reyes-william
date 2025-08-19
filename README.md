# Sistema de Gestión de Turnos Médicos (Frontend con React)

Este proyecto corresponde al **Módulo 4: Desarrollo Frontend y Calidad de Software**.  
Se desarrolló una aplicación web utilizando **ReactJS (con Vite)** para gestionar turnos médicos de manera dinámica, con pruebas unitarias y documentación técnica.

## Características principales

- 3 componentes funcionales reutilizables en React (`MedicoCard`, `TurnoForm`, `TurnoList`).  
- Manejo de estado con **Hooks** (`useState`, `useEffect`).  
- Interacción con el DOM y **eventos dinámicos** (crear, modificar y eliminar turnos).  
- Consumo de una **API pública** (ejemplo: obtención de datos desde JSONPlaceholder).  
- **Pruebas unitarias** con Jest y React Testing Library.  
- Proyecto estructurado y documentado con **diagrama de componentes** y **README**.

---

## Estructura del proyecto
```plaintext
├── src/
│ ├── components/
│ │ ├── MedicoCard.jsx
│ │ ├── TurnoForm.jsx
│ │ └── TurnoList.jsx
│ ├── tests/
│ │ ├── MedicoCard.test.jsx
│ │ ├── TurnoForm.test.jsx
│ │ └── TurnoList.test.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Instalación y ejecución

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/wreyesa/modulo4-reyes-william.git
   cd modulo4-reyes-william
   ```
   
2. **Instalar dependencias**
   ```bash
   npm install
   ```
3. **Levantar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

## Ejecución de pruebas unitarias
Se desarrollaron al menos 3 pruebas unitarias para validar renderizado, eventos e interacciones.

Ejecutar pruebas con:
   ```bash
   npm test
  ```

Ejemplos de pruebas implementadas:
- MedicoCard.test.jsx → verifica que se renderice el nombre y especialidad del médico.
- TurnoForm.test.jsx → valida el envío del formulario y creación de turnos.
- TurnoList.test.jsx → comprueba que se muestren y eliminen correctamente los turnos.

## Justificación técnica
- Se usaron componentes funcionales con hooks por simplicidad y claridad en el manejo de estado.
- El consumo de API se implementó con fetch + useEffect, manejando los estados de carga y error.
- Las pruebas unitarias permiten asegurar calidad y detectar errores tempranos.
- React fue elegido frente a JavaScript puro por su modularidad, reutilización de componentes y mejor experiencia de usuario.
