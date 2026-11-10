import Route from "./route.js";


//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/acceuil", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),
    new Route("/carte", "La Carte", "/pages/carte.html"),
    new Route("/reservations", "Les Réservations", "/pages/reservations.html"),
    new Route("/compte", "Mon Compte", "/pages/compte.html"),
    new Route("/connexion", "Connexion/Déconnexion", "/pages/connexion.html")


];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";