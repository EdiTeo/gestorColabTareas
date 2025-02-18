import '../index.css'
export function  Contenido(){
    return(
        <>
            <div className="text-sm-start">
                <h2>Menubar</h2>
                <p className="lh-base">La barra de menú, también conocida como barra de navegación, es un componente de menú horizontal.</p>
                <h5>Import</h5>
                <div>
                    <pre>
                        <code className='code-contenido '>
                             <span>import {'{Menobar}'} from 'primereact/menubar';</span>
                        </code>
                    </pre>
                </div>
                <h5>Basic</h5>
                 <p>La barra de menú requiere una colección de elementos de menú como <i><mark>modelo</mark></i>.</p>
                 <h5>Accessibility</h5>
                 <p className='doc-section-description'>Menubar component uses the <i>menubar</i> role and the value to describe the menu can either
                  be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has
                    a <i>presentation</i> role whereas anchor elements have a <i>menuitem</i> role with <i>aria-label</i>
                    referring to the label of the item and <i>aria-disabled</i> defined if the item is disabled.
                    A submenu within a MenuBar uses the <i>menu</i> role with an <i>aria-labelledby</i> 
                    defined as the id of the submenu root menuitem label. In addition,
                    menuitems that open a submenu have <i>aria-haspopup</i>, <i>aria-expanded</i> 
                    and <i>aria-controls</i> to define the relation between the item and the submenu.</p>
            </div>
        </>
    );

}