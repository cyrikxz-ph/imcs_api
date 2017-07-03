'use strict';

module.exports = function(Currency) {
  // Currency.disableRemoteMethodByName('create');
  // Currency.disableRemoteMethodByName('prototype.__count__accessTokens');
  // Currency.disableRemoteMethodByName('prototype.__create__accessTokens');
  // Currency.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // Currency.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // Currency.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // Currency.disableRemoteMethodByName('prototype.__get__accessTokens');
  // Currency.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // Currency.disableRemoteMethodByName('prototype.updateAttributes');
  // Currency.disableRemoteMethodByName('prototype.patchAttributes');
  // Currency.disableRemoteMethodByName('replaceById');
  // Currency.disableRemoteMethodByName('deleteById');
  // Currency.disableRemoteMethodByName('find');
  // Currency.disableRemoteMethodByName('count');
  Currency.disableRemoteMethodByName('upsert');
  Currency.disableRemoteMethodByName('updateAll');
  Currency.disableRemoteMethodByName('findById');
  Currency.disableRemoteMethodByName('findOne');
  Currency.disableRemoteMethodByName('confirm');
  Currency.disableRemoteMethodByName('exists');
  Currency.disableRemoteMethodByName('replace');
  Currency.disableRemoteMethodByName('createChangeStream');
  Currency.disableRemoteMethodByName('replaceOrCreate');
  Currency.disableRemoteMethodByName('upsertWithWhere');
};
