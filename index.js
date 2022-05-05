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

class StyleSheet {

  static global = {};
  static reversePrecedence = false;

  static configure = ({ global, reversePrecedence }) => {
    this.global = global;
    this.reversePrecedence = reversePrecedence;
  }

  static create = (stylesObj, rpres) => {

    var obj = {...stylesObj};

    // 1. Check local precedence first
    if (rpres != null) {
      if (rpres == true) {
        return RN.StyleSheet.create(Merger.deepMerge(this.global, obj));
      }  else if (rpres == false) {
        return RN.StyleSheet.create(Merger.deepMerge(obj, this.global)); 
      }
    }

    // 2. Check global precedence
    if (this.reversePrecedence) {
      return RN.StyleSheet.create(Merger.deepMerge(this.global, obj));
    }

    // 3. Default
    return RN.StyleSheet.create(Merger.deepMerge(obj, this.global));
  }
}

export default StyleSheet;
