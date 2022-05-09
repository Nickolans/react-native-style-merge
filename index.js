// main index.js

import RN from 'react-native';

class Merger {
  /**
   * Handles object merge
   * @param {*} obj 
   * @param {*} global 
   * @returns 
   */
   static deepMerge(obj, global) {

    if (global == {}) {
      return obj;
    } else if (obj == {}) {
      return global;
    }

    var result = {...obj};

    for (const key in global) {
      if (typeof global[key] === "object") {
        if (!result[key]) result[key] = {};
        result[key] = this.deepMerge(result[key], global[key]);
      } else {
        result[key] = global[key];
      }
    }
    return result;
  }
}

class StyleSheetStore {

  create = (stylesObj, global, rpres) => {

    var obj = {...stylesObj};

    // 1. Check local precedence first
    if (rpres != null) {
      if (rpres == true) {
        return RN.StyleSheet.create(Merger.deepMerge(global, obj));
      }  else if (rpres == false) {
        return RN.StyleSheet.create(Merger.deepMerge(obj, global)); 
      }
    }

    // 2. Default
    const result = RN.StyleSheet.create(Merger.deepMerge(obj, global));
    return result;
  }
}

const StyleSheetMerger = new StyleSheetStore();
export default StyleSheetMerger;