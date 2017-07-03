'use strict';

module.exports = function(ProductAttributeType) {
  // ProductAttributeType.disableRemoteMethodByName('create');
  // ProductAttributeType.disableRemoteMethodByName('prototype.__count__accessTokens');
  // ProductAttributeType.disableRemoteMethodByName('prototype.__create__accessTokens');
  // ProductAttributeType.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // ProductAttributeType.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // ProductAttributeType.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // ProductAttributeType.disableRemoteMethodByName('prototype.__get__accessTokens');
  // ProductAttributeType.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // ProductAttributeType.disableRemoteMethodByName('prototype.updateAttributes');
  // ProductAttributeType.disableRemoteMethodByName('prototype.patchAttributes');
  // ProductAttributeType.disableRemoteMethodByName('replaceById');
  // ProductAttributeType.disableRemoteMethodByName('deleteById');
  // ProductAttributeType.disableRemoteMethodByName('find');
  // ProductAttributeType.disableRemoteMethodByName('count');
  ProductAttributeType.disableRemoteMethodByName('upsert');
  ProductAttributeType.disableRemoteMethodByName('updateAll');
  ProductAttributeType.disableRemoteMethodByName('findById');
  ProductAttributeType.disableRemoteMethodByName('findOne');
  ProductAttributeType.disableRemoteMethodByName('confirm');
  ProductAttributeType.disableRemoteMethodByName('exists');
  ProductAttributeType.disableRemoteMethodByName('replace');
  ProductAttributeType.disableRemoteMethodByName('createChangeStream');
  ProductAttributeType.disableRemoteMethodByName('replaceOrCreate');
  ProductAttributeType.disableRemoteMethodByName('upsertWithWhere');
};
