(function(exports) {
  function testArrayEmpty() {
    var notes = new Notes();

    if (notes.list.length > 0 ) {
      throw new Error("the array is not empty");
    }
  };

  testArrayEmpty();
})(this);
