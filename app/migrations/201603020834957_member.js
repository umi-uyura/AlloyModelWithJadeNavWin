migration.up = function(migrator) {
  var preload_data = [
    {id: 1, name: 'Toshihiko Takamizawa', instrument: 'Electric Guitar'},
    {id: 2, name: 'Kounosuke Sakazaki', instrument: 'Acoustic Guitar'},
    {id: 3, name: 'Masaru Sakurai', instrument: 'Base'}
  ];

  migrator.createTable({
    "columns":
    {
      "id": "integer",
      "name": "text",
      "instrument": "text"
    }
  });

  for (var i = 0; i < preload_data.length; i++) {
    migrator.insertRow(preload_data[i]);
  }
};

migration.down = function(migrator) {
};
