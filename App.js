//import liraries
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Text,
  Tab,
  Tabs,
  TabHeading,
  ScrollableTab,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import MyIcon from 'react-native-vector-icons/Ionicons';

class SearchBar extends Component {
  render() {
    return (
      <Header searchBar rounded style={{ height: 80, backgroundColor: '#fff' }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Item style={{ height: 50, elevation: 5, padding: 10, marginBottom: 10, marginTop: 10 }}>
            <Icon name="list" style={{ fontSize: 20, color: '#444' }} />
            <Input placeholder="Telusuri Aplikasi & Game"></Input>
            <Icon name="md-mic"></Icon>
          </Item>
        </View>
      </Header>
    );
  }
}

class TabMenu extends Component {
  render() {
    return (
      <Tabs locked={true} renderTabBar={() => <ScrollableTab underlineStyle={{ backgroundColor: 'green' }} style={{ backgroundColor: '#fff' }} />}>
        <Tab heading={
          <TabHeading style={{ backgroundColor: '#fff' }}>
            <Text style={{ color: '#444' }}>Untuk Anda</Text>
          </TabHeading>
        }>
          <MenuIndex />
        </Tab>
        <Tab heading={
          <TabHeading style={{ backgroundColor: '#fff' }}>
            <Text style={{ color: '#444' }}>Paling Populer</Text>
          </TabHeading>
        }>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Coming Soon</Text>
          </View>
        </Tab>
        <Tab heading={
          <TabHeading style={{ backgroundColor: '#fff' }}>
            <Text style={{ color: '#444' }}>Premium</Text>
          </TabHeading>
        }>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Coming Soon</Text>
          </View>
        </Tab>
      </Tabs>
    )
  }
}

class FooterMenu extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: '#fff' }}>
          <Button>
            <MyIcon name="logo-game-controller-b" size={25} style={{ color: 'green' }} />
            <Text style={{ color: 'green' }}>Game</Text>
          </Button>
          <Button>
            <MyIcon name="md-apps" size={25} style={{ color: 'green' }} />
            <Text style={{ color: 'green' }}>Aplikasi</Text>
          </Button>
          <Button>
            <MyIcon name="md-film" size={25} style={{ color: 'green' }} />
            <Text style={{ color: 'green' }}>Film</Text>
          </Button>
          <Button>
            <MyIcon name="md-bookmarks" size={25} style={{ color: 'green' }} />
            <Text style={{ color: 'green' }}>Buku</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

class MenuIndex extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ padding: 20 }}>
            <Text style={{ color: '#111', fontSize: 20 }}>Anda Mungkin Suka...</Text>
            <Text style={{ color: '#444', fontSize: 12 }}>Berdasarkan pemasangan baru-baru ini</Text>
          </View>
          <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <MyIcon name="md-arrow-forward" size={30} />
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20, }}>
                <View>
                  <Image source={require('./assets/images/raid.jpg')} style={{ width: 280, height: 160, borderRadius: 12, }} />
                </View>
                <View style={{ paddingTop: 15, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('./assets/icons/raid.jpg')} style={{ width: 30, height: 30, borderRadius: 5 }} />
                  <Text style={{ paddingLeft: 10 }}>Raid Shadow Legends</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20, }}>
                <View>
                  <Image source={require('./assets/images/w-o-t.jpg')} style={{ width: 280, height: 160, borderRadius: 12, }} />
                </View>
                <View style={{ paddingTop: 15, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('./assets/icons/wot.jpg')} style={{ width: 30, height: 30, borderRadius: 5 }} />
                  <Text style={{ paddingLeft: 10 }}>World of Tanks</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20, }}>
                <View>
                  <Image source={require('./assets/images/w-r.jpg')} style={{ width: 280, height: 160, borderRadius: 12, }} />
                </View>
                <View style={{ paddingTop: 15, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('./assets/icons/w-r.jpg')} style={{ width: 30, height: 30, borderRadius: 5 }} />
                  <Text style={{ paddingLeft: 10 }}>War Robots</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <MenuSuggestion />
      </ScrollView >
    );
  }
}

class MenuSuggestion extends Component {
  render() {
    return (
      <>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ padding: 20 }}>
            <Text style={{ color: '#111', fontSize: 20 }}>Disarankan Untuk Anda</Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                <Image source={require('./assets/icons/codm.png')} style={{ width: 120, height: 120, borderRadius: 12, }} />
                <Text style={{ paddingTop: 10 }}>CODM</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                <Image source={require('./assets/icons/pubg.png')} style={{ width: 120, height: 120, borderRadius: 12, }} />
                <Text style={{ paddingTop: 10 }}>PUBGM</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                <Image source={require('./assets/icons/tebak-gambar.jpg')} style={{ width: 120, height: 120, borderRadius: 12, }} />
                <Text style={{ paddingTop: 10 }}>Tebak Gambar</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                <Image source={require('./assets/icons/raid.jpg')} style={{ width: 120, height: 120, borderRadius: 12, }} />
                <Text style={{ paddingTop: 10 }}>Raid Shadow Le..</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                <Image source={require('./assets/icons/wot.jpg')} style={{ width: 120, height: 120, borderRadius: 12, }} />
                <Text style={{ paddingTop: 10 }}>World of ...</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                <Image source={require('./assets/icons/w-r.jpg')} style={{ width: 120, height: 120, borderRadius: 12, }} />
                <Text style={{ paddingTop: 10 }}>War Robots</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <TabMenu />
        <FooterMenu />
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
