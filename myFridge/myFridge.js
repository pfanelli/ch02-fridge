Products = new Meteor.Collection('products');

if (Meteor.isClient) {
    Template.fridge.helpers({
        products: function(){
            return Products.find({place: 'fridge'});
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
