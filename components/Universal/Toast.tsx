


const Toast = (prop: any) => {

    return (
      <div  className="show"  >
  
        <div >
          <strong className="me-auto">{prop.title}</strong>
          
        </div>
  
        <div className="toast-body">
          {
            typeof(prop.body) === 'string'
            ? prop.body
            : 
            <ul>
              {
                prop.body?.map((text: string, index: number) => (
                  <li key={index}>{text}</li>
                ))
              }
            </ul> 
          }
        </div>
  
      </div>
    )
  }
  
  export default Toast
  