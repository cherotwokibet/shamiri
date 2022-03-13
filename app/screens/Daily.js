import React, { useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View , 
    Switch,
    StatusBar, 
    LogBox
} from 'react-native'
import * as Progress from 'react-native-progress';
import Chart from '../components/Chart';
import MySwitchButton from 'switch-button-react-native'
import {useNavigation} from '@react-navigation/native'


export default function Daily() {

    const [isEnabled, setIsEnabled] = useState(false);
    // console. disableYellowBox = true;
    // LogBox.ignoreAllLogs();
    const navigation = useNavigation();
   
    return (
        <View style={styles.container}>

            <View style={styles.toggle}>
                <MySwitchButton  
                    onValueChange={
                        (x) => {
                            
                            if(x===2) {
                                navigation.navigate('weekly')

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

            <View style={styles.chart}>
                <Chart
                    height={250}
                    radius={32}
                    strokeWidth={7}
                />

            </View>

            <View style={styles.bar}>
                <View style={styles.metalspac}>
                    <View style={styles.mental}>
                        <Text>Mental Health</Text>
                        <Text>8/10</Text>
                    </View>
                    <Progress.Bar
                        // styleAttr="Horizontal"
                        // indeterminate={false}
                        progress={0.8}
                        color='#f6e9e7'
                        width={250}
                        height={15}
                        
                    />

                </View>

                <View style={styles.metalspac}>
                    <View style={styles.mental}>
                        <Text> Satisfaction</Text>
                        <Text> 2.5/10</Text>

                    </View>
                    <Progress.Bar
                        // styleAttr="Horizontal"
                        // indeterminate={false}
                        progress={0.25}
                        color='#e3a89f'
                        width={250}
                        height={15}
                        
                    />

                </View>

                <View style={styles.metalspac}>
                    <View style={styles.mental}>
                        <Text> Family/Social Support </Text>
                        <Text> 4.5/10</Text>
                    </View>
                    <Progress.Bar
                        // styleAttr="Horizontal"
                        // indeterminate={false}
                        progress={0.45}
                        color='#bcd9d1'
                        width={250}
                        height={15}
                        
                    />

                </View>

                <View style={styles.metalspac}>
                    <View style={styles.mental}>
                        <Text> Work</Text>
                        <Text> 6/10</Text>

                    </View>
                    <Progress.Bar
                        // styleAttr="Horizontal"
                        // indeterminate={false}
                        progress={0.6}
                        color='#85bdaf'
                        width={250}
                        height={15}
                        
                    />

                </View>

                <View style={styles.metalspac}>
                    <View style={styles.mental}>
                        <Text> Sense of Purpose </Text>
                        <Text> 4/10</Text>

                    </View>
                    <Progress.Bar
                        // styleAttr="Horizontal"
                        // indeterminate={false}
                        progress={0.4}
                        color='#85bdaf'
                        width={250}
                        height={15}
                        
                    />

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
    toggle:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingBottom:20
    },
    chart:{
        flex:1
    },
    bar:{
        flex:1,
        top:25,
    },
    mental:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    metalspac:{
        paddingLeft:10,
        paddingRight:10
    }

})
