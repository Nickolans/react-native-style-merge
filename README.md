# react-native-style-merge

## Getting started

`$ npm install react-native-style-merge --save`

### Mostly automatic installation

`$ react-native link react-native-style-merge`

## Usage

```javascript
// 1. Declare global overriding stylesheet
import StyleSheet from "react-native-style-merge";

StyleSheet.global = {
  button: {
    backgroundColor: "green",
  },
};

// 2. Implement local styles as usual
import StyleSheet from "react-native-style-merge";

const Styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: 100,
    height: 50,
  },
});

// 3. Example: Button with green background, height of 100, and width of 50
<TouchableOpacity
  onPress={() => console.log("Pressing cool button")}
  style={Styles.button}
>
  Cool button!!
</TouchableOpacity>;
```
