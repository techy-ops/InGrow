import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ingrow.in";
  const routes = [
    "",
    "/login",
    "/signup",
    "/calculator",
    "/goals",
    "/investments",
    "/how-it-works",
    "/about",
    "/privacy",
    "/terms",
    "/risk-disclosure",
    "/disclosures",
    "/grievance-redressal",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/calculator" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/investments" || route === "/calculator" ? 0.9 : 0.7,
  }));
}
