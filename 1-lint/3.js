var car = {
    km: 120000,
    color: 'red',
    ride: function(km) {
      this.km += km;
  };
  car.ride(220);
alert(car.km);
