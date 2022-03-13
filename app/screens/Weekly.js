import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import { LineChart} from 'react-native-chart-kit'
import { Dimensions } from "react-native";
import {useNavigation} from '@react-navigation/native'
import MySwitchButton from 'switch-button-react-native'


const screenWidth = Dimensions.get("window").width;



export default function Weekly() {

    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        color: (opacity = 1) => `rgba(227,168,159, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const data = {
        labels: ["S", "M", "T", "W", "T", "F","S"],
        datasets: [
          {
            data: [5, 6, 5, 6, 7, 7, 7],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
    };

    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.toggle}>
                <MySwitchButton  
                    onValueChange={
                        (x) => {
                            if(x===1) {
                                navigation.navigate('daily')
                            }
                            x=0

                        }
                    } 
                    text1 = 'Daily'                        // optional: first text in switch button --- default ON
                    text2 = 'Weekly'
                    switchWidth = {200} 
                    switchHeight = {40}
                    btnBackgroundColor = '#e9bdb6'
                    btnBorderColor = '#e9bdb6'  
                    
                    
                /> 
            </View>
            <View style={{flex:1,top:10}}>
                <Text style={styles.textmen}> Mental Health</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'flex-start',}}>
                
                <View>
                    <Text style={styles.textgray}> Weekly Average </Text>
                    <Text style={styles.textpink}> 6 </Text>
                </View>
                <View>
                    <Text style={styles.textgray}> Week-over-Week </Text>
                    <Text style={styles.textpink}> - 20% </Text>
                </View>
                <View>
                    <Text style={styles.textgray}> Goal </Text>
                    <Text style={styles.textpink}> 8 </Text>
                </View>

            </View>
            <View style={{flex:5}}>
                
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={200}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    bezier
                    fromZero
                    segments={4}
                    
                />

            </View>
            <View style={{flex:5}}>
                <Text style={styles.textrec}>Recommendation</Text>
                <Image style={{width:300, height:120,margin:10,borderTopLeftRadius:20,borderTopRightRadius:20}} source={require('./../assets/cons.png')} />
                <Text style={styles.textfinal1}>1-on-1 session </Text>
                <Text style={styles.textfinal2}>Talk to our therapist about employee burnout</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        paddingTop: Platform.OS === 'android' ? StatusBar .currentHeight : 0, 
    },
    toggle:{
        flex:0.3,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingBottom:20
    },
    textfinal1:{
        color:'#c4c4c4',
        fontSize:15,
        paddingLeft:20
    },
    textfinal2:{
        paddingLeft:20
    },
    textrec:{
        fontWeight:'bold',
        fontSize:17,
        paddingLeft:15
    },
    textmen:{
        fontWeight:'bold',
        fontSize:17,
        paddingLeft:15
    },
    textpink:{
        color:'#e9bdb6',
        fontSize:20
    },
    textgray:{
        color:'#b0b0b0'
    }
})