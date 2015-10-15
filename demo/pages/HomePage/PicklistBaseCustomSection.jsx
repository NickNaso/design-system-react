/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

'use strict';

import React from 'react';
import SLDSPicklistBase from '../../../components/SLDSPicklistBase';
import {Icon} from '../../../components/SLDSIcons';

import {default as PrismCode} from 'react-prism/lib/PrismCode';



const CustomListItemLabel = React.createClass( {
  getDefaultProps () {
    return {
      index: 0,
      label: '',
      value: null,
      inverted: false,
      isSelected: false,
      isHighlighted: false,
      data:{}
    };
  },
  handleMouseOver (event) {
    console.log('OVER: '+this.props.label);
  },

  render() {
    return <section
      onMouseOver={this.handleMouseOver}
    >
      {
        this.props.isSelected?<Icon name='like'  position='left' category='utility' />:null
      }
      {
        this.props.data.title
      }
    </section>;
  }
});


module.exports = React.createClass( {

  getDefaultProps () {
    return {};
  },

  getInitialState () {
    return {};
  },

  handleOnUpdateHighlighted () {
    console.log('onUpdateHighlighted should be defined');
  },

  handleOnSelect() {
    console.log('onSelect should be defined');
  },

  handleOnClick() {
    console.log('onClick should be defined');
  },

  render() {
    return (


            <div className="slds-p-around--medium">

              <h3 className="slds-text-heading--medium slds-truncate">
                Picklist Base with Custom Item Label Renderer
              </h3>

              <PrismCode className='language-markup'>
                {require("raw-loader!../../code-snippets/SLDSPicklistBaseCustomPage.txt")}
              </PrismCode>

              <div className="slds-p-vertical--large">
                <SLDSPicklistBase
                    options={[
                      {label:'A Option Option Super Super Long',value:'A0',title:'SUPER TITLE B0'},
                      {label:'B Option',value:'B0',title:'SUPER TITLE B0'},
                      {label:'C Option',value:'C0',title:'SUPER TITLE C0'},
                      {label:'D Option',value:'D0',title:'SUPER TITLE D0'},
                      {label:'E Option',value:'E0',title:'SUPER TITLE E0'},
                      {label:'A1 Option',value:'A1',title:'SUPER TITLE A1'},
                      {label:'B2 Option',value:'B1',title:'SUPER TITLE B1'},
                      {label:'C2 Option',value:'C1',title:'SUPER TITLE C1'},
                      {label:'D2 Option',value:'D1',title:'SUPER TITLE D1'},
                      {label:'E2 Option Super Super Long',value:'E1',title:'SUPER TITLE E1'},

                    ]}
                    value='C0'
                    label="Contacts"
                    modal={true}
                    placeholder = "Select a contact"
                    onSelect={this.handleOnSelect}
                    onClick={this.handleOnClick}
                    listItemRenderer={CustomListItemLabel}
                    onUpdateHighlighted={this.handleOnUpdateHighlighted} />


            </div>
          </div>
    );
  }
});