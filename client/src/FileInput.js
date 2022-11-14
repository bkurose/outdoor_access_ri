import React,{Component} from 'react';

class FileInput extends Component {
    
    state = {
      // Initially, no file is selected
      image_url: null,
      user_id: "",
      water_access_id: ""
    };
     
    // On file select (from the pop up)
    onFileChange = event => {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        this.setState({...this.state, image_url: reader.result });
      };
      reader.readAsDataURL(file);
      this.setState({...this.state, user_id: this.props.user.id, water_access_point_id: this.props.currentAccess.id})
    };
     
    // On file upload (click the upload button)
    onFileUpload = () => {
      // Details of the uploaded file
      console.log(this.state.imagePreviewUrl);
      console.log(this.props.user)
     
      // Request made to the backend api
      fetch('/water_access_images', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      
      
    };
  
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
     
      if (this.state.selectedFile) {
          
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
  
            <p>File Type: {this.state.selectedFile.type}</p>
  
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
  
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

    render() {
     
      return (
        <div>
            <h1>
              Upload an Image!
            </h1>
            <p>
              Image Upload powered by Geeks4Geeks
            </p>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
  
  export default FileInput;