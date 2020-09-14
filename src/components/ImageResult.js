import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton'
import ZoomIn from '@material-ui/icons/ZoomIn'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';



// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     icon : {
//         color : 'white',
//     },
// })) ;


export default class ImageResult extends Component {

        state =  {
            open : false,
            openImg : '',
      };

  handleOpen = (currentImg) => {
      console.log(currentImg);
     this.setState({ open : true , openImg : currentImg })
  }

  handleClose = () =>{
      this.setState({open : false})
  }

    render() {        
        // const mystyle = useStyles();          for custom style initiation for using 
        let displayImage;
        const { images } = this.props;
        if (images){
            displayImage = (
                <GridList cellHeight={300} cols ={3} component='ul' spacing={20}>
                    {
                     images.map((img) =>(
                         <GridListTile id={img.id}>
                             <img src={img.largeImageURL} alt = '' />
                             <GridListTileBar 
                             title = {img.tags}
                             subtitle= {<span> By:
                                 <strong>{img.user}</strong>
                             </span>}
                             actionIcon={
                                 <IconButton onClick= { () => this.handleOpen(img.largeImageURL) } >                           
                                    {/* className={mystyle.icon}       for adding custom styles*/}
                                     <ZoomIn  />
                                 </IconButton>
                             }
                             />
                         </GridListTile>
                     ))
                    }
                </GridList>
            )
        }
        else {
            displayImage = (
                <h1>
                NO Image Found
                </h1>
            )
        }
        return (
            <div>
                   {displayImage}
                   <Dialog
                   open={this.state.open}
                   >
                       <DialogContent>
                       <img src={this.state.openImg} alt='' style={{width: '100%' } }/>
                       </DialogContent>
                       <DialogActions>
                           <Button onClick ={this.handleClose}>
                         CLose
                           </Button>
                       </DialogActions>
                   </Dialog>
            </div>
        )
    }

}
