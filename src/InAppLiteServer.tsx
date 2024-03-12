import React, {useEffect, useMemo, useState} from 'react';
import RNFS from 'react-native-fs';
import {ActivityIndicator, BackHandler, Linking, StyleSheet, View} from 'react-native';
// @ts-ignore
import StaticServer from 'react-native-static-server';

const useEmbeddedServer = true;

interface IProps {
  readonly children: React.ReactElement
}

const realFrontendPath = '/static/common';

export function InAppLiteServer(props: IProps) {

  const server = useMemo(() => new StaticServer(8050, RNFS.MainBundlePath + realFrontendPath, {localOnly: true}), [])

  const [running, setRunning] = useState(false)
  const [url, setUrl] = useState("")

  useEffect(() => {

      server.start().then((url: string) => {
        console.log('Serving at URL', url);
        setRunning(true)
        setUrl(url)
      })

      return () => {
        server.stop()
      }

  }, [server])

  if (running) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size="large" style={styles.spinner}/>
      </View>
    );
  }

  return props.children

}

const styles = StyleSheet.create({
  spinnerWrapper: {
    flex: 1,
    alignItems: "center"
  },
  spinner: {
    flex: 1,
  },
  webview: {
    // flex: 1,
    height: '100%'
  },
});
