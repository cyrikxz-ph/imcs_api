'use strict';

module.exports = function(ProductAttribute) {
  // ProductAttribute.disableRemoteMethodByName('create');
  // ProductAttribute.disableRemoteMethodByName('prototype.__count__accessTokens');
  // ProductAttribute.disableRemoteMethodByName('prototype.__create__accessTokens');
  // ProductAttribute.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // ProductAttribute.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // ProductAttribute.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // ProductAttribute.disableRemoteMethodByName('prototype.__get__accessTokens');
  // ProductAttribute.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // ProductAttribute.disableRemoteMethodByName('prototype.updateAttributes');
  // ProductAttribute.disableRemoteMethodByName('prototype.patchAttributes');
  // ProductAttribute.disableRemoteMethodByName('replaceById');
  // ProductAttribute.disableRemoteMethodByName('deleteById');
  // ProductAttribute.disableRemoteMethodByName('find');
  // ProductAttribute.disableRemoteMethodByName('count');
  ProductAttribute.disableRemoteMethodByName('upsert');
  ProductAttribute.disableRemoteMethodByName('updateAll');
  ProductAttribute.disableRemoteMethodByName('findById');
  ProductAttribute.disableRemoteMethodByName('findOne');
  ProductAttribute.disableRemoteMethodByName('confirm');
  ProductAttribute.disableRemoteMethodByName('exists');
  ProductAttribute.disableRemoteMethodByName('replace');
  ProductAttribute.disableRemoteMethodByName('createChangeStream');
  ProductAttribute.disableRemoteMethodByName('replaceOrCreate');
  ProductAttribute.disableRemoteMethodByName('upsertWithWhere');
};
