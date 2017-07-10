'use strict';

module.exports = function(ItemGroup) {
  //#########################################
  //# Enable / Disable Default Model Routes #
  //#########################################
  // ItemGroup.disableRemoteMethodByName('create');
  // ItemGroup.disableRemoteMethodByName('prototype.__count__accessTokens');
  // ItemGroup.disableRemoteMethodByName('prototype.__create__accessTokens');
  // ItemGroup.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // ItemGroup.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // ItemGroup.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // ItemGroup.disableRemoteMethodByName('prototype.__get__accessTokens');
  // ItemGroup.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // ItemGroup.disableRemoteMethodByName('prototype.updateAttributes');
  // ItemGroup.disableRemoteMethodByName('prototype.patchAttributes');
  // ItemGroup.disableRemoteMethodByName('replaceById');
  // ItemGroup.disableRemoteMethodByName('deleteById');
  // ItemGroup.disableRemoteMethodByName('find');
  // ItemGroup.disableRemoteMethodByName('findById');
  // ItemGroup.disableRemoteMethodByName('count');
  ItemGroup.disableRemoteMethodByName('upsert');
  ItemGroup.disableRemoteMethodByName('updateAll');
  ItemGroup.disableRemoteMethodByName('findOne');
  ItemGroup.disableRemoteMethodByName('confirm');
  ItemGroup.disableRemoteMethodByName('exists');
  ItemGroup.disableRemoteMethodByName('replace');
  ItemGroup.disableRemoteMethodByName('createChangeStream');
  ItemGroup.disableRemoteMethodByName('replaceOrCreate');
  ItemGroup.disableRemoteMethodByName('upsertWithWhere');

  //######################
  //#  Model Validation  #
  //######################
  ItemGroup.validatesPresenceOf('group_code', 'group_name');
  ItemGroup.validatesUniquenessOf('group_code', {message: 'brand code must be unique'});
};
