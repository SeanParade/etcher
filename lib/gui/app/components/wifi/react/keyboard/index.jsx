'use strict'

const Types = require('prop-types')
const React = require('react')
const Keyboard = require('./react-virtual-keyboard.custom.jsx')

class KBInput extends React.PureComponent {
  componentDidMount () {
    this.keyboard.interface.keyaction.enter = (base) => {
      return this.keyboard.interface.keyaction.accept(base)
    }
  }

  render () {
    return (<Keyboard
      value={this.props.value}
      type={this.props.type || 'text'}
      name="keyboard"
      options={{
        type: 'input',
        layout: 'custom',
        usePreview: false,
        useWheel: false,
        stickyShift: true,
        updateOnChange: true,
        initialFocus: true,
        closeByClickEvent: false,
        beforeVisible: (evt, keyboard, el) => {
          keyboard.$keyboard.show('slide')
        },
        display: {
          'meta-1': '?123',
          'meta-2': 'ABC'
        },
        customLayout: {
          normal: [
            'q w e r t y u i o p {b}',
            'a s d f g h j k l {e}',
            '{s} z x c v b n m , . {s}',
            '{meta-1} / {space} \' - {meta-1}'
          ],
          'meta-2': [
            'q w e r t y u i o p {b}',
            'a s d f g h j k l {e}',
            '{s} z x c v b n m , . {s}',
            '{meta-1} / {space} \' - {meta-1}'
          ],
          shift: [
            'Q W E R T Y U I O P {b}',
            'A S D F G H J K L {e}',
            '{s} Z X C V B N M , . {s}',
            '{meta-1} / {space} \' - {meta-1}'
          ],
          'meta-2-shift': [
            'Q W E R T Y U I O P {b}',
            'A S D F G H J K L {e}',
            '{s} Z X C V B N M , . {s}',
            '{meta-1} / {space} \' - {meta-1}'
          ],
          'meta-1': [
            '1 2 3 4 5 6 7 8 9 0 {b}',
            '@ # $ _ & - + ( ) {e}',
            '{s} * " \' : ; ! ? / {s}',
            '{meta-2} / {space} \' - {meta-2}'
          ],
          'meta-1-shift': [
            '~ ` | • √ π ÷ x ¶ ∆ {b}',
            '£ ¢ € ¥ ^ ° = { } {e}',
            '{s} % © ® ™ ✔ [ ] \\ {s}',
            '{meta-2} / {space} \' - {meta-2}'
          ]
        }
      }}
      onChange = { this.props.onChange }
      onAccepted = { this.props.onSubmit }
      ref = { (kb) => { this.keyboard = kb }}
    />)
  }
}

KBInput.propTypes = {
  type: Types.string,
  value: Types.string,
  onChange: Types.func,
  onSubmit: Types.func
}

module.exports = KBInput
