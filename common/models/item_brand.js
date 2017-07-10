'use strict';

module.exports = function(ItemBrand) {
  //#########################################
  //# Enable / Disable Default Model Routes #
  //#########################################
  // ItemBrand.disableRemoteMethodByName('create');
  // ItemBrand.disableRemoteMethodByName('prototype.__count__accessTokens');
  // ItemBrand.disableRemoteMethodByName('prototype.__create__accessTokens');
  // ItemBrand.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // ItemBrand.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // ItemBrand.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // ItemBrand.disableRemoteMethodByName('prototype.__get__accessTokens');
  // ItemBrand.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // ItemBrand.disableRemoteMethodByName('prototype.updateAttributes');
  // ItemBrand.disableRemoteMethodByName('prototype.patchAttributes');
  // ItemBrand.disableRemoteMethodByName('replaceById');
  // ItemBrand.disableRemoteMethodByName('deleteById');
  // ItemBrand.disableRemoteMethodByName('find');
  // ItemBrand.disableRemoteMethodByName('findById');
  // ItemBrand.disableRemoteMethodByName('count');
  ItemBrand.disableRemoteMethodByName('upsert');
  ItemBrand.disableRemoteMethodByName('updateAll');
  ItemBrand.disableRemoteMethodByName('findOne');
  ItemBrand.disableRemoteMethodByName('confirm');
  ItemBrand.disableRemoteMethodByName('exists');
  ItemBrand.disableRemoteMethodByName('replace');
  ItemBrand.disableRemoteMethodByName('createChangeStream');
  ItemBrand.disableRemoteMethodByName('replaceOrCreate');
  ItemBrand.disableRemoteMethodByName('upsertWithWhere');

  //######################
  //#  Model Validation  #
  //######################
  ItemBrand.validatesPresenceOf('brand_name', 'brand_code');
  ItemBrand.validatesUniquenessOf('brand_code', {message: 'brand code must be unique'});
};
