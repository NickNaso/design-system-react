'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                  Copyright (c) 2015, salesforce.com, inc. All rights reserved.
                                                                                                                                                                                                                                                                  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                                                                                                                                                                                                                                                                  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                                                                                                                                                                                                                                                                  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                                                                                                                                                                                                                                                                  Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
                                                                                                                                                                                                                                                                  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                                                                                                                                                                                                                  */

// # List Item Component

// ## Dependencies

// ### React


// ### classNames


// ### Icon


// ## Children


// ### Event Helpers


// ## Constants


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _listItemLabel = require('./list-item-label');

var _listItemLabel2 = _interopRequireDefault(_listItemLabel);

var _utilities = require('../../utilities');

var _constants = require('../../utilities/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Removes the need for `PropTypes`.
var PropTypes = _react2.default.PropTypes;

/**
 * Component description.
 */

var ListItem = _react2.default.createClass({
	displayName: _constants.LIST_ITEM,

	propTypes: {
		checkmark: PropTypes.bool,
		data: PropTypes.object,
		href: PropTypes.string,
		id: PropTypes.string.isRequired,
		index: PropTypes.number.isRequired,
		inverted: PropTypes.bool,
		isSelected: PropTypes.bool,
		label: PropTypes.string,
		labelRenderer: PropTypes.func,
		leftIcon: PropTypes.shape({
			category: PropTypes.string,
			name: PropTypes.string
		}),
		onSelect: PropTypes.func.isRequired,
		rightIcon: PropTypes.shape({
			category: PropTypes.string,
			name: PropTypes.string
		}),
		type: PropTypes.string,
		value: PropTypes.any
	},

	getDefaultProps: function getDefaultProps() {
		return {
			data: {},
			href: 'javascript:void(0);', // eslint-disable-line no-script-url
			inverted: false,
			isSelected: false,
			label: '',
			labelRenderer: _listItemLabel2.default,
			value: null
		};
	},
	handleClick: function handleClick(event) {
		if (this.props.type !== 'link' || this.props.href === 'javascript:void(0);') {
			// eslint-disable-line no-script-url
			_utilities.EventUtil.trapImmediate(event);
		}

		if (this.props.onSelect) {
			this.props.onSelect(this.props.index);
		}
	},
	handleMouseDown: function handleMouseDown(event) {
		_utilities.EventUtil.trapImmediate(event);
	},
	getLabel: function getLabel() {
		var Label = this.props.labelRenderer;
		return _react2.default.createElement(Label, {
			checkmark: this.props.checkmark,
			data: this.props.data,
			icon: this.getIcon('left'),
			index: this.props.index,
			inverted: this.props.inverted,
			isSelected: this.props.isSelected,
			label: this.props.label,
			value: this.props.value
		});
	},
	getIcon: function getIcon(position) {
		var classnames = ['slds-icon-text-default'];
		var iconProps = this.props[position + 'Icon'];

		if (position === 'left') {
			if (this.props.checkmark) {
				classnames.push('slds-icon--selected');
				iconProps = {
					category: 'utility',
					name: 'check'
				};
			}

			classnames.push('slds-m-right--x-small');
		} else {
			classnames.push('slds-m-left--small');
		}

		if (iconProps) {
			return _react2.default.createElement(_icon2.default, _extends({
				className: (0, _classnames2.default)(classnames),
				position: position,
				size: 'x-small'
			}, iconProps));
		}

		return null;
	},
	render: function render() {
		switch (this.props.type) {
			case 'header':
				{
					return _react2.default.createElement(
						'li',
						{ className: 'slds-dropdown__header slds-has-divider--top-space', onMouseDown: this.handleMouseDown, role: 'separator' },
						_react2.default.createElement(
							'span',
							{ className: 'slds-text-title--caps' },
							this.props.label
						)
					);
				}
			case 'divider':
				{
					return _react2.default.createElement('li', { className: 'slds-has-divider', onMouseDown: this.handleMouseDown, role: 'separator' });
				}
			case 'link':
			case 'item':
			default:
				{
					return _react2.default.createElement(
						'li',
						{
							'aria-selected': this.props.isSelected,
							className: (0, _classnames2.default)('slds-dropdown__item', { 'slds-is-selected': this.props.isSelected }),
							id: this.props.id,
							onMouseDown: this.handleMouseDown,
							role: 'presentation'
						},
						_react2.default.createElement(
							'a',
							{
								href: this.props.href,
								ref: 'link',
								'data-index': this.props.index,
								onClick: this.handleClick,
								role: 'menuitem',
								tabIndex: '-1'
							},
							this.getLabel(),
							this.getIcon('right')
						)
					);
				}
		}
	}
});

module.exports = ListItem;