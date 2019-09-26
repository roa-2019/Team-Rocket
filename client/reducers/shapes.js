const shapes = {
    ellipse: <ellipse cx="190" cy="110" rx="50" ry='100' stroke="black" strokeWidth="1.5" fill={this.props.noseColor} />,
    
    rectangle: <rect width='100' height='300' fill={this.props.bodyColor} stroke='black' strokeWidth='1' ry='5' y='100' x='140' />,

    triangle: <triangle />

    
    
  }

  export function getShape(shape){
      switch(shape){
          case "ellipse":
              return shapes.ellipse
           
            case "triangle":
                return shapes.triangle
        
                
           
           
            
              
      }
  }