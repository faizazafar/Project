import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { ApiUrl, Loader } from '../../config'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { connect } from 'react-redux';
import { TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from './FirstRoute'
import SecondRoute from './SecondRoute'
import Image from 'react-native-fast-image'
import axios from 'axios';
import SplashScreen from "react-native-splash-screen";
import Modal from 'react-native-modal'

const { width } = Dimensions.get('screen')
const initialLayout = { width };

class Home extends React.Component {
  state = {
    recents: [], popular: [], favorites: [],
    loader: true,
    index: 0,
    routes: [
      { key: '0', title: 'Choix' },
      { key: '1', title: 'Favoris' },
      { key: '2', title: 'Lecture' },
      { key: '3', title: 'Audios' },
    ],
    activeChild:null,
    paymentModal:false,
  }
  renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      tabStyle={{
        width: initialLayout.width * 0.30,
        backgroundColor: 'blue'
      }}
      renderTabBarItem={({ route }) => {
        const selected = this.state.index === parseInt(route.key)
        let imageSrc = require('../../assets/Choix.png')
        if (route.title === "Favoris") imageSrc = require('../../assets/Favoris.png')
        else if (route.title === "Lecture") imageSrc = require('../../assets/Apprentissage.png')
        else if (route.title === "Audios") imageSrc = require('../../assets/Audios.png')

        return <TouchableOpacity
          key={parseInt(route.key)}
          onPress={() => this.setState({ index: parseInt(route.key) })}
          style={{ flexDirection: 'row', alignItems: 'center', width: initialLayout.width * 0.30, padding: 10, justifyContent: 'center' }}
        >
          <Image source={imageSrc} style={{ width: 25, height: 25 }} resizeMode="contain" />
          <Text numberOfLines={1} style={{ fontWeight: '600', color: selected ? '#002EFF' : '#8097FF', fontSize: 13, marginLeft: 5 }}>
            {route.title}
          </Text>
        </TouchableOpacity>
      }}
      indicatorStyle={{
        backgroundColor: '#F9FAFF',
        borderBottomColor: "#FFD100",
        borderBottomWidth: 3,
        height: '100%',
      }}
      style={{ backgroundColor: 'white' }}
    />
  );
  renderScene = ({ route, jumpTo }) => {
    const { navigate } = this.props.navigation
    const { loader } = this.state;
    const {books,activeChildReducer} = this.props;

    switch (route.key) {
      case '0':
        return <FirstRoute
          navigate={navigate}
          activeChild={activeChildReducer}
          loader={loader}
          recents={books.recents || []}
          popular={books.popular || []}
          jumpTo={jumpTo}
          />;
          case '1':
            return <SecondRoute
            navigate={navigate}
            favorites={books.favorites || []}
            jumpTo={jumpTo}

            />;
        default:
        return <SecondRoute
          jumpTo={jumpTo}
          />;

    }
  };
  setModalTrue = () =>{
    this.setState({paymentModal:true})
  }
  componentDidMount() {
    SplashScreen.hide();
    const { parent,books,activeChildReducer } = this.props;
    const subscription = parent.data.subscriptions.filter((sub)=>sub.subscriptionType !== 'trial')
    console.log("subscription ==>",subscription)
    if(subscription.length === 0){
      this.setModalTrue()
    }
    else{
      subscription.map((sub)=>{
        const endTime = new Date(sub.end).getTime() - Date.now()
        if(endTime <= 0){
          this.setModalTrue()
        }
      })

    }
    let { children } = parent.data;
    if(!books?.recents?.length)
    this.resetChildPassword(children[0], parent.token)
    else
    this.setState({loader:false,activeChild:activeChildReducer})
  }
  resetChildPassword = (activeChild, token) => {
    axios.get(ApiUrl + "child/resetPassword/" + activeChild._id, { headers: { "Authorization": token } })
      .then(({ data: { data } }) => {
        let { password } = data;
        let { pseudo } = activeChild;
        this.signinChild(pseudo, password)
      })
      .catch((err) => console.log(err))
  }
  signinChild = (pseudo, password) => {
    axios.post(ApiUrl + "signin/child", {
      "pseudo": pseudo,
      "password": password
    })
      .then(({ data: { data } }) => {
        //added to redux
        this.props.activeChild(data)
        this.getBooks(data)
      })
      .catch((err) => console.log(err))
  }
  getBooks = (activeChild) => {
    axios.get(ApiUrl + "getBooks", { headers: { "Authorization": activeChild.token } })
      .then(({ data: { data } }) => {
        let {recents,favorites,popular} = data;
        this.props.saveBooks(recents,favorites,popular)
        this.setState({ loader: false })
      })
      .catch((err) => console.log(err))
  }
  render() {
    const { navigate } = this.props.navigation;
    const { index, routes, loader,paymentModal } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: getStatusBarHeight() }}>
        <Loader isLoading={loader} />
        <TabView
          renderTabBar={this.renderTabBar}
          navigationState={{ index, routes }}
          renderScene={this.renderScene}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={initialLayout}
        />
        <Modal isVisible={paymentModal}>
    <View style={{backgroundColor:'white',borderRadius:20,margin:10,overflow:'hidden'}}>
      <View style={{backgroundColor:'#FFD100',padding:20,alignItems:'center'}}>
        <Text style={{color:"#fff",fontWeight:'900',fontSize:24}}>OFFRE LIMITEE</Text>
      </View>
      <View style={{padding:20}}>
      <Text style={{fontWeight:'600',fontSize:16,textAlign:"center"}}>{"Essayez 7 jours GRATUITS\npuis payez 4000 XOF par mois"}</Text>
      <Text style={{marginVertical:10,color:"#16E677",textAlign:'center',fontSize:16}}>Annulation facile</Text>
      <TouchableOpacity onPress={()=>{navigate('Payment',{setModalTrue:this.setModalTrue});this.setState({paymentModal:false})}}>
        <Image source={require('../../assets/commencer.png')} style={{width:width-100,alignSelf:'center',height:60}} resizeMode={"contain"} />
      </TouchableOpacity>
      <Text style={{color:"#C5C5C5",textAlign:'center'}}>1 semaine gratuite, 4000 XOF/mois</Text>
      </View>
      <View style={{backgroundColor:'#F9FAFF',padding:20,paddingHorizontal:40}}>
        <View style={{marginBottom:10,alignItems:'center',flexDirection:'row'}}>
        <Image source={require('../../assets/tick.png')} style={{width:20,height:20,marginRight:10}} resizeMode={'contain'}/>
        <Text style={{color:"#959595",fontWeight:'600'}}>Acces offline</Text>
        </View>
        <View style={{marginBottom:10,alignItems:'center',flexDirection:'row'}}>
        <Image source={require('../../assets/tick.png')} style={{width:20,height:20,marginRight:10}} resizeMode={'contain'}/>
        <Text style={{color:"#959595",fontWeight:'600'}}>Contenus originaux</Text>
        </View>
      </View>
    </View>
    </Modal>
    
      </View>
    );
  }
}

function mapStateToProps(state) {
  return ({
    parent: state.reducer.parent,
    activeChildReducer: state.reducer.activeChild,
    books: state.reducer.books,
  })
}
function mapDispatchToProps(dispatch) {
  return ({
    activeChild: (child) =>{
      dispatch({type:"ACTIVE_CHILD",payload:child})
    },
    saveBooks: (recents,favorites,popular) =>{
      dispatch({type:"SAVE_BOOKS",payload:{recents,favorites,popular}})
    },

  })
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
