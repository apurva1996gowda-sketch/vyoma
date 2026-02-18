export interface NavItem {
  id: number;
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 1, label: "Soil", path: "/category/soil" },
  { id: 2, label: "Fertilizers", path: "/category/fertilizers" },
  { id: 3, label: "Manures", path: "/category/manures" },
  { id: 4, label: "Pots", path: "/category/pots" },
  { id: 5, label: "Plates / Saucers", path: "/category/plates-saucers" },
  { id: 6, label: "Seeds", path: "/category/seeds" },
  { id: 7, label: "Stands & Structures", path: "/category/stands-structures" },
];
