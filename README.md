# react-native-style-merge

## Getting started

`$ npm install react-native-style-merge --save`

### Mostly automatic installation

`$ react-native link react-native-style-merge`

## Usage

```javascript
/* 1. Declare global overriding stylesheet */

// CustomStyleSheet.jsx
import GlobalStyles from "../Styles/global.styles";
import StyleSheetMerger from "react-native-style-merge";

const StyleSheet = {
  create: (styles, repres) => StyleSheetMerger.create(styles, GlobalStyles, repres)
}

export default StyleSheet;

/* 2. Implement local styles as usual */

// LocalStyleSheet.jsx
import StyleSheet from "../CustomStyleSheet.jsx";

const Styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: 100,
    height: 50,
  },
});

export default Styles;

/* 3. Example: Button with green background, height of 100, and width of 50 */

// MyComponent.jsx
import Styles from "./LocalStyleSheet"

<TouchableOpacity
  onPress={() => console.log("Pressing cool button")}
  style={Styles.button}
>
  Cool button!!
</TouchableOpacity>;
```
