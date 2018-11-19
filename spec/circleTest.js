(function(exports) {
  function testArrayEmpty() {
    var notes = new Notes();

    if (notes.noteList.length > 0 ) {
      throw new Error("the array is not empty");
    }
  };

  function createNewNote() {
    var notes = new Notes();

    addNote("test")
    if (notes.noteList !== ["test"]) {
      throw new Error("no note in the array")
    }
  };

  testArrayEmpty();
  createNewNote();
})(this);
