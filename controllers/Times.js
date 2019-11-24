'use strict';

var utils = require('../utils/writer.js');
var Times = require('../service/TimesService');

module.exports.adicionarTime = function adicionarTime (req, res, next) {
  var body = req.swagger.params['body'].value;
  Times.adicionarTime(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.atualizarTime = function atualizarTime (req, res, next) {
  var id_time = req.swagger.params['id_time'].value;
  var body = req.swagger.params['body'].value;
  Times.atualizarTime(id_time,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscarTime = function buscarTime (req, res, next) {
  var id_time = req.swagger.params['id_time'].value;
  Times.buscarTime(id_time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscarTimes = function buscarTimes (req, res, next) {
  Times.buscarTimes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.comprarJogador = function comprarJogador (req, res, next) {
  var id_time = req.swagger.params['id_time'].value;
  var body = req.swagger.params['body'].value;
  Times.comprarJogador(id_time,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletarTime = function deletarTime (req, res, next) {
  var id_time = req.swagger.params['id_time'].value;
  Times.deletarTime(id_time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
