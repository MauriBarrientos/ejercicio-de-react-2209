import React from "react";

export const Navbar = () =>{
    return (
        <nav class="nav nav-masthead justify-content-center float-md-start">
            <a class="nav-link text-white" href="index.html">Inicio</a>
            <a class="nav-link text-white" href="./empresa/index.html">Empresa</a>
            <a class="nav-link text-white" href="./support/index.html">Soporte</a>
          </nav>
    )
}

export const Navbar2 = () =>{
    return (
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link text-white" href="./login/index.html">Ingresar</a>
            <a class="nav-link text-white" href="./registro/index.html">Registrarse</a>
          </nav>
    )
}