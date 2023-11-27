(function () {
  var toto = 5;
  console.log("toto: ", toto);

  setTimeout(() => {
    console.log("toto: ", toto);
  }, 1000);
})();
