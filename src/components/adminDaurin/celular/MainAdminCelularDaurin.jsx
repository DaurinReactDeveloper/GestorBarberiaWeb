import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InformacionCelular } from "../../../util/informacion/InformacionCelular";
import AgregarAdminDaurin from "./AgregarAdminDaurin";
import ListarAdminDaurin from "./ListarAdminDaurin";
import {
  AccordionItem,
  ContentSwitcher,
} from "../../../util/mainreutilizable/MainReutilizable";
import { FaUserSecret } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";
import { CerrarSesion } from "../../../peticiones/AutenticacionPeticiones";
import { BienvenidoCelular } from "../../../util/bienvenido/BienvenidoCelular";
import { PiAddressBookBold } from "react-icons/pi";
import AgregarBarberiaDaurin from "./AgregarBarberiaDaurin";
import { BsShop } from "react-icons/bs";
import ListarBarberiasDaurin from "./ListarBarberiasDaurin";
import { FaShop } from "react-icons/fa6";

export default function MainAdminCelularDaurin({ nombre }) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const manejarClickBoton = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const navigate = useNavigate();

  const opciones = [
    { key: "ListarAdminDaurin", content: <ListarAdminDaurin /> },
    { key: "ListarBarberiaDaurin", content: <ListarBarberiasDaurin /> },
    { key: "AgregarAdminDaurin", content: <AgregarAdminDaurin /> },
    { key: "AgregarBarberiaDaurin", content: <AgregarBarberiaDaurin /> },
    {
      key: "informacion",
      content: (
        <InformacionCelular>
          <p>Estimado Administrador Principal,</p>
          <p className="p-informacion-texto">
            Como administrador principal, usted tiene la capacidad de listar,
            agregar, eliminar y editar propetarios de barberias. Estas
            funcionalidades le permitirán mantener un control eficiente y
            actualizado.
          </p>
          <p>
            Atentamente, <strong>[Daurin Barbershop]</strong>
          </p>
        </InformacionCelular>
      ),
    },
  ];

  return (
    <>
      <section className="row row-cliente-celulares">
        <article className="col-12 opciones-cliente">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <AccordionItem
              id="flush-collapseOne"
              title={nombre}
              icon={FaUserSecret}
            >
              <button
                type="button"
                className="button-accordion-body"
                onClick={() => manejarClickBoton("ListarAdminDaurin")}
              >
                <PiAddressBookBold />
                Listar Administradores
              </button>

              <button
                type="button"
                className="button-accordion-body"
                onClick={() => manejarClickBoton("ListarBarberiaDaurin")}
              >
                <FaShop />
                Listar Barberias
              </button>

              <button
                type="button"
                className="button-accordion-body"
                onClick={() => manejarClickBoton("AgregarAdminDaurin")}
              >
                <FaUserSecret />
                Agregar Administrador
              </button>

              <button
                type="button"
                className="button-accordion-body"
                onClick={() => manejarClickBoton("AgregarBarberiaDaurin")}
              >
                <BsShop />
                Agregar Barberia
              </button>

              <button
                type="button"
                className="button-accordion-body"
                onClick={() => manejarClickBoton("informacion")}
              >
                <AiOutlineInfoCircle />
                Información
              </button>

              <hr />
              <div className="div-button-cerrar-sesion">
                <button
                  type="button"
                  className="button-accordion-body button-cerrar-sesion"
                  onClick={() => CerrarSesion(navigate)}
                >
                  <GiExitDoor className="icon-cerrar-sesion" />
                </button>
              </div>
            </AccordionItem>
          </div>
        </article>

        <article className="col-12 mostrar-opción">
          <ContentSwitcher
            opcionSeleccionada={opcionSeleccionada}
            opciones={opciones}
            defaultContent={<BienvenidoCelular nombre={nombre} />}
          />
        </article>
      </section>
    </>
  );
}
