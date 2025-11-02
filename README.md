# 🍸 La Tertulia - Carta Digital

Una carta digital moderna y elegante para el bar "La Tertulia", optimizada para móviles y acceso mediante código QR.

## ✨ Características

- **Mobile First**: Diseñado prioritariamente para dispositivos móviles
- **Carga Ultrarrápida**: Optimizado para escaneo QR y acceso instantáneo
- **Diseño Elegante**: Paleta cálida con animaciones sutiles
- **Fácil Actualización**: Contenido gestionado desde `src/data/menu.json`
- **Navegación Inteligente**: Navegación sticky que se oculta al hacer scroll

## 🚀 Tecnologías

- **Astro** - Framework web moderno y ultrarrápido
- **Tailwind CSS** - Framework de utilidades CSS
- **TypeScript** - Tipado estático para mejor desarrollo

## 📱 Categorías Disponibles

- ☕ **Cafés** - Espressos, cappuccinos, carajillos...
- 🫖 **Infusiones** - Tés, manzanilla, poleo menta...
- 🍸 **Cócteles** - Mojitos, gin tonics, negronis...
- 🍷 **Vinos** - Blancos, tintos, cavas, rosados...
- 🍺 **Cervezas** - Nacionales, internacionales, artesanas...
- 🥤 **Refrescos** - Coca-Cola, zumos, aguas...
- 🥃 **Licores** - Orujos, bailey's, brandies...

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📝 Actualizar el Menú

Para actualizar la carta, edita el archivo `src/data/menu.json`:

```json
{
  "Categoría": [
    {
      "nombre": "Nombre del producto",
      "descripcion": "Descripción atractiva del producto",
      "precio": "X.XX€"
    }
  ]
}
```

Los cambios se reflejarán automáticamente al reconstruir la aplicación.

## 🎨 Personalización

### Colores

La paleta de colores se puede modificar en:

- `src/layouts/Layout.astro` - Colores principales
- `tailwind.config.js` - Configuración de Tailwind (si se crea)

### Iconos de Categorías

Los iconos se configuran en `src/pages/index.astro` en el objeto `categoryIcons`.

### Animaciones

Las animaciones se pueden personalizar en:

- `src/styles/global.css` - Animaciones globales
- Componentes individuales - Animaciones específicas

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── CategoryNavigation.astro
│   ├── MenuCategory.astro
│   └── MenuItem.astro
├── data/               # Datos del menú
│   └── menu.json
├── layouts/            # Plantillas de página
│   └── Layout.astro
├── pages/              # Páginas de la aplicación
│   └── index.astro
└── styles/             # Estilos globales
    └── global.css
```

## 🌟 Características Técnicas

- **SSG (Static Site Generation)** para máximo rendimiento
- **Animaciones CSS** optimizadas con `backface-visibility`
- **Navegación inteligente** que se oculta al hacer scroll hacia abajo
- **Scroll suave** con offset para headers fijos
- **Indicadores de foco** mejorados para accesibilidad
- **Targets táctiles** de mínimo 44px en móviles

## 📱 Optimizaciones Móviles

- Viewport optimizado para móviles
- Meta tags para Progressive Web App
- Scrollbar personalizada
- Touch targets apropiados
- Gestos de navegación intuitivos

## 🔄 Deploy

Para desplegar en producción:

1. **Vercel** (recomendado):

   ```bash
   npm run build
   vercel --prod
   ```

2. **Netlify**:

   ```bash
   npm run build
   # Sube la carpeta dist/
   ```

3. **GitHub Pages**:
   ```bash
   npm run build
   # Configura GitHub Pages para servir desde /docs o rama gh-pages
   ```

## � Rendimiento

La aplicación está optimizada para:

- ⚡ Carga inicial < 1s
- 📱 First Contentful Paint optimizado
- 🔄 Lazy loading de contenido
- 💾 Tamaño mínimo de bundle

---

**Desarrollado con ❤️ para La Tertulia**
