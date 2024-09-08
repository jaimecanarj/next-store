type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre nosotros" },
  { href: "/products", label: "Productos" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/reviews", label: "Reseñas" },
  { href: "/cart", label: "Carrito" },
  { href: "/orders", label: "Pedidos" },
  { href: "/admin/sales", label: "Dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "Ventas" },
  { href: "/admin/products", label: "Mis productos" },
  { href: "/admin/products/create", label: "Crear productos" },
];
