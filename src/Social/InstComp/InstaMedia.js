import React, {Component} from 'react';
import { connect } from 'react-redux'

import Axios from 'axios'
import Cds from '../../Cards/CardUI';
import Pds from '../../Cards/UserInfo';
import Vds from '../../Cards/VideoCardUI';



class InstaMedia extends Component{
  constructor(props){
      super(props)
      this.state = {
        media: [],
        profilePic: '',
        username: '',
        bio: '',
        posts: "0",
        followers: "0",
        follows: "0",
        full_name: "",
      }
  }

  // componentDidUpdate(prevProps) {
  //     console.log("updated")
  //     console.log(this.props.token)
  // }

  


  //get tokens from server and store them in redux store
  componentDidMount(){
      //Todo: Change it to set all tokens in store and change id of user (get it from cookies)
      var s = ''
      Axios.get("https://graph.instagram.com/me/media?fields=id,username,caption,media_url,thumbnail_url,timestamp,media_type,username&access_token="+this.props.token)
      .then((response)=>{
        console.log(response)
          if(response.status === 200){                
              console.log(response)
              s = response.data.data[0].username;
                this.setState({ media: response.data.data});
        
                
                Axios.get("https://www.instagram.com/"+s+"/?__a=1")
                .then((response)=>{
                    if(response.status === 200){                
                      console.log(response);
                      const BASE=response.data.graphql.user;
                        this.setState({username: BASE.username,profilePic: BASE.profile_pic_url,bio: BASE.biography,posts: BASE.edge_owner_to_timeline_media.count ,
                          followers: BASE.edge_followed_by.count,follows: BASE.edge_follow.count,full_name: BASE.full_name})
                        
                          //this.setState({ media: response.data.data});
                    }else{
                        //If no token founded in response
                        console.log("Error")
                    }
                  }).catch((error)=>{
                    
                  })



          }else{
              //If no token founded in response
              console.log("Error")
          }
        }).catch((error)=>{
          
        })
        
  }

  render() {
    return[
      <div>
        <Pds imgsrc={this.state.profilePic} full_name={this.state.full_name} title={this.state.username} noPost={this.state.posts} followers={this.state.followers} follows={this.state.follows}  text={this.state.bio}></Pds>
        
      <div style={{display: 'flex',marginTop: "5%"}}>
      
      { this.state.media.map((data,index) => {
        if(data.media_type === "IMAGE"){
          return  <Cds key={index} imgsrc={data.media_url} title={data.caption} timestamp={data.timestamp}/> 
        }
        else{
          return <Vds key={index} vidsrc={data.media_url} title={data.caption} timestamp={data.timestamp}/> 
          // <video key={index} src={data.media_url}  /> 
          // return <div className={index}> <Cds imgsrc={data.thumbnail_url} title={data.caption} timestamp={data.timestamp}/>  </div> 
        }
       }
      )}
                
                

                  {/* { this.state.videos.map((video) =>{
    return <video style={{marginLeft: '500px'}} width="200" controls src={video.media_url} type="video/mp4" />
   
})} */}

      
     
      </div>
    </div>
    
  ];
  }



}
// this,props,token
  const mapStateToProps = (state) => ({
      // ... computed data from state and optionally ownProps
      token: state.instagram.basicToken.token.accessToken,
      //userId: state.instagram.token.userId,
      
  })

  export default connect(mapStateToProps,null) (InstaMedia)

// curl -X GET "https://graph.instagram.com/me/media?fields=id,caption,username&access_token=IGQVJXZAkZAiR2N2azVYZAlRhWHlma2dsTlpSbG5yeHhVTzRfUDZAlcFR3TWE3dFpBQnd1Q2ZACUVZARbVQzWmVsSk9hRWRWcW9zRE9aSEVRTFBwSXBXVmFsaWR3aURqT09yVTN0UUVaLXN3ZAVlobUVwM1dsVmd1cnR5LTFqV2g0""
