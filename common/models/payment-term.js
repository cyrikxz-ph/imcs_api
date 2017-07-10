'use strict';

module.exports = function(Paymentterm) {
  //#########################################
  //# Enable / Disable Default Model Routes #
  //#########################################
  // Paymentterm.disableRemoteMethodByName('create');
  // Paymentterm.disableRemoteMethodByName('prototype.__count__accessTokens');
  // Paymentterm.disableRemoteMethodByName('prototype.__create__accessTokens');
  // Paymentterm.disableRemoteMethodByName('prototype.__delete__accessTokens');
  // Paymentterm.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  // Paymentterm.disableRemoteMethodByName('prototype.__findById__accessTokens');
  // Paymentterm.disableRemoteMethodByName('prototype.__get__accessTokens');
  // Paymentterm.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  // Paymentterm.disableRemoteMethodByName('prototype.updateAttributes');
  // Paymentterm.disableRemoteMethodByName('prototype.patchAttributes');
  // Paymentterm.disableRemoteMethodByName('replaceById');
  // Paymentterm.disableRemoteMethodByName('deleteById');
  // Paymentterm.disableRemoteMethodByName('find');
  // Paymentterm.disableRemoteMethodByName('count');
  Paymentterm.disableRemoteMethodByName('upsert');
  Paymentterm.disableRemoteMethodByName('updateAll');
  Paymentterm.disableRemoteMethodByName('findById');
  Paymentterm.disableRemoteMethodByName('findOne');
  Paymentterm.disableRemoteMethodByName('confirm');
  Paymentterm.disableRemoteMethodByName('exists');
  Paymentterm.disableRemoteMethodByName('replace');
  Paymentterm.disableRemoteMethodByName('createChangeStream');
  Paymentterm.disableRemoteMethodByName('replaceOrCreate');
  Paymentterm.disableRemoteMethodByName('upsertWithWhere');
  
  //######################
  //#  Model Validation  #
  //######################
  Paymentterm.validatesPresenceOf('term_name', 'term_days');
  Paymentterm.validatesNumericalityOf('term_days', { message: { number: 'is not a number' }});


  Paymentterm.validate('term_days', positiveTermDaysValidator, {message: 'cannot be less than zero'});

  function positiveTermDaysValidator(err) {
      if (this.term_days < 0 ) err();
  };
};
