import React,{Component} from 'react';




class FileInput extends Component {
    
    state = {
      // Initially, no file is selected
      selectedFile: null,
      user_id: "",
      water_access_id: ""
    };
     
    // On file select (from the pop up)
    onFileChange = event => {
      this.setState({ selectedFile: event.target.files[0]});
    };
     
    // On file upload (click the upload button)
    onFileUpload = () => {
      // Create an object of formData
      const formData = {
        user_id: this.props.user.id,
        water_access_point_id: this.props.currentAccess.id,
        myFile: URL.createObjectURL(this.state.selectedFile)
      };

     
      // Details of the uploaded file
      console.log(this.state.selectedFile);
      console.log(this.props.user)
     
      // Request made to the backend api
      // Send formData object
      fetch('/water_access_images', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify(formData)
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
              GeeksforGeeks
            </h1>
            <h3>
              File Upload using React!
            </h3>
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