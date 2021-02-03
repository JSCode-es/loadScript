// @name (string) Nombre del archivo a cargar Ej. app.min
const LoadScript = name =>
{
    // Comprobar si el elemento existe, 
    // si existe no volver a cargar el script
    let isExist = $(`[data-id="load_script_${name}"]`).length == 0;
    
    // Uso de token para controlar al usuario desde el backend
    let token = sessionStorage.getItem('token');

    return new Promise((res,rej)=>{
        
        if(isExist)
        {
            // Crear un elemento de tipo Script
            let fileref = document.createElement('script');

            // Atributo de control
            fileref.setAttribute('data-id',`load_script_${name}`);

            // Tipo de Script
            fileref.setAttribute('type','text/javascript');

            // Ruta de archivo
            fileref.setAttribute('src', `/assets/js/${name}.js?token=${token}`);

            // Control de finalización de la carga
            fileref.onload = function() { res(true); };

            // Control de errores
            fileref.onerror = function(err) { rej(err); };

            // Agregar elemento en el DOM
            document.getElementsByTagName("head")[0].appendChild(fileref);

        } else { 

            res(true);
        }
    });
    
}