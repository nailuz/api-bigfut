'use strict';


/**
 * Incluir novo jogador
 *
 * body Jogadores Informe os dados para cadastro
 * no response value expected for this operation
 **/
exports.adicionarJogador = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Aposenta um determinado jogadores
 *
 * id_jogador Integer Id do jogador que deseja deletar
 * no response value expected for this operation
 **/
exports.aposentaJogador = function(id_jogador) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza dados dos jogadores
 *
 * id_jogador Integer Id do jogador que deseja atualizar
 * body Jogadores Informe os dados para atualizar
 * no response value expected for this operation
 **/
exports.atualizaJogador = function(id_jogador,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Busca os dados de um jogador pelo seu ID.
 *
 * id_jogador Integer Id do jogador que desejas buscar
 * returns List
 **/
exports.buscaJogador = function(id_jogador) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cabeceio" : 5,
  "marcacao" : 9,
  "id_time" : 6,
  "nascimento" : "2000-01-23T04:56:07.000+00:00",
  "cruzamento" : 7,
  "id_jogador" : 0,
  "posicao" : "G",
  "valor" : 1,
  "nome" : "nome",
  "passe" : 2,
  "finalizacao" : 5,
  "fisico" : 3
}, {
  "cabeceio" : 5,
  "marcacao" : 9,
  "id_time" : 6,
  "nascimento" : "2000-01-23T04:56:07.000+00:00",
  "cruzamento" : 7,
  "id_jogador" : 0,
  "posicao" : "G",
  "valor" : 1,
  "nome" : "nome",
  "passe" : 2,
  "finalizacao" : 5,
  "fisico" : 3
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Busca dados de todos os jogadores
 *
 * returns List
 **/
exports.buscarJogadores = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cabeceio" : 5,
  "marcacao" : 9,
  "id_time" : 6,
  "nascimento" : "2000-01-23T04:56:07.000+00:00",
  "cruzamento" : 7,
  "id_jogador" : 0,
  "posicao" : "G",
  "valor" : 1,
  "nome" : "nome",
  "passe" : 2,
  "finalizacao" : 5,
  "fisico" : 3
}, {
  "cabeceio" : 5,
  "marcacao" : 9,
  "id_time" : 6,
  "nascimento" : "2000-01-23T04:56:07.000+00:00",
  "cruzamento" : 7,
  "id_jogador" : 0,
  "posicao" : "G",
  "valor" : 1,
  "nome" : "nome",
  "passe" : 2,
  "finalizacao" : 5,
  "fisico" : 3
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

