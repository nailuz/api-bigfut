'use strict';

var utils = require('../utils/writer.js');
var Competicoes = require('../service/CompeticoesService');

module.exports.buscarCompeticao = function buscarCompeticao (req, res, next) {
  Competicoes.buscarCompeticao()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscarJogo = function buscarJogo (req, res, next) {
  var id_jogo = req.swagger.params['id_jogo'].value;
  Competicoes.buscarJogo(id_jogo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.iniciarCompeticao = function iniciarCompeticao (req, res, next) {
  var body = req.swagger.params['body'].value;
  Competicoes.iniciarCompeticao(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realizarJogo = function realizarJogo (req, res, next) {
  var id_jogo = req.swagger.params['id_jogo'].value;
  var body = req.swagger.params['body'].value;
  Competicoes.realizarJogo(id_jogo,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
