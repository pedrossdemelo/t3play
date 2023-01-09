import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>Im a layout nav lol</nav>
      {children}
    </>
  );
}
