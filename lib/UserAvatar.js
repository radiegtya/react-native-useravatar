'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleSheet = _reactNative2.default.StyleSheet;
var View = _reactNative2.default.View;
var Text = _reactNative2.default.Text;
var TouchableWithoutFeedback = _reactNative2.default.TouchableWithoutFeedback;

/**
 * @class UserAvatar
 * @extends React.Component
 *
 * @author https://github.com/bltnico
 * @url https://github.com/bltnico/react-user-avatar
 * @version 1.0.0
 *
 * @example
 *
 * <UserAvatar
 *     size={100}
 *     style={styles.useravatar}
 *     textStyle={styles.useravatarText}
 *     onPress={this.doSomething}
 *     onPressIn={this.doSomething}
 *     onPressOut={this.doSomething}
 *     onLongPress={this.doSomething}
 *     username="bltnico"
 *     borderStyle={false}
 *     textLength={2}
 *     textColor="#ffffff" />
 *
 */

var UserAvatar = function (_React$Component) {
    _inherits(UserAvatar, _React$Component);

    /**
     * Constructor
     *
     * @param {Object} props
     */

    function UserAvatar(props) {
        _classCallCheck(this, UserAvatar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserAvatar).call(this, props));

        _this.state = {
            color: null,
            text: null
        };
        return _this;
    }

    /**
     * @static getColor
     * @param {String} str
     * @return {String}
     */

    _createClass(UserAvatar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                color: this.getColor(),
                text: this.getText()
            });
        }

        /**
         * Thanks to Cristian Sanchez
         * @url http://stackoverflow.com/a/3426956/4185200
         *
         * @param {String} str
         * @return {String}
         */

    }, {
        key: 'hashCode',
        value: function hashCode(str) {
            var hash = 0,
                i = 0;
            for (i; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }return hash;
        }

        /**
         * Thanks to Cristian Sanchez
         * @url http://stackoverflow.com/a/3426956/4185200
         *
         * @param {Integer} int
         * @return {String}
         */

    }, {
        key: 'intToRGB',
        value: function intToRGB(i) {
            var c = (i & 0x00FFFFFF).toString(16).toUpperCase();

            return "00000".substring(0, 6 - c.length) + c;
        }

        /**
         * Get color with username
         * @return {String}
         */

    }, {
        key: 'getColor',
        value: function getColor() {
            var hash = this.hashCode(this.props.username);
            return this.intToRGB(hash);
        }

        /**
         * Get text with username
         * @return {String}
         */

    }, {
        key: 'getText',
        value: function getText() {
            var f = undefined,
                l = undefined;
            f = this.props.username.substr(0, 1);
            l = this.props.username.substr(this.props.username.length - 1, this.props.username.length);
            return (f + l).toUpperCase();
        }

        /**
         * Event when user press on user avatar
         * @return {Function}
         */

    }, {
        key: '_onPress',
        value: function _onPress() {
            return this.props.onPress();
        }

        /**
         * Event when user exec a long press on user avatar
         * @return {Function}
         */

    }, {
        key: '_onLongPress',
        value: function _onLongPress() {
            return this.props.onLongPress();
        }

        /**
         * Event when user press in user avatar
         * @return {Function}
         */

    }, {
        key: '_onPressIn',
        value: function _onPressIn() {
            return this.props.onPressIn();
        }

        /**
         * Event when user release user avatar
         * @return {Function}
         */

    }, {
        key: '_onPressOut',
        value: function _onPressOut() {
            return this.props.onPressOut();
        }

        /**
         * Get user avatar container style
         * @return {Object}
         */

    }, {
        key: 'getContainerStyle',
        value: function getContainerStyle() {
            return {
                backgroundColor: !this.props.borderStyle ? "#" + this.state.color : "transparent",
                borderRadius: this.props.size / 2,
                width: this.props.size,
                height: this.props.size
            };
        }

        /**
         * Get text style
         * @return {Object}
         */

    }, {
        key: 'getTextStyle',
        value: function getTextStyle() {
            return {
                color: !this.props.borderStyle ? this.props.textColor : this.state.color,
                fontSize: this.props.size / 3
            };
        }

        /**
         * Render UserAvatar component
         * @return {String}
         */

    }, {
        key: 'render',
        value: function render() {

            return _reactNative2.default.createElement(
                TouchableWithoutFeedback,
                {
                    onPress: this._onPress.bind(this),
                    onLongPress: this._onLongPress.bind(this),
                    onPressIn: this._onPressIn.bind(this),
                    onPressOut: this._onPressOut.bind(this) },
                _reactNative2.default.createElement(
                    View,
                    { style: [styles.container, this.getContainerStyle(), this.props.style] },
                    _reactNative2.default.createElement(
                        Text,
                        { style: [this.getTextStyle(), this.props.textStyle] },
                        this.state.text
                    )
                )
            );
        }
    }], [{
        key: 'getColor',
        value: function getColor(str) {
            return this.intToRGB(this.hashCode(str));
        }
    }]);

    return UserAvatar;
}(_reactNative2.default.Component);

exports.default = UserAvatar;

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

/**
 * Define UserAvatar propTypes
 */
UserAvatar.propTypes = {
    username: _reactNative2.default.PropTypes.string.isRequired,
    style: _reactNative2.default.PropTypes.object,
    textStyle: _reactNative2.default.PropTypes.object,
    size: _reactNative2.default.PropTypes.number,
    onPress: _reactNative2.default.PropTypes.func,
    onPressIn: _reactNative2.default.PropTypes.func,
    onPressOut: _reactNative2.default.PropTypes.func,
    onLongPress: _reactNative2.default.PropTypes.func,
    textLength: _reactNative2.default.PropTypes.number,
    textColor: _reactNative2.default.PropTypes.string,
    borderStyle: _reactNative2.default.PropTypes.bool
};

/**
 * Init default UserAvatar props
 */
UserAvatar.defaultProps = {
    size: 100,
    textLength: 2,
    textColor: "#ffffff",
    borderStyle: false
};