import { StyleSheet, Text, View } from 'react-native';
import WebView from "react-native-webview";
import {AdaptiveKeyboardAvoidingView} from "./src/AdaptiveKeyboardAvoidingView";
import {AdaptiveSafeAreaView} from "./src/AdaptiveSafeAreaView";
import {InAppLiteServer} from "./src/InAppLiteServer";

export default function App() {
  return (

    <AdaptiveKeyboardAvoidingView>
      <AdaptiveSafeAreaView>
        <View style={styles.container}>

          <InAppLiteServer>

            <WebView
              nativeConfig={{props: {webContentsDebuggingEnabled: true}}}
              ref={(ref: any) => {
                // if (ref) {
                //   this.webview = ref;
                // }
              }}
              // Allow any URL to be loaded within the WebView
              originWhitelist={['*']}

              // Enable JS
              javaScriptEnabled={true}

              // Scrollable viewport
              scrollEnabled={true}

              // Enable Analytics cookies and such
              thirdPartyCookiesEnabled={true}

              source={{uri: 'https://commonwealth.im/'}}

              onMessage={(event) => {
              }}
              onNavigationStateChange={(event) => {
              }}
              style={styles.webview}
            />
          </InAppLiteServer>

        </View>
      </AdaptiveSafeAreaView>
    </AdaptiveKeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  webview: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
    borderWidth: 5,
    borderColor: 'black'
  },
});
