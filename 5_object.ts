let student: {
  id: number;
  name: string;
  age: number;
};

student = { id: 1, name: "Piumika", age: 22 };
// student = { id: 1, name: "Piumika", age: 22,gender:"male" };   //Error
// student = 10; // error

///////////////////////////////////////////////Distance cal/////////////////////////////////////

function calDistance(
  location1: { lon: number; lat: number },
  location2: { lon: number; lat: number }
) {
  let lon1 = location1.lon;
  let lat1 = location1.lat;

  let lon2 = location2.lon;
  let lat2 = location2.lat;

  //calc ddistance
  let R = 6371e3; // metres
  let φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  let φ2 = (lat2 * Math.PI) / 180;
  let Δφ = ((lat2 - lat1) * Math.PI) / 180;
  let Δλ = ((lon2 - lon1) * Math.PI) / 180;

  let a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  distance = R * c; // in metres

  return distance;
}

let location_1 = { lon: 0.0, lat: 0.0 };
let location_2 = { lon: 0.0, lat: 0.0 };

let distance = calDistance(location_1, location_2);
console.log(distance);
