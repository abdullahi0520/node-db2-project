// STRETCH
const cars = [
  { 
       
    vin: "1G1AF1F57A7192174",
    make: 'toyota',
    model: 'camry',
    mileage: 130000,
    title: 'clean',
    transmission: 'automatic'

},
{ 
       
    vin: "4NUDT13S962700984",
    make: 'honda',
    model: 'civic',
    mileage: 140000,
    title: 'clean'
    

},
{ 
       
    vin: "JH4KA7551SC006828",
    make: 'nissan',
    model: 'sentra',
    mileage: 10000


}

];

exports.seed = function(knex) {
    return knex('cars').truncate().then(()=> {
        return knex('cars').insert(cars);
    });
};