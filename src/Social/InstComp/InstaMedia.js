var axios = require('axios');
require("dotenv").config();


var authorize= true;

module.exports={
        getMedia : function(req, res){
            const logger = winston.get('getMedia.js')
            //const access_token = "IGQVJWY1VLWG12ZAndjemNOcjNEV1RHRVZA3NFFyVGktb3VId3lOY3F6MXh3dS0xelFUTk42SnNOWllXMWQtZAHAwdDNHZADE3UE9oOXZAWdWlzcTQtYWZA6ZAFRleklQNWpyLXN4TzdhR0JB"
                
                var options = {
                  'method': 'POST',
                  'url': 'https://graph.instagram.com/me/media?fields=id,caption,username&access_token=',
                  'headers': {
                    
                  },
                  formData: {
                    'client_id': process.env.insta_client_id,
                    'client_secret': process.env.insta_client_secret,
                    'grant_type': 'authorization_code',
                    'redirect_uri': 'https://localhost:3000/instagaram-redirect/',
                    'code': 'AQCQR88F-6Zyd_uGM8siNCvnjMfRDV60pd1h4L8229c-am1nESuQ0-cdf1zjAb4H4PBQUlokT7ngg2lCTa_tz-ATBJQEG8KvUfRFTD2JfPI6wqtpDYN379NNzM_TE-xjkgccHzkGp2ZK7sd5tKO9x_3UGezu_qWK4A9u20Z7tLsYXed8xvaPAgAozrXjTpQbcCqTOUSarqUyGdr31O1RRtnSegGg13KLZHhdq4Ym-bN2_g'
                  }
                };
                request(options, function (error, response) { 
                  if (error) {
                      logger.error(error);
                      res.statusCode = 400;
                      res.send(error);
                  }
                  else {
                      logger.info(response);
                      res.statusCode = 200;
                      res.send(response);
                  }
                  console.log(response.body);
                });
                
        }
    }

// this,props,token
  const mapStateToProps = (state) => ({
      // ... computed data from state and optionally ownProps
      token: state.instagram.token.accessToken,
      userId: state.instagram.token.userId,
      
  })

  export default connect(mapStateToProps,null) (InstaMedia)

// curl -X GET "https://graph.instagram.com/me/media?fields=id,caption,username&access_token=IGQVJXZAkZAiR2N2azVYZAlRhWHlma2dsTlpSbG5yeHhVTzRfUDZAlcFR3TWE3dFpBQnd1Q2ZACUVZARbVQzWmVsSk9hRWRWcW9zRE9aSEVRTFBwSXBXVmFsaWR3aURqT09yVTN0UUVaLXN3ZAVlobUVwM1dsVmd1cnR5LTFqV2g0""
