import React from 'react';
import {Platform, View, SafeAreaView, StatusBar, StyleSheet} from "react-native";

interface IProps {
  readonly children: JSX.Element;
}

/**
 * True if we have a notch.  This is only applicable on Android.
 */
function hasNotch(): true | false {

  // https://stackoverflow.com/questions/51858807/react-native-detect-screen-notch

  if (Platform.OS === 'android') {
    return StatusBar.currentHeight !== undefined && StatusBar.currentHeight > 24;
  }

  return false

}

export const AdaptiveSafeAreaView = (props: IProps) => {

  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView style={styles.ios}>
        {props.children}
      </SafeAreaView>
    );
  }

  if (Platform.OS === 'android') {
    return (
      <View style={styles.android}>
        {props.children}
      </View>
    );
  }

  return (
    <View style={styles.other}>
      {props.children}
    </View>
  )

}

const styles = StyleSheet.create({
  ios: {
    flex: 1,
    backgroundColor: '#303030',
  },
  android: {
    flex: 1,
    backgroundColor: '#303030',
    paddingTop: hasNotch() ? StatusBar.currentHeight : 0,
  },
  other: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
