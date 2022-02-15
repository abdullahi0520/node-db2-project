// STRETCH
const cars = [
  { 
       
    vin: 1111111111211,
    make: 'toyota',
    model: 'camry',
    mileage: 130000,
    title: 'clean',
    transmission: 'automatic'

},
{ 
       
    vin: 1111111131111,
    make: 'honda',
    model: 'civic',
    mileage: 140000,
    title: 'clean'
    

},
{ 
       
    vin: 1111111161111,
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