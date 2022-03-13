import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";


const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    color: (opacity = 1) => `rgba(227,168,159, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

export default function Chart({height,strokeWidth,radius}) {
    // each value represents a goal ring in Progress chart
    const data = {
        labels: ["Men H", "Sas", "F/SS","Work","SoP"], // optional
        data: [0.8, 0.25, 0.45,0.6,0.4],
    };
    return (
        <View>
            <ProgressChart
                data={data}
                width={screenWidth}
                height={height}
                strokeWidth={strokeWidth}
                radius={radius}
                chartConfig={chartConfig}
                // hideLegend={true}
                center={50}
                // style={{backgroundColor:'white'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({})