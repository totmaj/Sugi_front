// app/layout.tsx
import "../styles/globals.css";
import { ProductProvider } from "../context/ProductContext";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
