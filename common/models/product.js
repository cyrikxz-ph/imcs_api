'use strict';

module.exports = function(Product) {
  //#########################################
  //# Enable / Disable Default Model Routes #
  //#########################################
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
  // Product.disableRemoteMethodByName('findById');
  // Product.disableRemoteMethodByName('count');
  Product.disableRemoteMethodByName('upsert');
  Product.disableRemoteMethodByName('updateAll');
  Product.disableRemoteMethodByName('findOne');
  Product.disableRemoteMethodByName('confirm');
  Product.disableRemoteMethodByName('exists');
  Product.disableRemoteMethodByName('replace');
  Product.disableRemoteMethodByName('createChangeStream');
  Product.disableRemoteMethodByName('replaceOrCreate');
  Product.disableRemoteMethodByName('upsertWithWhere');
  //######################
  //#  Model Validation  #
  //######################
  //######################
  // Product.validatesPresenceOf('unit_id', { message: 'units cannot be null'});
  // Product.validatesAbsenceOf('product_price', { ""});
  // Product.validatesAbsenceOf('average_cost');
  Product.validate('units', hasUnitId, { message: 'units not found', allowNull: false});

  function hasUnitId(err) {
    console.log(this.unit_id);
    if (!this.unit_id) {
      err();
      done();
    }

    var Unit = Product.app.models.Unit;
    
    Unit.exists(this.unit_id, function (error, exists) {
      if (error || !exists) {
        err();
      }
    });
  }
};
