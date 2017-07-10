'use strict';

module.exports = function(Unit) {
  //#########################################
  //# Enable / Disable Default Model Routes #
  //#########################################
  // Unit.disableRemoteMethodByName('create');
  // Unit.disableRemoteMethodByName('prototype.__count__accessTokens');
  // Unit.disableRemoteMethodByName('prototype.__create__accessTokens');
  // Unit.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // Unit.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // Unit.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // Unit.disableRemoteMethodByName('prototype.__get__accessTokens');
  // Unit.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // Unit.disableRemoteMethodByName('prototype.updateAttributes');
  // Unit.disableRemoteMethodByName('prototype.patchAttributes');
  // Unit.disableRemoteMethodByName('replaceById');
  // Unit.disableRemoteMethodByName('deleteById');
  // Unit.disableRemoteMethodByName('find');
  // Unit.disableRemoteMethodByName('count');
  Unit.disableRemoteMethodByName('upsert');
  Unit.disableRemoteMethodByName('updateAll');
  Unit.disableRemoteMethodByName('findById');
  Unit.disableRemoteMethodByName('findOne');
  Unit.disableRemoteMethodByName('confirm');
  Unit.disableRemoteMethodByName('exists');
  Unit.disableRemoteMethodByName('replace');
  Unit.disableRemoteMethodByName('createChangeStream');
  Unit.disableRemoteMethodByName('replaceOrCreate');
  Unit.disableRemoteMethodByName('upsertWithWhere');
  
  //######################
  //#  Model Validation  #
  //######################
  Unit.validatesPresenceOf('unit_code', 'unit_name');
  Unit.validatesUniquenessOf('unit_code', {message: 'code must be unique'});
};
