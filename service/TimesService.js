'use strict';


/**
 * Incluir novo time
 *
 * body Times Informe os dados para cadastro
 * no response value expected for this operation
 **/
exports.adicionarTime = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualizar informações de um time
 *
 * id_time Integer Id do time que deseja atualizar
 * body Times Informe os dados para atualizar
 * no response value expected for this operation
 **/
exports.atualizarTime = function(id_time,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Buscar dados de um time pelo id
 *
 * id_time Integer Id do time que desejas buscar
 * returns List
 **/
exports.buscarTime = function(id_time) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_competicao" : 6,
  "estado" : "estado",
  "cores" : "cores",
  "id_times" : 0,
  "nome" : "nome",
  "saldo" : 1
}, {
  "id_competicao" : 6,
  "estado" : "estado",
  "cores" : "cores",
  "id_times" : 0,
  "nome" : "nome",
  "saldo" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Busca dados de todos os times
 *
 * returns List
 **/
exports.buscarTimes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_competicao" : 6,
  "estado" : "estado",
  "cores" : "cores",
  "id_times" : 0,
  "nome" : "nome",
  "saldo" : 1
}, {
  "id_competicao" : 6,
  "estado" : "estado",
  "cores" : "cores",
  "id_times" : 0,
  "nome" : "nome",
  "saldo" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Comprar um novo jogador
 *
 * id_time Integer Id do time que ira realizar a compra
 * body Times Informe o id e o preço do jogador a ser comprado
 * no response value expected for this operation
 **/
exports.comprarJogador = function(id_time,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta um time
 *
 * id_time Integer Id do time que deseja deletar
 * no response value expected for this operation
 **/
exports.deletarTime = function(id_time) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

