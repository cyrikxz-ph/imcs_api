'use strict';

module.exports = function(BaseModel) {
  BaseModel.observe('before save', function createUpdateTimestamp(ctx, next) {
    if (ctx.isNewInstance) {
      if (ctx.instance) {
        ctx.instance.createdAt = new Date();
      } else {
        ctx.data.createAt = new Date();
      }
      next();
    } else {
      if (ctx.instance) {
        ctx.instance.createdAt = ctx.instance.createdAt;
        ctx.instance.updatedAt = new Date();
      } else {
        ctx.instance.createdAt = ctx.instance.createdAt;
        ctx.data.updateAt = new Date();
      }
      next();
    }
  });
};
