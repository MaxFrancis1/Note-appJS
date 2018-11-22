(function(exports) {

  function testArrayIsDefined() {
    var notes = new Notes;
    if (notes.noteList == undefined ) {
      throw new Error("the array is not an array");
    }
  };

  function testArrayEmpty() {
    var notes = new Notes;

    if (notes.noteList.length > 0 ) {
      throw new Error("the array is not empty");
    }
  };

  function createNewNote() {
    var notes = new Notes;

    notes.addNote("test");
    if (notes.noteList.length !== 1) {
      throw new Error("no note in the array")
    }
  };

  testArrayIsDefined();
  testArrayEmpty();
  createNewNote();
})(this);
