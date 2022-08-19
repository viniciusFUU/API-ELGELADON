// const paletas = [
//   {
//     id: 1,
//     sabor: 'Açaí com Leite Condensado',
//     descricao:
//       'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//     foto: 'assets/images/acai-com-leite-condensado.png',
//     preco: 10.0,
//   },
//   {
//     id: 2,
//     sabor: 'Banana com Nutella',
//     descricao:
//       'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//     foto: 'assets/images/banana-com-nutella.png',
//     preco: 10.0,
//   },
//   {
//     id: 3,
//     sabor: 'Chocolate Belga',
//     descricao:
//       'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//     foto: 'assets/images/chocolate-belga.png',
//     preco: 7.0,
//   },
// ];

const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paleta = await Paletas.find();
  return paleta;
};

const findByIdPaletaService = async (ParametroId) => {
  const paleta = await Paletas.findById(ParametroId);
  return paleta;
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
