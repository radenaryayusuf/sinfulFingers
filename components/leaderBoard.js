import React, { Component } from 'react';
import { View, Alert,StatusBar, Text } from 'react-native';
const axios = require('axios');
import Leaderboard from 'react-native-leaderboard';

export default class leaderboard extends Component {
    state = {
        response: 0,
        isLoading: false
    }
    async componentDidMount(){
        try {
            const response = await axios.get('http://192.168.137.238:3333/api/v1/tb_game_components');
            this.setState({response})
            console.warn(response);
          } catch (error) {
            console.warn(error);
          }
//        await axios.get('http://192.168.0.12:3333/api/v1/tb_game_components')
//   .then(function (response) {
//     // handle success
//     this.setState({response})
//     console.warn(this.state.response.id);
//   })
//   .catch(function (error) {
//     // handle error
//     console.warn(error);
//   })

   
    }
    state = {
        data: [
            { name: 'We Tu Lo', score: null, iconUrl: 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094043-stock-illustration-profile-icon-male-avatar.jpg' },
            { name: 'Adam Savage', score: 12, iconUrl: 'https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png' },
            { name: 'Derek Black', score: 244, iconUrl: 'http://ttsbilisim.com/wp-content/uploads/2014/09/20120807.png' },
            { name: 'Erika White', score: 0, iconUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-eskimo-girl.png' },
            { name: 'Jimmy John', score: 20, iconUrl: 'https://static.witei.com/static/img/profile_pics/avatar4.png' },
          
        ]
    }

    _alert = (title, body) => {
        Alert.alert(title, body,
            [{ text: 'OK', onPress: () => { } },],
            { cancelable: false }
        )
    }

    render() {
        const props = {
            labelBy: 'name',
            sortBy: 'score',
            data: this.state.data,
            icon: 'iconUrl',
            onRowPress: (item, index) => {
                this._alert(item.name + " clicked",
                    item.score + " points, wow!")
            },
            evenRowColor: '#edfcf9',
        }

        return (
            <View>
                <StatusBar 
              backgroundColor = '#940101'
              barStyle = 'light-content'
            />
                {/* Ghetto Header */}
                <View style={{ paddingTop: 50, backgroundColor: '#940101', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'white', paddingBottom: 10 }}>
                        Leaderboard
                    </Text>
                </View>
                <Leaderboard {...props} />
            </View>
        )
    }
}