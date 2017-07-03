'use strict';

module.exports = function(Product) {
  // Product.disableRemoteMethodByName('create');
  // Product.disableRemoteMethodByName('prototype.__count__accessTokens');
  // Product.disableRemoteMethodByName('prototype.__create__accessTokens');
  // Product.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // Product.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // Product.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // Product.disableRemoteMethodByName('prototype.__get__accessTokens');
  // Product.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // Product.disableRemoteMethodByName('prototype.updateAttributes');
  // Product.disableRemoteMethodByName('prototype.patchAttributes');
  // Product.disableRemoteMethodByName('replaceById');
  // Product.disableRemoteMethodByName('deleteById');
  // Product.disableRemoteMethodByName('find');
  // Product.disableRemoteMethodByName('count');
  Product.disableRemoteMethodByName('upsert');
  Product.disableRemoteMethodByName('updateAll');
  Product.disableRemoteMethodByName('findById');
  Product.disableRemoteMethodByName('findOne');
  Product.disableRemoteMethodByName('confirm');
  Product.disableRemoteMethodByName('exists');
  Product.disableRemoteMethodByName('replace');
  Product.disableRemoteMethodByName('createChangeStream');
  Product.disableRemoteMethodByName('replaceOrCreate');
  Product.disableRemoteMethodByName('upsertWithWhere');
};
