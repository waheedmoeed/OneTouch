import React, {Component} from 'react';
import { connect } from 'react-redux'

import Axios from 'axios'
import Cds from '../../Cards/CardUI';


class InstaMedia extends Component{
  constructor(props){
      super(props)
      this.state = {
        media: [],
        
      }
  }

  // componentDidUpdate(prevProps) {
  //     console.log("updated")
  //     console.log(this.props.token)
  // }

  //get tokens from server and store them in redux store
  componentDidMount(){
      //Todo: Change it to set all tokens in store and change id of user (get it from cookies)
      Axios.get("https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,timestamp,media_type,username&access_token="+this.props.token)
      .then((response)=>{
          if(response.status === 200){                
              console.log(response.data);
              //if(response.data.data.media_type == 'IMAGE'){
                console.log("Here")
                this.setState({ media: response.data.data});
                // this.setState({ videos: response.data.data});
            //}
          }else{
              //If no token founded in response
              console.log("Error")
          }
        }).catch((error)=>{
          
        })
  }

  render() {
    return[
      
      <div style={{display: 'flex'}}>
        
      { this.state.media.map((data,index) => {
                  console.log(index);
                  if(data.media_type == "IMAGE"){
                  return  <div className={index}> <Cds imgsrc={data.media_url} title={data.caption} timestamp={data.timestamp}/> </div> 
                }
                else {
                  return <video controls width="200" src={data.media_url} type="video/mp4" /> 
                  // return <div className={index}> <Cds imgsrc={data.thumbnail_url} title={data.caption} timestamp={data.timestamp}/>  </div> 
                }
                })}

                  {/* { this.state.videos.map((video) =>{
    return <video style={{marginLeft: '500px'}} width="200" controls src={video.media_url} type="video/mp4" />
   
})} */}

      
     
    </div>
    
  ];
  }



}
// this,props,token
  const mapStateToProps = (state) => ({
      // ... computed data from state and optionally ownProps
      token: state.instagram.token.accessToken,
      //userId: state.instagram.token.userId,
      
  })

  export default connect(mapStateToProps,null) (InstaMedia)

// curl -X GET "https://graph.instagram.com/me/media?fields=id,caption,username&access_token=IGQVJXZAkZAiR2N2azVYZAlRhWHlma2dsTlpSbG5yeHhVTzRfUDZAlcFR3TWE3dFpBQnd1Q2ZACUVZARbVQzWmVsSk9hRWRWcW9zRE9aSEVRTFBwSXBXVmFsaWR3aURqT09yVTN0UUVaLXN3ZAVlobUVwM1dsVmd1cnR5LTFqV2g0""
