"use client";
import { Button, Drawer, Modal } from "flowbite-react";
import { useState } from "react";
import { useEffect, useRef } from 'react';
import { Tooltip } from "flowbite-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


export function DrawerComponent({ isOpen, handleClose, desenho, casa, endereco, mapa }) {
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
        <Tooltip content="Clique para ampliar" placement="bottom">
          <LazyLoadImage
            src={desenho}
            effect="blur"
            alt="Desenho da casa"
            className="cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => openModal(desenho)}
          />
        </Tooltip>
      </div>
      <div className ="max-h-96">
        <h1 className="md:text-xl font-semibold mb-2">Casa</h1>
        <Tooltip content="Clique para ampliar" placement="bottom">
          <LazyLoadImage
            src={casa}
            effect="blur"
            alt="Foto da casa"
            className="cursor-pointer hover:opacity-75 transition-opacity  w-full"
            onClick={() => openModal(casa)}
          />
        </Tooltip>
      </div>
    </Drawer.Items>
    <h2 className="text-lg mt-4">{endereco}</h2>
    <div className="p-4 border-t border-gray-200">
      <Button 
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={() => window.open(mapa, '_blank')}>
          Mapa
      </Button>
    </div>
  </Drawer>


<Modal show={isModalOpen} onClose={closeModal} size="4xl">
  <div ref={modalRef}>
    <Modal.Header>Imagem</Modal.Header>
    <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
      <LazyLoadImage
        src={modalImage}
        effect="blur"
        alt="Imagem ampliada"
        className="w-full h-auto "  
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
