// @name (string) Nombre del archivo a cargar Ej. app.min
const LoadCss = name =>
{
    // Comprobar si el elemento existe, 
    // si existe no volver a cargar el script
    let isExist = $(`[data-id="load_css_${name}"]`).length == 0;
    
    // Uso de token para controlar al usuario desde el backend
    let token   = sessionStorage.getItem('token');

    return new Promise((res,rej)=>{

        if(isExist)
        {   
            // Crear un elemento de tipo Link
            let fileref=document.createElement('link');

            // Atributo de control
            fileref.setAttribute('data-id',`load_css_${name}`);

            // Tipo de link
            fileref.setAttribute('rel', 'stylesheet');
            fileref.setAttribute('type', 'text/css');

            // Ruta de archivo
            fileref.setAttribute('href', `/assets/css/${name}.css?token=${token}`);

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