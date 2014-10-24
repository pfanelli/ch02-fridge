Products = new Meteor.Collection('products');

if (Meteor.isClient) {
    Template.fridge.helpers({
        products: function(){
            return Products.find({place: 'fridge'});
        }
    });
    Template.productList.helpers({
        products: function(){
            return Products.find({place: 'supermarket'});
        }
    });

}

if (Meteor.isServer) {
    if (Meteor.isServer) {
        Meteor.startup(function () {
            // code to run on server at startup

            // clear the data base if the server starts
            Products.remove({});

            // fill the database with some products
            Products.insert({
                name: 'Milk',
                img: '/milk.png',
                place: 'fridge'
            });

            Products.insert({
                name: 'Bread',
                img: '/bread.png',
                place: 'supermarket'
            });
        });
    }
}
