import React, { Component } from 'react'
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import ImageResult from './ImageResult'
// import { makeStyles } from '@material-ui/core/styles'


// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

export default class SelectOpt extends Component {
    state = {
        apiURL :"https://pixabay.com/api/",
        apiKey : '18248586-c4065f40705317bbbec59ff9f',
        image_type : 'all',
        search : '',
        image : [],
      };

      searchChange = (e) =>{
          this.setState({[e.target.name] : e.target.value});
      }
      
      handleChange = (e) =>{
        axios.get(`${this.state.apiURL}?key=${this.state.apiKey}&q=${this.state.search}&image_type=${this.state.image_type}`)
        .then( res => this.setState({ image : res.data.hits}))
        .catch( err => console.log(err));
      }


  render() {
    // const classes = useStyles();
      return (
          <div >
           <TextField fullWidth = "true"  name="search" value={ this.state.search } label="Search"  onChange={this.searchChange}  />
              <br />
               <Select
              name = "image_type"
              value={this.state.image_type}
              onChange={this.searchChange}
              >
              <MenuItem value={'all'}>All</MenuItem>
              <MenuItem value={'vector'}>Vector</MenuItem>
              <MenuItem value={'illustration'}>Illustration</MenuItem>
              <MenuItem value={'photo'}>Photo</MenuItem>
              </Select>
              <br />
              <Button variant="contained" color="primary" onClick ={this.handleChange}>Search</Button>

              {this.state.image.length > 0 ? (<ImageResult images = {this.state.image} /> ) : null }

          </div>
      )
    }
}
