import React, { useState } from 'react';
import './oroscopo.css';
import { calcularSigno, obtenerMensajeSigno } from './oroscopos';


import ariesImage from '../assets/imagenes/aries.png';
import tauroImage from '../assets/imagenes/tauro.png';
import geminisImage from '../assets/imagenes/gemini.png';
import cancerImage from '../assets/imagenes/cancer.png';
import leoImage from '../assets/imagenes/leo.png';
import virgoImage from '../assets/imagenes/virgo.png';
import libraImage from '../assets/imagenes/libra.png';
import escorpioImage from '../assets/imagenes/scorpion.png';
import sagitarioImage from '../assets/imagenes/sagitario.png';
import capricornioImage from '../assets/imagenes/capricornio.png';
import acuarioImage from '../assets/imagenes/aquarius.png';
import piscisImage from '../assets/imagenes/pisces.png';


import defaultImage from '../assets/imagenes/aries.png'; 
const Oroscopo = () => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [resultado, setResultado] = useState(null);

  // Mapeo de signos a imágenes
  const imagenesSignos = {
    'Aries': ariesImage,
    'Tauro': tauroImage,
    'Géminis': geminisImage,
    'Cáncer': cancerImage,
    'Leo': leoImage,
    'Virgo': virgoImage,
    'Libra': libraImage,
    'Escorpio': escorpioImage,
    'Sagitario': sagitarioImage,
    'Capricornio': capricornioImage,
    'Acuario': acuarioImage,
    'Piscis': piscisImage
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nombre || !fechaNacimiento) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const signo = calcularSigno(fechaNacimiento);
    if (signo) {
      setResultado({
        nombre,
        signo,
        mensaje: obtenerMensajeSigno(signo),
        imagen: imagenesSignos[signo] || defaultImage
      });
    } else {
      alert('Fecha de nacimiento inválida');
    }
  };

  return (
    <div className="oroscopo-container">
      <h1 className="oroscopo-title">Horóscopo</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="fecha">Fecha de nacimiento</label>
          <input
            type="date"
            id="fecha"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn-calcular">
          Calcular Signo
        </button>
      </form>

      {resultado && (
        <div className="resultado-container">
          <img 
            src={resultado.imagen} 
            alt={resultado.signo}
            className="signo-imagen"
            onError={(e) => {
            
              e.target.src = ariesImage;
            }}
          />
          
          <h2 className="signo-nombre">{resultado.nombre}</h2>
          <p className="signo-titulo">Tu signo es: <strong>{resultado.signo}</strong></p>
          
          <div className="lineas-mensaje">
            {resultado.mensaje.map((linea, index) => (
              <p key={index} className="linea">{linea}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Oroscopo;