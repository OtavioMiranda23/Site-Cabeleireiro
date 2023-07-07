"use client";
import { useState } from "react";
import { MenuHamburguer } from "./menuHamburguer";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="flex flex-col bg-background p-10 border-b-2 border-backgroundDark">
        <div className="absolute right-1/2 translate-x-1/2  top-8 font-italiana ">MarcosM</div>
        <div
          className="absolute right-4 top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuHamburguer />
        </div>
        {isOpen && (
          <div className=" flex text-center  justify-center ">
            <ul className={`flex ${isOpen && 'mt-12 '}`}>
              <li className="px-2">
                <a href="">Sobre</a>
              </li>
              <li className="px-2">
                <a href="">Serviços</a>
              </li>
              <li className="px-2">
                <a href="">Contato</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
