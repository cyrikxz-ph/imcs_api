'use strict';

module.exports = function(ItemCategory) {
  //#########################################
  //# Enable / Disable Default Model Routes #
  //#########################################
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
  // ItemCategory.disableRemoteMethodByName('findById');
  ItemCategory.disableRemoteMethodByName('upsert');
  ItemCategory.disableRemoteMethodByName('updateAll');
  ItemCategory.disableRemoteMethodByName('findOne');
  ItemCategory.disableRemoteMethodByName('confirm');
  ItemCategory.disableRemoteMethodByName('exists');
  ItemCategory.disableRemoteMethodByName('replace');
  ItemCategory.disableRemoteMethodByName('createChangeStream');
  ItemCategory.disableRemoteMethodByName('replaceOrCreate');
  ItemCategory.disableRemoteMethodByName('upsertWithWhere');

  //######################
  //#  Model Validation  #
  //######################
  ItemCategory.validatesUniquenessOf('category_code', {message: 'category code must be unique'});

  ItemCategory.validate('parent_category_id', selfParentCategoryValidator, {message: 'cannot make self as parent'});

  function selfParentCategoryValidator(err) {
      if (this.id == this.parent_category_id) err();
  };
};
