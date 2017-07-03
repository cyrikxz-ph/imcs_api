'use strict';

module.exports = function(ItemCategory) {
  // ItemCategory.disableRemoteMethodByName('create');
  // ItemCategory.disableRemoteMethodByName('prototype.__count__accessTokens');
  // ItemCategory.disableRemoteMethodByName('prototype.__create__accessTokens');
  // ItemCategory.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // ItemCategory.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // ItemCategory.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // ItemCategory.disableRemoteMethodByName('prototype.__get__accessTokens');
  // ItemCategory.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // ItemCategory.disableRemoteMethodByName('prototype.updateAttributes');
  // ItemCategory.disableRemoteMethodByName('prototype.patchAttributes');
  // ItemCategory.disableRemoteMethodByName('replaceById');
  // ItemCategory.disableRemoteMethodByName('deleteById');
  // ItemCategory.disableRemoteMethodByName('find');
  // ItemCategory.disableRemoteMethodByName('count');
  ItemCategory.disableRemoteMethodByName('upsert');
  ItemCategory.disableRemoteMethodByName('updateAll');
  ItemCategory.disableRemoteMethodByName('findById');
  ItemCategory.disableRemoteMethodByName('findOne');
  ItemCategory.disableRemoteMethodByName('confirm');
  ItemCategory.disableRemoteMethodByName('exists');
  ItemCategory.disableRemoteMethodByName('replace');
  ItemCategory.disableRemoteMethodByName('createChangeStream');
  ItemCategory.disableRemoteMethodByName('replaceOrCreate');
  ItemCategory.disableRemoteMethodByName('upsertWithWhere');
};
