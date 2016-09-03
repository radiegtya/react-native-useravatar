[![npm version](https://badge.fury.io/js/react-useravatar-native.svg)](https://badge.fury.io/js/react-useravatar-native)

# react-useravatar-native

## Install

Run `npm i react-useravatar-native --save`

![alt UserAvatar demo](/demo.JPG)

## Usage

**Basic**

```javascript
import UserAvatar from 'react-useravatar-native'

...

render() {
    return (
        <UserAvatar
            username="bltnico"
            size={70}
            onLongPress={this.getUserInfos} />
    );
}

```

**Custom design**

```javascript
import UserAvatar from 'react-useravatar-native'

...

constructor() {
    ...
    this.state = { opacity : 0 };
}

render() {
    let _opacity = this.state.opacity;

    return (
        <UserAvatar
            style={[ styles.customAvatar, { opacity : _opacity } ]}
            textStyle={styles.customAvatarText}
            username="bltnico"
            onPressIn={() => { this.setState({ opacity : 0.5 }); }}
            onPressOut={() => { this.setState({ opacity : 1 }); }} />
    );
}

let styles = StyleSheet.create({
    customAvatar : {
        position : 'absolute',
        justifyContent : 'flex-end'
    },
    customAvatarText : {
        fontWeight : "700"
    }
});

```

## Props

* **username** *string* (required)

* **size** *integer*

* **style** *object*

* **onPress** *function*

* **onLongPress** *function*

* **onPressIn** *function*

* **onPressOut** *function*

* **textLength** *integer*

* **textStyle** *object*

* **textColor** *string*

* **borderStyle** *boolean*

## Dev and test

Install babel by `npm install`

And compile with `babel src --out-dir lib`

Babel `.babelrc` use es2015 and react compiler
