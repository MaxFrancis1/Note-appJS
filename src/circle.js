(function(exports) {
  function Notes() {
    this.noteList = [];
  };

  function addNote(note) {
    this.noteList << note
  };

  exports.Notes = Notes;
})(this);
