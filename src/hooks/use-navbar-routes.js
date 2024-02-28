export function useNavbarRoutes() {
  const routes = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/projects", name: "Projects" },
    { to: "/experience", name: "Experience" },
    { to: "/contact", name: "Contact" },
  ];

  return { routes };
}
