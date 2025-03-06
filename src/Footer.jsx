import './index.css'
export function Footer(){
    return(
         
             <div className='pintura'>
                <footer className="py-5 r">
                <div className="row">
                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                     
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>

                <div className="col-md-5 offset-md-1 mb-3">
                    <form>
                    <h5>Suscríbete a nuestra plataforma</h5>
                    <p> </p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label htmlfor="newsletter1" className="visually-hidden">Correo electronico</label>
                        <input id="newsletter1" type="text" className="form-control" placeholder="Correo electronico"/>
                        <button className="btn btn-primary" type="button">Suscribirme</button>
                    </div>
                    </form>
                </div>
                </div> 

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; {new Date().getFullYear()} Company, Inc. Reservados todos los derechos.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                    <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                </ul>
                </div>
            </footer>
             </div>
         
         
    );
} 