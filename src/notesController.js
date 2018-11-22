var notes = new Notes

function getInput() {
  var input = document.getElementById("note-input").value
  notes.addNote(input)
  document.getElementById("printedNotes").innerHTML = "Notes:";
  for (var I = 0; I < notes.noteList.length; I++){
     var noteList = "<li>" + notes.noteList[I] + "</li>" ;
     var note20 = noteList.substring(0,24)
     document.getElementById("printedNotes").innerHTML += note20;
  }
};
