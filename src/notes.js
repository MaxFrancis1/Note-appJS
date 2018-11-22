(function(exports) {
 function Notes() {

   this.noteList = []
 };

  Notes.prototype.addNote = function (text) {
   this.noteList.push(text)
 };

  Notes.prototype.printNotes = function () {
    x = this.noteList.map
    console.log(x)
  };

 exports.Notes = Notes;
})(this);
