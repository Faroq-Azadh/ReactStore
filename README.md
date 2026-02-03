# ReactStore - Modern E-Commerce Site

A beautiful, modern e-commerce website built with React featuring a fully functional shopping cart.

## Features

- 🛍️ **Product Catalog** - Browse through a collection of products with beautiful cards
- 🛒 **Shopping Cart** - Add, remove, and update quantities of items
- 💰 **Price Calculation** - Automatic total price calculation
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- ⚡ **Fast & Lightweight** - Built with React hooks and context API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ReactStore/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation header with cart button
│   │   ├── ProductList.js     # Product grid container
│   │   ├── ProductCard.js     # Individual product card
│   │   └── ShoppingCart.js    # Cart sidebar component
│   ├── context/
│   │   └── CartContext.js     # Cart state management
│   ├── data/
│   │   └── products.js        # Sample product data
│   ├── App.js                 # Main app component
│   ├── index.js               # Entry point
│   └── *.css                  # Component styles
├── package.json
└── README.md
```

## Usage

1. **Browse Products**: View all available products on the main page
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click the cart icon in the header to open the shopping cart
4. **Manage Items**: 
   - Use +/- buttons to adjust quantities
   - Click "Remove" to delete items
   - Click "Clear Cart" to remove all items
5. **Checkout**: Click "Checkout" button (ready for integration with payment gateway)

## Technologies Used

- React 18
- React Context API (for state management)
- CSS3 (with modern features like gradients, animations, and flexbox)
- Unsplash API (for product images)

## Customization

### Adding Products

Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 9,
  name: 'Your Product Name',
  price: 99.99,
  image: 'https://your-image-url.com/image.jpg',
  description: 'Product description here',
}
```

### Styling

All component styles are in separate CSS files:
- `src/components/Header.css`
- `src/components/ProductCard.css`
- `src/components/ProductList.css`
- `src/components/ShoppingCart.css`

### Colors

The main color scheme uses a purple gradient:
- Primary: `#667eea` to `#764ba2`
- You can modify these in the CSS files

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

MIT
