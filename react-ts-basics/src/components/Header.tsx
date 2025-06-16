import type { ReactNode } from "react";

type headerProps = { image: { src: string; alt: string }; children: ReactNode };
export default function Header({ image, children }: headerProps) {
  return (
    <header>
      <img {...image}></img>
      {children}
    </header>
  );
}
