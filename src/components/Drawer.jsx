"use client";
import { Button, Drawer, Modal } from "flowbite-react";
import { useState } from "react";
import { useEffect, useRef } from 'react';


export function DrawerComponent({ isOpen, handleClose, desenho, casa, endereco }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <>
      <Drawer open={isOpen} onClose={handleClose} style={{ width: "50vw", maxWidth: "450px" }}>
  <Drawer.Header className="p-4 border-b border-gray-200" title="Informações" />
  <Drawer.Items className="mt-1 md:p-4 flex flex-col space-y-4 overflow-y-auto">
    <div>
      <h1 className="md:text-xl font-semibold mb-2">Desenho da Casa</h1>
      <img
        src={desenho}
        alt="Desenho da casa"
        className="cursor-pointer hover:opacity-75 transition-opacity"
        onClick={() => openModal(desenho)}
      />
    </div>
    <div>
      <h1 className="md:text-xl font-semibold mb-2">Casa</h1>
      <img
        src={casa}
        alt="Foto da casa"
        className="cursor-pointer hover:opacity-75 transition-opacity"
        onClick={() => openModal(casa)}
      />
    </div>
    <h2 className="text-lg mt-4">{endereco}</h2>
  </Drawer.Items>
  <div className="p-4 border-t border-gray-200">
    <Button onClick={handleClose} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
      Mapa
    </Button>
  </div>
</Drawer>


      <Modal show={isModalOpen} onClose={closeModal} size="4xl">
        <div ref={modalRef}>
          <Modal.Header>Imagem</Modal.Header>
          <Modal.Body>
            <img
              src={modalImage}
              alt="Imagem ampliada"
              className="w-full size-max"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Fechar</Button>
          </Modal.Footer>
        </div>
      </Modal>

    </>
  );
}
