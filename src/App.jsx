import { useState } from 'react'
import './App.css'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { useEffect } from 'react';

function App() {
  const multiLine = `\`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\``

  //\`\`\`function otroEjemplo(param) {\nif (param == "") {\nreturn "Vacío";\n}\n}\`\`\`

  const [htmlCode, setHtmlCode] = useState(`# Preview de HTML\n## Con diferentes etiquetas, puedes crear diferentes elementos.\nSe pueden incluir incluso [links](https://github.com/Chuusi/)\n\nSe puede añadir código \`<div></div>\` mediante el uso de acentos graves ( \` ).\n\nTambién código multilínea entre tres acentos graves\n${multiLine}\nSe pueden incluir listas:\n- Con este estilo\n  - Podremos indentar\n    - Nuestras listas\n\nY si queremos añadir bloques de citas,\n> También podremos!\n\nAñadir imágenes mediante links también es una opción!![HollowKnight Photo](https://assetsio.gnwcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp)\n\n**Pruébame, ¡pulsa el botón para limpiar todo!**`)

  const handleChange = (e) => {
    e.preventDefault();
    setHtmlCode(e.target.value)
    document.getElementById("preview").innerHTML=marked.parse(e.target.value)
  }

  const handleClean = () => {
    setHtmlCode("")
    document.getElementById("preview").innerHTML="";
  }

  useEffect(() => {
    document.getElementById("preview").innerHTML=marked.parse(htmlCode)
  },[])

  return (
    <main>
      <div className="container bg-secondary text-center p-5">
        <h1 className='text-warning my-5'>HTML PREVIEW</h1>
        <div className="row">
          <div className="col container m-2 text-area-container">
            <textarea className="p-3" rows="30" cols="50" value={htmlCode} onChange={handleChange} name="html_code" id="editor"></textarea>
          </div>
          <div id="preview" className="col container bg-white m-2 text-start p-3 text-container">
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5"></div>
          <button onClick={handleClean} className="btn btn-warning col-2">LIMPIAR TODO</button>
          <div className="col-5"></div>
        </div>

      </div>

    </main>
  )
}

export default App
