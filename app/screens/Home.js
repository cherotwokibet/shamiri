import React, { useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View , 
    StatusBar,
    ImageBackground,
    Button,
    Pressable 
} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Chart from '../components/Chart';
import {useNavigation} from '@react-navigation/native'



export default function Home() {
    let day1 =  moment()
    const [day,setDay] = useState(day1)
    let year = day.format('YYYY')

    const start = day.subtract(3,'days').format('MMM D') 
    const end = day.add(6, 'days').format('MMM D')  // total 4 days enabled
    // console.log(day)
    let datesWhitelist = [{
        start: moment()        
    }];

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.topthird}>
                <View>
                    <Text style={styles.text} >For You </Text>
                    <Text style={styles.text2} > {moment().format('MMM D YYYY, dddd')} </Text>

                </View>
                <View style={styles.calendar}>
                    <CalendarStrip
                        scrollable
                        scrollerPaging
                        onDateSelected={(x)=>{
                            setDay(x)
                        }}
                        headerText={`${start } - ${end }, ${year} `}
                        style={{
                            height:110,
                            padding: 5,
                            borderRadius: 30,
                            position:'relative',
                            
                            
                            
                        }}
                        calendarColor={'#a8d9cd'}
                        calendarHeaderStyle={{color: 'white',fontSize:18}}
                        dateNumberStyle={{color: 'white',fontSize:13}}
                        dateNameStyle={{color: 'white',fontSize:13}}
                        iconContainer={{flex: 0.1}}
                        highlightDateNumberStyle={{color: 'white',fontSize:13}}
                        highlightDateNameStyle={{color: 'white',fontSize:13}}
                        disabledDateNameStyle={{color: 'black',fontSize:13}}
                        disabledDateNumberStyle={{color: 'black',fontSize:13}}
                        datesWhitelist={datesWhitelist}    
                    />

                </View>

            </View>

            <View style={styles.today}>
                <Text style={styles.text3}>TODAY</Text>
                <Chart
                    height={150}
                    radius={34}
                    strokeWidth={5}
                />
                
                <Pressable style={styles.button} onPress={()=> navigation.navigate('daily')}>
                    <Text style={styles.butext}> More <MaterialCommunityIcons name='menu-right' color='white' size={20}  /></Text> 
                </Pressable>
            </View>

            <View style={styles.final}>
                <Text style={styles.text4}>Your wellness plan </Text>
                <View style={styles.wellness}>
                    <ImageBackground style={styles.image} imageStyle={{borderRadius:20}} source={require('./../assets/cons.png')}>
                        <Text style={styles.consult}>Veronicah N.</Text>
                        <Text style={styles.consult2}>Shamiri Licensed Counselor</Text>

                    </ImageBackground>
                    <ImageBackground style={styles.image} imageStyle={{borderRadius:20}} source={require('./../assets/cons.png')}>
                        <Text style={styles.consult}>Sunehra A. </Text>
                        <Text style={styles.consult2}>Shamiri Licensed Counselor</Text>
                    </ImageBackground>

                </View>
            </View>
           

        </View>
        
  )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1 ,
        position:'relative',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
    },
    topthird : {
        backgroundColor:'#85bdaf',
        // borderRadius:50,
        borderBottomLeftRadius:50,
        flex:1
        
    },
    today:{
        flex:1,

    },
    final:{
        flex:1,
        // elevation:1
    }, 
    text:{
        // fontFamily:'Raleway',
        position:'relative',
        fontSize:30,
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom:5,
        left:50,
        color:'white'

    },
    text2:{
        fontSize:15,
        color:'white',
        left:50,
        paddingBottom:5
    },
    calendar: {
        position:'relative',
        width:'80%',
        height:'30%',
        left:'10%',
    },
    text3:{
        color:'#c4c4c4',
        fontSize:20,
        paddingLeft:20,
        paddingTop:5
    },
    text4:{
        color:'#c4c4c4',
        fontSize:18,
        paddingLeft:20,
        paddingTop:5
    },
    image:{
        height:150,
        width:150,
        borderRadius:20,
        
    },
    wellness:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
        paddingTop:10,
    },
    button:{
        
        width:80,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#a8d9cd',
    },
    butext:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',

    },
    consult:{
        fontSize:15,
        color:'white',
        fontWeight:'bold',
        bottom:-100,
        paddingLeft:5

    },
    consult2:{
        fontSize:10,
        color:'white',
        bottom:-100,
        paddingLeft:5

    } 

})
