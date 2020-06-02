import React, { Component } from 'react';
import './App.css';

class App extends Component{
   render(){
      return(
        <div id="box">
        <div className="uplaod_img">
        <form style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <h5 style={{textAlign: 'center'}}>Enter your Details</h5>
            <br />
                <div ClassName="form-group">
                  <label for="exampleFormControlInput1">Upload image here :</label>
                  <input type="file" className="form-control" id="exampleFormControlInput1" name="profile" accept="image/*" />
                  <br />
                  <button type="submit" value="submit" onClick="run()">Submit</button>
                </div>
        </form>
        </div>
        </div>
      );
   }
}
export default App;
