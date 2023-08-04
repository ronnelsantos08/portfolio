import './Modal.scss'

const Modal = ({ show, close, title, children }) => {
  return (
    <>
     
     <div className={`modalContainer ${show ? "show" : ""}`}>
        <div className="modal" >
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <button className="close" onClick={()=> close()}>x</button>
          </header>
          <main className="modal_content">
          {children}
          </main>
          <footer className="modal_footer">
        
          </footer>
        </div>
      </div>
      
    </>
  );
};


  
  export default Modal;