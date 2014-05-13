//----------Escribir archivos
//Acceder a sistema de archivos (FileWriter)
function agregarAlArchivo(archivo,texto){
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
        fileSystem.root.getFile(archivo, {create: true, exclusive: false}, function(fileEntry) {
            fileEntry.createWriter(function(writer) {
                writer.onwriteend = function(evt) {
                    navigator.notification.alert('Archivo escrito',function(){ 
                        $('#home .incomplete').append($('<li><input type="checkbox" /> <span>' + $('#todo', $('#add form')).val() + '</span></li>'));
                    },'Escribiendo...','Aceptar');
                };
                writer.write(texto + '\n');
            };

        }, Error);
    },Error);
}


function quitarDelArchivo() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
    }, 
    fail);
}

function gotFS(fileSystem) {
    fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
    fileEntry.file(readAsText, fail);
}

function readAsText(file) {
    var reader = new FileReader();
    reader.onloadend = function(evt) {
        $('#aGet').text(evt.target.result);
    };
    alert(reader.readAsText(file));
}

function fail(evt) {
    console.log(evt.target.error.code);
}
                             
                             
function Error(error) {
    alert(error.code);
}
    


