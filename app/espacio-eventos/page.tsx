"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

import EventoImage from "@/public/images/eventos/evento.jpg";
import Movil1EventosImage from "@/public/images/eventos/movil1eventos.png";
import Movil2EventosImage from "@/public/images/eventos/movil2eventos.png";
import Movil3EventosImage from "@/public/images/eventos/movil3eventos.png";
import Movil4EventosImage from "@/public/images/eventos/movil4eventos.png";
import UniversidadImage from "@/public/images/eventos/universidad.jpeg";
import EstadioImage from "@/public/images/eventos/estadio.png";
import FeriaImage from "@/public/images/eventos/feria.jpg";
import EnvironmentImage from "@/public/images/eventos/environment.png";
import SocialPeopleImage from "@/public/images/eventos/socialpeople.png";
import SavingImage from "@/public/images/eventos/saving.png";

export default function EspacioEventos() {
  const [faqOpen, setFaqOpen] = useState(false);
  const handleToggleFaq = () => setFaqOpen((prev) => !prev);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#reservar-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-[#2a2c38] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9dd187] mb-6 drop-shadow-lg">
            Espacio Eventos
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
            ¿Vas a algún evento, festival, congreso, feria, escapada, discoteca,
            concierto, esquiada, evento deportivo...?
          </p>
        </div>
      </section>

      {/* Intro Card */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <Card className="h-full bg-[#9dd187] border-none shadow-xl">
                <CardContent className="p-8 md:p-12 flex flex-col justify-center h-full">
                  <p className="text-base md:text-lg text-[#2a2c38] font-medium leading-relaxed">
                    <span className="font-bold">SharetoGo</span> está presente
                    dónde hayan desplazamientos. El objetivo es reducir las
                    congestiones en las aglomeraciones poniendo en contacto a
                    los asistentes para compartir coche.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-5">
              <div className="h-full min-h-[400px] relative">
                <Image
                  src={EventoImage}
                  alt="Evento con multitud y luces de escenario"
                  className="rounded-xl shadow-xl object-cover w-full h-full"
                  width={500}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Conduces? */}
      <section className="py-16 md:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="h-full flex items-center justify-center">
              <Image
                src={Movil1EventosImage}
                alt="Persona usando móvil en evento"
                className="object-contain max-h-[600px]"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Card className="h-full bg-[#9dd187] border-none shadow-xl">
              <CardContent className="p-8 md:p-12 flex flex-col justify-center h-full text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-[#2a2c38] mb-6">
                  ¿Conduces?
                </h3>
                <p className="text-lg md:text-xl text-[#2a2c38] font-medium mb-8">
                  Selecciona el evento al que te diriges y futuros asistentes se
                  unirán a tu trayecto.
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={FeriaImage}
                    alt="Feria comercial con stands y luces"
                    className="w-full h-80 object-cover"
                    width={400}
                    height={320}
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#2a2c38]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-[#9dd187] rounded-2xl mt-4">
            <button
              type="button"
              onClick={handleToggleFaq}
              aria-expanded={faqOpen}
              className="w-full flex justify-between items-center text-left p-4 sm:p-6 focus:outline-none"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#2a2c38] flex-1 pr-4">
                ¿Eres un evento y quieres contratar SharetoGo a medida?
              </h3>
              {faqOpen ? (
                <ChevronUp className="text-4xl text-[#2a2c38] flex-shrink-0" />
              ) : (
                <ChevronDown className="text-4xl text-[#2a2c38] flex-shrink-0" />
              )}
            </button>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                faqOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-6 pb-6 text-base sm:text-lg text-[#2a2c38]">
                  <p>
                    Podemos añadirte como evento disponible cuando quieras.{" "}
                    <Link
                      href="/contratar"
                      className="font-bold text-black hover:underline"
                    >
                      Más info aquí
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Móviles Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <Card className="bg-[#9dd187] border-none shadow-xl h-full">
            <CardContent className="p-8 flex flex-col items-center h-full">
              <Image
                src={Movil2EventosImage}
                alt="Movil mostrando eventos disponibles"
                className="rounded-xl object-contain max-h-[600px] mb-6"
                width={400}
                height={600}
                priority
              />
              <p className="text-lg md:text-xl font-medium text-center text-[#2a2c38]">
                Busca entre todos nuestros eventos disponibles para poder
                seleccionar y ver en{" "}
                <a
                  href="#reservar-section"
                  className="font-bold text-[#2a2c38] underline"
                  onClick={handleSmoothScroll}
                >
                  RESERVAR
                </a>{" "}
                los trayectos disponibles desde o hacia ese evento
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#9dd187] border-none shadow-xl h-full">
            <CardContent className="p-8 flex flex-col items-center h-full">
              <Image
                src={Movil3EventosImage}
                alt="Movil guardando eventos favoritos"
                className="rounded-xl object-contain max-h-[600px] mb-6"
                width={400}
                height={600}
                priority
              />
              <p className="text-lg md:text-xl font-medium text-center text-[#2a2c38]">
                Guarda tus eventos favoritos para poder ver y filtrar en{" "}
                <a
                  href="#reservar-section"
                  className="font-bold text-[#2a2c38] underline"
                  onClick={handleSmoothScroll}
                >
                  RESERVAR
                </a>{" "}
                todos los trayectos desde o hacia ese evento
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reservar Section */}
      <section
        id="reservar-section"
        className="py-16 md:py-24 bg-[#f9fafb] scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <Image
              src={Movil4EventosImage}
              alt="Movil mostrando opciones de reserva"
              className="object-contain max-h-[600px] mx-auto"
              width={400}
              height={600}
              priority
            />
          </div>
          <div className="lg:col-span-6">
            <Card className="bg-[#9dd187] border-none shadow-xl">
              <CardContent className="p-8 md:p-12 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-[#2a2c38] mb-6">
                  ¿Reservar para ir a un evento?
                </h3>
                <p className="text-lg md:text-xl font-medium text-[#2a2c38] leading-relaxed">
                  <span className="font-bold">FILTRA</span> para ver los
                  trayectos hacia o desde el evento que quieras ir o volver y
                  reserva la plaza que más te convenga.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Universidad + Estadio */}
      <section className="py-16 md:py-24 bg-[#2a2c38]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Card className="bg-[#9dd187] border-none shadow-xl">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <Image
                src={UniversidadImage}
                alt="Universidad"
                className="rounded-xl shadow-xl object-cover w-full md:w-1/2"
                width={350}
                height={260}
                priority
              />
              <p className="text-base md:text-lg text-[#2a2c38] font-medium leading-relaxed text-center md:text-left">
                En el espacio eventos lo que buscamos es que cualquier persona
                pueda ofrecer las plazas libres de su coche cuando se dirige a
                un evento o lugar específico, concurrido por muchas personas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#9dd187] border-none shadow-xl">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row-reverse items-center gap-8">
              <Image
                src={EstadioImage}
                alt="Estadio"
                className="rounded-xl shadow-xl object-cover w-full md:w-1/2"
                width={350}
                height={260}
                priority
              />
              <p className="text-base md:text-lg text-[#2a2c38] font-medium leading-relaxed text-center md:text-left">
                Los asistentes, en lugar de ir solos, utilizar medios más
                contaminantes, o arriesgarse confiando en el transporte público,
                gracias a SharetoGo reservarán el trayecto que más les convenga.
                Ecológico, fácil y sencillo, además de económico.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Icons Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src={EnvironmentImage}
              alt="Beneficio medioambiental"
              className="max-w-[300px] object-contain"
              width={300}
              height={300}
              priority
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={SocialPeopleImage}
              alt="Beneficio social"
              className="max-w-[300px] object-contain"
              width={300}
              height={300}
              priority
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={SavingImage}
              alt="Ahorro económico"
              className="max-w-[300px] object-contain"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
