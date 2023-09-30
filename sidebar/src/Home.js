import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Home() {
  const { openSiderbar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSiderbar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show model
      </button>
    </main>
  );
}
