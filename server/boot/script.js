module.exports = function(app) {
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;


    // RoleMapping.find({
    //     where: {
    //         principalId: '59607b6876aeb5272a99118f'.toString()
    //     }
    // }, function (err, mapping){
    //     console.log(mapping)
    // });
    // Role.find({
    //     where :{
    //         name: 'admin'
    //     }
    // },function (err, role){
            
            
    //     });
    var debug = require('debug')('loopback:boot:executor');
    var User = app.models.user;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    User.create(
        {username: 'cyrix', email: 'aleson.llanes@carvepacket.com', password: '1234567890'}, 
        function(err, user) {
        if (err) return debug('%j', err);
        //...
        // Create projects, assign project owners and project team members
        //...
        // Create the admin role
        Role.create({
        name: 'admin'
        }, function(err, role) {
            if (err) return debug(err);
            debug(role);

            // Make Bob an admin
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: user.id
            }, function(err, principal) {
                if (err) return debug(err);
                debug(principal);
            });
        });
    });
};