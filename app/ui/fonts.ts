import { Inter, Lusitana } from "next/font/google";

// on prend la Font "Inter" depuis google font et on utilisera "latin" comme Font secondaire au cas où
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
