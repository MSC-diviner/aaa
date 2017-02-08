/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TabBarIOS,
    ListView,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require("Dimensions");
var w = Dimensions.get("window").width;
var cols = 2;
var cellWidth = 160;
var cellHeight = 145;
var vMargin = (w - cellWidth*cols)/(cols+1);
var cellWidth1 = 175;
var cellHeight1 = 200;
var vMargin1 = (w - cellWidth1*cols)/(cols+1);
var hMargin = 25;
//导入数据
var my = "123546";
var shareData = require("./img.json");
var shareData1 = require("./img1.json");
var HomeWork = React.createClass({
  getInitialState:function () {
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
    return{
      dataSource:ds.cloneWithRows(shareData),
      dataSource1:ds.cloneWithRows(shareData1),
      selectedTabBarItem:'第一页'
    }
  },
  render:function () {
    return (
        <View style={styles.container}>
          <TabBarIOS
              barTintColor='black'//设置颜色
              tintColor='orange'//选中颜色
          >
            {/*第一块*/}
            <TabBarIOS.Item
                systemIcon='contacts'
                badge='3'
                selected={this.state.selectedTabBarItem == '第一页'}
                onPress={() => {this.setState({
                  selectedTabBarItem:'第一页'
                })}}
            >
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
                  contentContainerStyle={styles.listViewStyle}
              />

            </TabBarIOS.Item>
            {/*第二块*/}
            <TabBarIOS.Item
                systemIcon='bookmarks'
                selected={this.state.selectedTabBarItem == '第二页'}
                onPress={() => {this.setState({
                  selectedTabBarItem:'第二页'
                })}}
            >
              <ListView
                  dataSource={this.state.dataSource1}
                  renderRow={this.renderRow1}
                  contentContainerStyle={styles.listViewStyle1}
              />
            </TabBarIOS.Item>


          </TabBarIOS>
        </View>
    )
  },
  renderRow:function (shareData) {
    return (
        <TouchableOpacity>
          <View style={styles.innerViewStyle}>
            <Image
                source={require("./1.jpg")}
                style={styles.iconStyle}
            />
            <Text style={styles.ImgTextStyle} numberOfLines={1}>{shareData.name}</Text>
            <Text style={styles.TimeStyle}>{shareData.time}</Text>
          </View>
        </TouchableOpacity>
    )
  },
  renderRow1:function (shareData1) {
    return (
        <TouchableOpacity>
          <View style={styles.innerViewStyle1}>
            <Image
                source={require("./2-2.jpg")}
                style={styles.iconStyle1}
            />
            <Text style={styles.ImgTextStyle1} numberOfLines={1}>{shareData1.name}</Text>
          </View>
        </TouchableOpacity>
    )
  },
});


const styles = StyleSheet.create({
  container: {
    marginTop:22,
    flex:1,
    backgroundColor:'white',
  },
  headerViewStyle:{
    height:64,
    backgroundColor:"black",
    justifyContent:'center',
    alignItems:"center",
  },
  commonViewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  iconStyle:{
    width:cellWidth,
    height:cellHeight,
    alignItems:'center',
  },
  listViewStyle:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
  },
  ImgTextStyle:{
    alignItems:'center',
    color:"white",
    marginTop:5,
  },
  TimeStyle:{
    alignItems:'center',
    color:'purple',
    marginTop:5,
  },
  innerViewStyle:{
    width:cellWidth1,
    height:cellHeight1,
    marginLeft:vMargin1,
    marginTop:hMargin,
    alignItems:'center',
    backgroundColor:"gray",
    justifyContent:'center',
  },
  iconStyle1:{
    width:100,
    height:100,
    alignItems:'center',
    marginRight:50,
  },
  listViewStyle1:{
    flexWrap:'wrap',
    alignItems:'center',
  },
  ImgTextStyle1:{
    alignItems:'center',
    color:"deeppink",
    marginTop:5,
    width:w*0.7*0.5,
    fontSize:25,
  },
  innerViewStyle1:{
    width:w*0.7,
    alignItems:'center',
    backgroundColor:"white",
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:"gray",
    flexDirection:"row",
  }

});

AppRegistry.registerComponent('HomeWork', () => HomeWork);
