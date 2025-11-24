# UPTP Docs - Landing Page + Documentation

Este proyecto combina una Landing Page moderna en React con documentación técnica en VuePress.

## 🚀 Despliegue en Vercel

### Configuración Automática

El proyecto ya está configurado con `vercel.json`. Solo necesitas:

1. **Conectar tu repositorio a Vercel**
2. **Vercel detectará automáticamente la configuración**
3. **El build se ejecutará automáticamente**

### Configuración Manual (si es necesario)

Si Vercel no detecta la configuración automáticamente:

**Build Command:**
```bash
npm run build:all
```

**Output Directory:**
```
dist
```

**Install Command:**
```bash
npm install && cd landing-page && npm install && cd ..
```

**Framework Preset:** Other

## 📁 Estructura del Proyecto

```
/
├── landing-page/          # React Landing Page (Vite)
│   ├── src/
│   └── package.json
├── src/                   # VuePress Documentation
│   ├── .vuepress/
│   └── README.md
├── build-all.js          # Script que combina ambos builds
├── dist/                 # Output final (generado)
│   ├── index.html       # Landing Page
│   └── docs/            # Documentación
└── package.json         # Root package.json
```

## 🛠️ Desarrollo Local

### Landing Page (React)
```bash
cd landing-page
npm run dev
```

### Documentación (VuePress)
```bash
npm run docs:dev
```

### Build Completo
```bash
npm run build:all
```

### Preview Local
```bash
npx serve dist
```

## 🔧 Troubleshooting Vercel

Si el despliegue falla:

1. **Verifica que `vercel.json` esté en la raíz del proyecto**
2. **Asegúrate de que ambos `package.json` existan** (raíz y landing-page)
3. **Revisa los logs de build en Vercel**
4. **Verifica que Node.js sea compatible** (se requiere Node 20.19+ o 22.12+)

## 📝 Notas

- La Landing Page se sirve desde `/`
- La Documentación se sirve desde `/docs/`
- El script `build-all.js` construye ambos proyectos y los combina en `dist/`
