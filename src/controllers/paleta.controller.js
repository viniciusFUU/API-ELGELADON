const paletasService = require('../services/paleta.service');
const mongoose = require('mongoose');

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService();

  if (allPaletas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }
  res.send(allPaletas);
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = await paletasService.findByIdPaletaService(idParam);
  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não foi encontrada!' });
  }
  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;
  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const editPaleta = req.body;
  if (
    !editPaleta ||
    !editPaleta.sabor ||
    !editPaleta.descricao ||
    !editPaleta.foto ||
    !editPaleta.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da paleta!' });
  }
  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    editPaleta,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
