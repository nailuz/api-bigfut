'use strict';

var utils = require('../utils/writer.js');
var Jogadores = require('../service/JogadoresService');

module.exports.adicionarJogador = function adicionarJogador (req, res, next) {
  var body = req.swagger.params['body'].value;
  Jogadores.adicionarJogador(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aposentaJogador = function aposentaJogador (req, res, next) {
  var id_jogador = req.swagger.params['id_jogador'].value;
  Jogadores.aposentaJogador(id_jogador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.atualizaJogador = function atualizaJogador (req, res, next) {
  var id_jogador = req.swagger.params['id_jogador'].value;
  var body = req.swagger.params['body'].value;
  Jogadores.atualizaJogador(id_jogador,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscaJogador = function buscaJogador (req, res, next) {
  var id_jogador = req.swagger.params['id_jogador'].value;
  Jogadores.buscaJogador(id_jogador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscarJogadores = function buscarJogadores (req, res, next) {
  Jogadores.buscarJogadores()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
